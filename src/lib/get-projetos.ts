import { projetosSource, type Projeto, type ProjetoSource } from "@/data/projetos-source";

const API_KEY = process.env.YOUTUBE_API_KEY;

function cleanDescription(raw: string): string {
  const firstLine = raw.split("\n").find((line) => line.trim().length > 0);
  if (!firstLine) return "";

  const cleaned = firstLine
    .replace(/https?:\/\/\S+/g, "")
    .replace(/#\S+/g, "")
    .replace(/@\S+/g, "")
    .trim();

  if (cleaned.length > 200) return cleaned.slice(0, 200).trimEnd() + "…";
  return cleaned;
}

function parseDuration(iso: string): string {
  const match = iso.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "—";
  const h = match[1] ? parseInt(match[1]) : 0;
  const m = match[2] ? parseInt(match[2]) : 0;
  const s = match[3] ? parseInt(match[3]) : 0;
  if (h > 0) return `${h}h ${m}min`;
  if (m > 0) return `${m} min`;
  return `${s}s`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
  });
}

function fallbackProjeto(src: ProjetoSource, index: number): Projeto {
  return {
    ...src,
    titulo: `Projeto ${index + 1}`,
    descricao: "",
    thumbnail: `/thumbnails/${src.categoria === "tech" ? "techbr-01.png" : "meyflower-01.png"}`,
    data: "",
    duracao: "",
    software: "DaVinci Resolve",
    viewCount: 0,
    likeCount: 0,
  };
}

export async function getProjetos(): Promise<Projeto[]> {
  if (!API_KEY) {
    return projetosSource.map(fallbackProjeto);
  }

  const ids = projetosSource.map((p) => p.youtubeId).join(",");

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn("YouTube API error:", res.status);
      return projetosSource.map(fallbackProjeto);
    }

    const data: {
      items: Array<{
        id: string;
        snippet: {
          title: string;
          description: string;
          thumbnails?: { high?: { url?: string }; maxres?: { url?: string } };
          publishedAt: string;
        };
        contentDetails: { duration: string };
        statistics?: { viewCount?: string; likeCount?: string };
      }>;
    } = await res.json();

    const apiMap = new Map(data.items.map((item) => [item.id, item]));

    return projetosSource.map((src, i) => {
      const api = apiMap.get(src.youtubeId);
      if (!api) return fallbackProjeto(src, i);

      return {
        ...src,
        titulo: api.snippet.title,
        descricao: cleanDescription(api.snippet.description),
        thumbnail: api.snippet.thumbnails?.maxres?.url
          || api.snippet.thumbnails?.high?.url
          || `/thumbnails/${src.categoria === "tech" ? "techbr-01.png" : "meyflower-01.png"}`,
        data: formatDate(api.snippet.publishedAt),
        duracao: parseDuration(api.contentDetails.duration),
        software: "DaVinci Resolve",
        viewCount: parseInt(api.statistics?.viewCount || "0"),
        likeCount: parseInt(api.statistics?.likeCount || "0"),
      };
    });
  } catch {
    console.warn("YouTube API fetch failed, using fallback");
    return projetosSource.map(fallbackProjeto);
  }
}

export async function getProjeto(slug: string): Promise<Projeto | null> {
  const projetos = await getProjetos();
  return projetos.find((p) => p.slug === slug) || null;
}
