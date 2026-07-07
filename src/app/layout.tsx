import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rogerio Barbosa — Video Editor & Developer",
  description:
    "Portfólio de edição de vídeo e desenvolvimento. Transformo ideias em narrativas visuais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
