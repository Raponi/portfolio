import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicos" });
  return {
    title: `${t("title")} — Rogerio Barbosa`,
    description: t("desc"),
  };
}

export default async function ServicosPage() {
  const t = await getTranslations("servicos");

  const servicos = [
    { key: "edicao", color: "bg-dracula-primary" },
    { key: "motion", color: "bg-dracula-secondary" },
    { key: "color", color: "bg-dracula-accent" },
    { key: "finalizacao", color: "bg-dracula-success" },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="animate-in text-3xl font-bold text-dracula-text mb-2">{t("title")}</h1>
      <p className="animate-in animate-in-d1 text-dracula-muted mb-12">{t("desc")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicos.map((s, i) => (
          <ScrollReveal key={s.key} delay={i * 100}>
            <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border hover:border-dracula-primary transition-colors">
            <span className={`w-3 h-3 rounded-full ${s.color} mb-4 block`} />
            <h3 className="text-xl font-semibold text-dracula-text mb-2">
              {t(`${s.key}.title`)}
            </h3>
            <p className="text-dracula-muted">{t(`${s.key}.desc`)}</p>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
