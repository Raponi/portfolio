import { getTranslations } from "next-intl/server";
import { getProjetos } from "@/lib/get-projetos";
import Hero from "@/components/Hero";
import CardProjeto from "@/components/CardProjeto";
import ScrollReveal from "@/components/ScrollReveal";

function formatarNumero(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M+";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".0", "") + "K+";
  return n.toString();
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const projetos = await getProjetos();
  const destaques = projetos.slice(0, 4);

  const totalViews = projetos.reduce((acc, p) => acc + (p.viewCount ?? 0), 0);
  const totalLikes = projetos.reduce((acc, p) => acc + (p.likeCount ?? 0), 0);

  return (
    <div className="flex flex-col items-center">
      <Hero />
      <section className="w-full max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <ScrollReveal delay={0}>
            <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border text-center">
              <p className="text-3xl font-bold text-dracula-primary">{formatarNumero(totalViews)}</p>
              <p className="text-dracula-muted text-sm mt-1">{t("stat_views")}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border text-center">
              <p className="text-3xl font-bold text-dracula-primary">{projetos.length}</p>
              <p className="text-dracula-muted text-sm mt-1">{t("stat_projetos")}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border text-center">
              <p className="text-3xl font-bold text-dracula-primary">{formatarNumero(totalLikes)}</p>
              <p className="text-dracula-muted text-sm mt-1">{t("stat_likes")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="w-full max-w-6xl px-4 py-16 pt-0">
        <h2 className="text-2xl font-bold text-dracula-primary mb-8">
          {t("destaques")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {destaques.map((projeto, i) => (
            <ScrollReveal key={projeto.slug} delay={i * 100}>
              <CardProjeto projeto={projeto} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
