type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: number;
  likeCount: number;
};

type YouTubeApiItem = {
  id?: { videoId?: string };
  snippet: {
    title: string;
    description: string;
    thumbnails?: { high?: { url?: string } };
    publishedAt: string;
    resourceId?: { videoId?: string };
  };
  statistics?: {
    viewCount?: string;
    likeCount?: string;
  };
};

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_IDS = {
  techbr: "UC_TechBR",
  meyflower: "UC_MeyFlower",
};

async function fetchFromYouTube(url: string): Promise<YouTubeVideo[]> {
  if (!API_KEY) {
    console.warn("YOUTUBE_API_KEY not set, returning empty");
    return [];
  }

  try {
    const res = await fetch(`${url}&key=${API_KEY}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();

    return data.items.map((item: YouTubeApiItem) => ({
      id: item.id?.videoId || item.snippet?.resourceId?.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.high?.url || "",
      publishedAt: item.snippet.publishedAt,
      viewCount: parseInt(item.statistics?.viewCount || "0"),
      likeCount: parseInt(item.statistics?.likeCount || "0"),
    }));
  } catch {
    return [];
  }
}

export async function getUltimosVideos(): Promise<YouTubeVideo[]> {
  const urls = Object.values(CHANNEL_IDS).map(
    (id) =>
      `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${id}&maxResults=10`
  );
  const results = await Promise.all(urls.map(fetchFromYouTube));
  return results.flat().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getMaisVistos(): Promise<YouTubeVideo[]> {
  const urls = Object.values(CHANNEL_IDS).map(
    (id) =>
      `https://www.googleapis.com/youtube/v3/search?order=viewCount&part=snippet&channelId=${id}&maxResults=10`
  );
  const results = await Promise.all(urls.map(fetchFromYouTube));
  return results.flat().sort((a, b) => b.viewCount - a.viewCount);
}

export async function getMelhores(): Promise<YouTubeVideo[]> {
  const videos = await getUltimosVideos();
  return videos.sort((a, b) => b.likeCount - a.likeCount);
}
