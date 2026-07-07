import { getTranslations } from "next-intl/server";
import { getProjetos } from "@/lib/get-projetos";
import Hero from "@/components/Hero";
import CardProjeto from "@/components/CardProjeto";
import ScrollReveal from "@/components/ScrollReveal";

export default async function HomePage() {
  const t = await getTranslations("home");
  const projetos = await getProjetos();
  const destaques = projetos.slice(0, 4);

  return (
    <div className="flex flex-col items-center">
      <Hero />
      <section className="w-full max-w-6xl px-4 py-16">
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
