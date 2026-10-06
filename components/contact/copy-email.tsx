"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

// Copie l’adresse e-mail dans le presse-papier avec un retour visuel
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 text-left shadow-xs transition-colors hover:border-foreground/20 cursor-pointer"
    >
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-mono text-[11px] text-muted-foreground uppercase">E-mail</span>
        <span className="truncate text-[13px] font-medium">{email}</span>
      </span>
      <span className="relative flex size-7 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:text-foreground">
        <Copy
          size={14}
          className={`absolute transition-all duration-200 ${copied ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        />
        <Check
          size={14}
          className={`absolute text-brand transition-all duration-200 ${copied ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        />
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Adresse copiée" : "Copier l’adresse"}
      </span>
    </button>
  );
}
