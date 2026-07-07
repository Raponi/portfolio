"use client";

import { useTranslations } from "next-intl";

type Props = {
  active: string;
  onChange: (cat: string) => void;
};

export default function FiltroCategorias({ active, onChange }: Props) {
  const t = useTranslations("projetos");

  const categorias = [
    { key: "todos", label: t("todos") },
    { key: "tech", label: t("tech") },
    { key: "creative", label: t("creative") },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {categorias.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === cat.key
              ? "bg-dracula-primary text-dracula-bg"
              : "bg-dracula-surface text-dracula-muted hover:text-dracula-text border border-dracula-border"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
