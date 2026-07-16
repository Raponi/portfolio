import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "@/i18n/navigation";

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

export default async function ServicosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("servicos");
  const tHome = await getTranslations({ locale, namespace: "contato" });

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {servicos.map((s, i) => (
          <ScrollReveal key={s.key} delay={i * 100}>
            <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border hover:border-dracula-primary transition-colors h-full">
              <span className={`w-3 h-3 rounded-full ${s.color} mb-4 block`} />
              <h3 className="text-xl font-semibold text-dracula-text mb-2">
                {t(`${s.key}.title`)}
              </h3>
              <p className="text-dracula-muted">{t(`${s.key}.desc`)}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="bg-dracula-surface rounded-lg p-8 border border-dracula-border">
          <h2 className="text-2xl font-bold text-dracula-primary mb-2">{t("precos_title")}</h2>
          <p className="text-dracula-muted mb-8">{t("precos_desc")}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-dracula-border">
                  <th className="pb-3 text-dracula-text font-semibold">{t("precos_col_duracao")}</th>
                  <th className="pb-3 text-dracula-text font-semibold text-right">{t("precos_col_preco")}</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-dracula-border/50 last:border-none"
                  >
                    <td className="py-3 text-dracula-text">{t(`precos_linha_${i}_faixa`)}</td>
                    <td className="py-3 text-dracula-primary font-semibold text-right">
                      {t(`precos_linha_${i}_preco`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-dracula-muted text-sm mt-6">{t("precos_nota")}</p>

          <div className="mt-6 p-4 bg-dracula-accent/10 border border-dracula-accent/30 rounded-lg text-center">
            <p className="font-semibold text-dracula-accent">{t("precos_teste")}</p>
            <p className="text-dracula-muted text-sm mt-1">{t("precos_teste_desc")}</p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contato"
              className="inline-block px-6 py-3 bg-dracula-primary text-dracula-bg font-semibold rounded-lg hover:bg-dracula-secondary transition-colors"
            >
              {tHome("form_title")}
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
