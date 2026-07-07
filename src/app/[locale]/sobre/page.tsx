import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sobre" });
  return {
    title: `${t("title")} — Rogerio Barbosa`,
  };
}

export default async function SobrePage() {
  const t = await getTranslations("sobre");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="animate-in text-3xl font-bold text-dracula-text mb-8">{t("title")}</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 space-y-4 text-dracula-text leading-relaxed">
          <p>{t("bio_1")}</p>
          <p>{t("bio_2")}</p>
          <p>{t("bio_3")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border">
          <h2 className="text-lg font-semibold text-dracula-primary mb-4">{t("ferramentas")}</h2>
          <ul className="space-y-2 text-dracula-text">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-primary rounded-full" />
              DaVinci Resolve (principal)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-secondary rounded-full" />
              Adobe Premiere
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-accent rounded-full" />
              After Effects
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-success rounded-full" />
              Photoshop
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-primary rounded-full" />
              Blender
            </li>
          </ul>
        </div>

        <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border">
          <h2 className="text-lg font-semibold text-dracula-primary mb-4">{t("stack_title")}</h2>
          <ul className="space-y-2 text-dracula-text">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-secondary rounded-full" />
              Next.js / TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-accent rounded-full" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-success rounded-full" />
              Google Ads / Merchant Center
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-primary rounded-full" />
              SEO / Copywriting
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dracula-secondary rounded-full" />
              Ferramentas de IA
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border">
        <h2 className="text-lg font-semibold text-dracula-primary mb-4">{t("experiencia")}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-dracula-text">{t("exp_techbr")}</h3>
            <p className="text-dracula-muted text-sm">{t("exp_techbr_desc")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-dracula-text">{t("exp_meyflower")}</h3>
            <p className="text-dracula-muted text-sm">{t("exp_meyflower_desc")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-dracula-text">{t("exp_mamae")}</h3>
            <p className="text-dracula-muted text-sm">{t("exp_mamae_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
