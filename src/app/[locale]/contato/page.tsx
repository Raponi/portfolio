import { getTranslations } from "next-intl/server";
import FormContato from "@/components/FormContato";

export default async function ContatoPage() {
  const t = await getTranslations("contato");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dracula-text mb-2">{t("title")}</h1>
      <p className="text-dracula-muted mb-12">{t("desc")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold text-dracula-text mb-6">{t("form_title")}</h2>
          <FormContato />
        </div>

        <div>
          <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border mb-6">
            <h2 className="text-lg font-semibold text-dracula-primary mb-4">{t("redes")}</h2>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/ekom.off_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dracula-muted hover:text-dracula-primary transition-colors"
              >
                <span className="w-2 h-2 bg-dracula-accent rounded-full" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/rogeriobosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dracula-muted hover:text-dracula-primary transition-colors"
              >
                <span className="w-2 h-2 bg-dracula-secondary rounded-full" />
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@TechBRCanal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dracula-muted hover:text-dracula-primary transition-colors"
              >
                <span className="w-2 h-2 bg-dracula-success rounded-full" />
                YouTube
              </a>
              <a
                href="https://www.behance.net/rogeriobcon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dracula-muted hover:text-dracula-primary transition-colors"
              >
                <span className="w-2 h-2 bg-dracula-primary rounded-full" />
                Behance
              </a>
            </div>
          </div>

          <div className="bg-dracula-surface rounded-lg p-6 border border-dracula-border">
            <h2 className="text-lg font-semibold text-dracula-primary mb-2">{t("email_direto")}</h2>
            <a
              href="mailto:rogeriobcon@gmail.com"
              className="text-dracula-secondary hover:underline"
            >
              rogeriobcon@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
