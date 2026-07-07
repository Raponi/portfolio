import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getProjetos } from "@/lib/get-projetos";
import ProjetosGrid from "@/components/ProjetosGrid";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projetos" });
  return {
    title: `${t("title")} — Rogerio Barbosa`,
    description: t("desc"),
  };
}

export default async function ProjetosPage() {
  const t = await getTranslations("projetos");
  const projetos = await getProjetos();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="animate-in text-3xl font-bold text-dracula-text mb-2">{t("title")}</h1>
      <p className="animate-in animate-in-d1 text-dracula-muted mb-8">{t("desc")}</p>
      <ProjetosGrid projetos={projetos} />
    </div>
  );
}
