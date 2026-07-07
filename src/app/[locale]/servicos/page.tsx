import { getTranslations } from "next-intl/server";

export default async function ServicosPage() {
  const t = await getTranslations("servicos");

  const servicos = [
    { key: "edicao", icon: "🎬" },
    { key: "motion", icon: "✨" },
    { key: "color", icon: "🎨" },
    { key: "finalizacao", icon: "🔊" },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dracula-text mb-2">{t("title")}</h1>
      <p className="text-dracula-muted mb-12">{t("desc")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicos.map((s) => (
          <div
            key={s.key}
            className="bg-dracula-surface rounded-lg p-6 border border-dracula-border hover:border-dracula-primary transition-colors"
          >
            <span className="text-3xl mb-4 block">{s.icon}</span>
            <h3 className="text-xl font-semibold text-dracula-text mb-2">
              {t(`${s.key}.title`)}
            </h3>
            <p className="text-dracula-muted">{t(`${s.key}.desc`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
