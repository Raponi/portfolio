import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjeto } from "@/lib/get-projetos";
import VideoPlayer from "@/components/VideoPlayer";
import ScrollReveal from "@/components/ScrollReveal";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <ScrollReveal>
        <Link
          href="/projetos"
          className="inline-block text-dracula-muted hover:text-dracula-primary transition-colors mb-8"
        >
          {t("voltar")}
        </Link>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="aspect-video rounded-lg overflow-hidden border border-dracula-border mb-8">
          <VideoPlayer youtubeId={projeto.youtubeId} thumbnail={projeto.thumbnail} />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <h1 className="text-3xl font-bold text-dracula-text mb-2">
          {projeto.titulo}
        </h1>
      </ScrollReveal>

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
