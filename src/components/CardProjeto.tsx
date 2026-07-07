import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Projeto } from "@/data/projetos";

type Props = {
  projeto: Projeto;
};

export default function CardProjeto({ projeto }: Props) {
  return (
    <Link
      href={`/projetos/${projeto.slug}`}
      className="group block bg-dracula-surface rounded-lg overflow-hidden border border-dracula-border hover:border-dracula-primary transition-all hover:-translate-y-1"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={projeto.thumbnail}
          alt={projeto.titulo}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
            projeto.categoria === "tech"
              ? "bg-dracula-secondary text-dracula-bg"
              : "bg-dracula-accent text-dracula-bg"
          }`}>
            {projeto.categoria === "tech" ? "Tech" : "Creative"}
          </span>
          {projeto.isShort && (
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-dracula-success text-dracula-bg">
              Short
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-dracula-text group-hover:text-dracula-primary transition-colors line-clamp-2">
          {projeto.titulo}
        </h3>
      </div>
    </Link>
  );
}
