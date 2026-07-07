"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CardProjeto from "@/components/CardProjeto";
import FiltroCategorias from "@/components/FiltroCategorias";
import { projetos } from "@/data/projetos";

export default function ProjetosPage() {
  const t = useTranslations("projetos");
  const [filtro, setFiltro] = useState("todos");

  const filtrados =
    filtro === "todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dracula-text mb-2">{t("title")}</h1>
      <p className="text-dracula-muted mb-8">{t("desc")}</p>

      <FiltroCategorias active={filtro} onChange={setFiltro} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtrados.map((projeto) => (
          <CardProjeto key={projeto.slug} projeto={projeto} />
        ))}
      </div>
    </div>
  );
}
