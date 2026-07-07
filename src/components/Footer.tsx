"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-dracula-border bg-dracula-surface">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dracula-muted">{t("direitos")}</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/rogeriobosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dracula-muted hover:text-dracula-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/ekom.off_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dracula-muted hover:text-dracula-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@TechBRCanal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dracula-muted hover:text-dracula-primary transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://www.behance.net/rogeriobcon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dracula-muted hover:text-dracula-primary transition-colors"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
