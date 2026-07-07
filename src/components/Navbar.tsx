"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "home" },
  { href: "/projetos", label: "projetos" },
  { href: "/servicos", label: "servicos" },
  { href: "/sobre", label: "sobre" },
  { href: "/contato", label: "contato" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-dracula-bg/90 backdrop-blur border-b border-dracula-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-dracula-primary hover:text-dracula-secondary transition-colors"
        >
          Rogerio Barbosa
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-dracula-primary font-medium"
                  : "text-dracula-muted hover:text-dracula-text"
              }`}
            >
              {t(link.label)}
            </Link>
          ))}
          <Link
            href={locale === "pt" ? "/en" : "/pt"}
            className="text-xs text-dracula-muted hover:text-dracula-secondary transition-colors ml-4 border-l border-dracula-border pl-4"
          >
            {locale === "pt" ? "EN" : "PT"}
          </Link>
        </nav>

        <button
          className="md:hidden text-dracula-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-dracula-border bg-dracula-surface">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-1 ${
                  isActive(link.href)
                    ? "text-dracula-primary font-medium"
                    : "text-dracula-muted"
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
            <Link
              href={locale === "pt" ? "/en" : "/pt"}
              className="text-xs text-dracula-muted pt-2 border-t border-dracula-border"
            >
              {locale === "pt" ? "English (EN)" : "Português (PT)"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
