import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: `${t("title")} — ${t("subtitle")}`,
    description: t("hero_desc"),
    openGraph: {
      title: `${t("title")} — ${t("subtitle")}`,
      description: t("hero_desc"),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pt" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "home" });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rogerio Barbosa",
    givenName: "Rogerio",
    familyName: "Barbosa",
    jobTitle: "Video Editor",
    description: t("hero_desc"),
    email: "rogeriobcon@gmail.com",
    url: `https://portfolio-rogeriobcon-projects.vercel.app/${locale === "pt" ? "" : "en"}`,
    sameAs: [
      "https://www.linkedin.com/in/rogeriobosa/",
      "https://www.behance.net/rogeriobcon",
      "https://www.instagram.com/ekom.off_/",
    ],
    knowsAbout: [
      "Video Editing",
      "DaVinci Resolve",
      "Adobe Premiere",
      "After Effects",
      "Motion Graphics",
      "Color Grading",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://portfolio-rogeriobcon-projects.vercel.app",
    name: "Rogerio Barbosa — Video Editor",
    description: t("hero_desc"),
    url: `https://portfolio-rogeriobcon-projects.vercel.app/${locale === "pt" ? "" : "en"}`,
    email: "rogeriobcon@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    priceRange: "R$ 240 – R$ 1.599",
  };

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-dracula-bg text-dracula-text">
        <JsonLd data={personSchema} />
        <JsonLd data={localBusinessSchema} />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
