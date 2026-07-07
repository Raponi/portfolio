"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CardProjeto from "@/components/CardProjeto";
import ScrollReveal from "@/components/ScrollReveal";
import type { Projeto } from "@/data/projetos-source";

type Props = {
  projetos: Projeto[];
};

export default function ProjetosGrid({ projetos }: Props) {
  const t = useTranslations("projetos");
  const [filtro, setFiltro] = useState("todos");

  const categorias = [
    { key: "todos", label: t("todos") },
    { key: "tech", label: t("tech") },
    { key: "creative", label: t("creative") },
  ];

  const filtrados =
    filtro === "todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro);

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFiltro(cat.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtro === cat.key
                ? "bg-dracula-primary text-dracula-bg"
                : "bg-dracula-surface text-dracula-muted hover:text-dracula-text border border-dracula-border"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtrados.map((projeto, i) => (
          <ScrollReveal key={projeto.slug} delay={i * 80}>
            <CardProjeto projeto={projeto} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
