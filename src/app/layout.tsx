import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rogerio Barbosa — Video Editor",
  description:
    "Edição de vídeo profissional para criadores de conteúdo digital. Transformo raw footage em vídeos prontos para publicar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
