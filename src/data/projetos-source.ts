export type ProjetoSource = {
  slug: string;
  youtubeId: string;
  categoria: "tech" | "creative";
  isShort?: boolean;
};

export type Projeto = ProjetoSource & {
  titulo: string;
  descricao: string;
  thumbnail: string;
  data: string;
  duracao: string;
  software: string;
  viewCount: number;
  likeCount: number;
};

export const projetosSource: ProjetoSource[] = [
  {
    slug: "lenovo-slim-5-review",
    youtubeId: "mJEeJgtbrN4",
    categoria: "tech",
  },
  {
    slug: "slim-3-vs-vivobook",
    youtubeId: "Ft3O1xtx-CY",
    categoria: "tech",
  },
  {
    slug: "melhores-notebooks-julho",
    youtubeId: "4BHxy7PQHVo",
    categoria: "tech",
  },
  {
    slug: "finn-ames-mashle",
    youtubeId: "SCtDabL89ug",
    categoria: "creative",
  },
  {
    slug: "short-sakamoto-days",
    youtubeId: "m6KfycbX0Wo",
    categoria: "creative",
    isShort: true,
  },
  {
    slug: "short-anime-edits",
    youtubeId: "jTJMuMqW7dM",
    categoria: "creative",
    isShort: true,
  },
  {
    slug: "personagem-sakamoto-days",
    youtubeId: "V4Ww6duYOZg",
    categoria: "creative",
  },
];
