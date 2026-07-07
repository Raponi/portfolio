export type Projeto = {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: "tech" | "creative";
  isShort?: boolean;
  thumbnail: string;
  youtubeId: string;
  data: string;
  detalhes: {
    software: string;
    duracao: string;
  };
};

export const projetos: Projeto[] = [
  {
    slug: "lenovo-slim-5-review",
    titulo: "Lenovo Slim 5 — O Notebook Perfeito Para 2026?",
    descricao: "Review completo do Lenovo Slim 5 com análise de desempenho, construção e custo-benefício para 2026.",
    categoria: "tech",
    thumbnail: "/thumbnails/techbr-01.png",
    youtubeId: "mJEeJgtbrN4",
    data: "2026",
    detalhes: {
      software: "DaVinci Resolve",
      duracao: "8 min",
    },
  },
  {
    slug: "slim-3-vs-vivobook",
    titulo: "Slim 3 R5 x Vivobook 15 R7 — Qual Levar?",
    descricao: "Comparativo direto entre dois notebooks populares para ajudar na escolha certa.",
    categoria: "tech",
    thumbnail: "/thumbnails/techbr-01.png",
    youtubeId: "Ft3O1xtx-CY",
    data: "2026",
    detalhes: {
      software: "DaVinci Resolve",
      duracao: "10 min",
    },
  },
  {
    slug: "melhores-notebooks-julho",
    titulo: "Melhores Notebooks custo benefício Julho",
    descricao: "Guia de compras com os melhores notebooks custo-benefício do mês.",
    categoria: "tech",
    thumbnail: "/thumbnails/techbr-01.png",
    youtubeId: "4BHxy7PQHVo",
    data: "2026",
    detalhes: {
      software: "DaVinci Resolve",
      duracao: "12 min",
    },
  },
  {
    slug: "mashle-magia-e-musculos",
    titulo: "Finn Ames de Mashle — Magia e Músculos",
    descricao: "Análise do personagem Finn Ames no universo de Mashle: Magia e Músculos.",
    categoria: "creative",
    thumbnail: "/thumbnails/meyflower-01.png",
    youtubeId: "C6SyYANpE8I",
    data: "2026",
    detalhes: {
      software: "DaVinci Resolve",
      duracao: "6 min",
    },
  },
  {
    slug: "anime-video-essay",
    titulo: "Vídeo Ensaio — Análise de Personagem",
    descricao: "Ensaio visual sobre construção de personagens no universo dos animes.",
    categoria: "creative",
    thumbnail: "/thumbnails/meyflower-01.png",
    youtubeId: "NYvuITNv9oI",
    data: "2026",
    detalhes: {
      software: "DaVinci Resolve, After Effects",
      duracao: "8 min",
    },
  },
];
