import { getTranslations } from "next-intl/server";
import { getProjetos } from "@/lib/get-projetos";
import ProjetosGrid from "@/components/ProjetosGrid";

export default async function ProjetosPage() {
  const t = await getTranslations("projetos");
  const projetos = await getProjetos();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dracula-text mb-2">{t("title")}</h1>
      <p className="text-dracula-muted mb-8">{t("desc")}</p>
      <ProjetosGrid projetos={projetos} />
    </div>
  );
}
