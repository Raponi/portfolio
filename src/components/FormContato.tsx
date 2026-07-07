"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FormContato() {
  const t = useTranslations("contato");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-dracula-text mb-1">
          {t("nome")}
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          autoComplete="name"
          className="w-full px-4 py-2 bg-dracula-bg border border-dracula-border rounded-lg text-dracula-text focus:outline-none focus:border-dracula-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dracula-text mb-1">
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-2 bg-dracula-bg border border-dracula-border rounded-lg text-dracula-text focus:outline-none focus:border-dracula-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-dracula-text mb-1">
          {t("mensagem")}
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="w-full px-4 py-2 bg-dracula-bg border border-dracula-border rounded-lg text-dracula-text focus:outline-none focus:border-dracula-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-dracula-primary text-dracula-bg font-semibold rounded-lg hover:bg-dracula-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? t("enviando") : t("enviar")}
      </button>
      {status === "success" && (
        <p className="text-dracula-success text-sm">{t("sucesso")}</p>
      )}
      {status === "error" && (
        <p className="animate-shake text-dracula-error text-sm">{t("erro")}</p>
      )}
    </form>
  );
}
