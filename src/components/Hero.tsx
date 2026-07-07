"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pt-20 pb-12 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="animate-in text-4xl lg:text-5xl font-bold text-dracula-text mb-3">
          {t("title")}
        </h1>
        <p className="animate-in animate-in-d1 text-xl text-dracula-primary font-medium mb-4">
          {t("subtitle")}
        </p>
        <p className="animate-in animate-in-d2 text-dracula-muted max-w-lg mb-8">
          {t("hero_desc")}
        </p>
        <Link
          href="/projetos"
          className="animate-in animate-in-d3 inline-block px-6 py-3 bg-dracula-primary text-dracula-bg font-semibold rounded-lg hover:bg-dracula-secondary transition-colors"
        >
          {t("cta")}
        </Link>
      </div>
      <div className="animate-in animate-in-d4 flex-1 w-full max-w-lg aspect-video rounded-lg overflow-hidden border border-dracula-border">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=mJEeJgtbrN4"
          width="100%"
          height="100%"
          controls
          light="https://i.ytimg.com/vi/mJEeJgtbrN4/maxresdefault.jpg"
        />
      </div>
    </section>
  );
}
