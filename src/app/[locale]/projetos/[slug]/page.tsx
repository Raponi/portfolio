import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjeto } from "@/lib/get-projetos";
import VideoPlayer from "@/components/VideoPlayer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".0", "") + "K";
  return n.toString();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const projeto = await getProjeto(slug);

  if (!projeto) return { title: "Not Found" };

  return {
    title: `${projeto.titulo} — Rogerio Barbosa`,
    description: projeto.descricao,
  };
}

export default async function ProjetoPage({ params }: Props) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "projetos" });

  const projeto = await getProjeto(slug);
  if (!projeto) notFound();

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: projeto.titulo,
    description: projeto.descricao,
    thumbnailUrl: projeto.thumbnail,
    duration: projeto.duracao ? `PT${projeto.duracao.replace("h", "H").replace(" min", "M").replace("s", "S")}` : undefined,
    uploadDate: projeto.data || undefined,
    interactionStatistic: projeto.viewCount > 0 ? [
      {
        "@type": "InteractionCounter",
        interactionType: "WatchAction",
        userInteractionCount: projeto.viewCount,
      },
    ] : undefined,
  };

  return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <JsonLd data={videoSchema} />
        <Link
          href="/projetos"
        className="animate-in inline-block text-dracula-muted hover:text-dracula-primary transition-colors mb-8"
      >
        {t("voltar")}
      </Link>

      <div className="animate-in animate-in-d1 aspect-video rounded-lg overflow-hidden border border-dracula-border mb-8">
        <VideoPlayer youtubeId={projeto.youtubeId} thumbnail={projeto.thumbnail} />
      </div>

      <h1 className="animate-in animate-in-d2 text-3xl font-bold text-dracula-text mb-2">
        {projeto.titulo}
      </h1>

      <ScrollReveal delay={300}>
        <div className="flex gap-3 mb-6">
          <span className={`px-3 py-1 rounded text-sm font-medium ${
            projeto.categoria === "tech"
              ? "bg-dracula-secondary text-dracula-bg"
              : "bg-dracula-accent text-dracula-bg"
          }`}>
            {projeto.categoria === "tech" ? "Tech" : "Creative"}
          </span>
          {projeto.isShort && (
            <span className="px-3 py-1 rounded text-sm font-medium bg-dracula-success text-dracula-bg">
              Short
            </span>
          )}
        </div>
      </ScrollReveal>

      {projeto.viewCount > 0 && (
        <ScrollReveal delay={350}>
          <div className="flex gap-8 mb-8">
            <div className="flex items-center gap-2 bg-dracula-surface px-4 py-3 rounded-lg border border-dracula-border">
              <svg className="w-5 h-5 text-dracula-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <div>
                <p className="text-lg font-bold text-dracula-text">{formatNum(projeto.viewCount)}</p>
                <p className="text-xs text-dracula-muted">{t("views")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-dracula-surface px-4 py-3 rounded-lg border border-dracula-border">
              <svg className="w-5 h-5 text-dracula-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div>
                <p className="text-lg font-bold text-dracula-text">{formatNum(projeto.likeCount)}</p>
                <p className="text-xs text-dracula-muted">{t("likes")}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal delay={400}>
        <p className="text-dracula-muted text-lg mb-8">{projeto.descricao}</p>
      </ScrollReveal>

      <ScrollReveal delay={500}>
        <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border">
          <h2 className="text-lg font-semibold text-dracula-text mb-4">
            {t("detalhes_tecnicos")}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-dracula-muted">{t("categoria")}:</span>
              <p className="text-dracula-text">{projeto.categoria === "tech" ? "Tech" : "Creative"}</p>
            </div>
            <div>
              <span className="text-dracula-muted">{t("data")}:</span>
              <p className="text-dracula-text">{projeto.data}</p>
            </div>
            <div>
              <span className="text-dracula-muted">Software:</span>
              <p className="text-dracula-text">{projeto.software}</p>
            </div>
            <div>
              <span className="text-dracula-muted">Duração:</span>
              <p className="text-dracula-text">{projeto.duracao}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
