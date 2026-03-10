"use client";

import { useState } from "react";

export default function Contact() {
  // Gestion de l'état du formulaire
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      motif: formData.get("motif"),
      message: formData.get("message"),
      company: formData.get("company"), // Le pot de miel (honeypot) = champ caché pour détecter les bots
    };

    // Vérification honeypot côté client (optionnel, la vraie vérif est côté serveur)
    if (data.company) {
      setLoading(false);
      setStatus("success"); // On fait croire au bot que ça a marché
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error); // ✅ log pour debug
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen text-[#888] font-sans ">
      <main className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="flex flex-col gap-6">
          <div className="space-y-1">
            <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
              Contactez-moi
            </h1>
            <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
              Vous avez une question, une opportunité ou simplement envie de
              discuter ?
            </p>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          {/* ✅ Honeypot — caché visuellement, invisible pour les humains */}
          <div aria-hidden="true" style={{ display: "none" }}>
            <label htmlFor="company">Ne pas remplir</label>
            <input
              type="text"
              name="company"
              id="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <GroupInput
              name="name"
              label="Nom"
              placeholder="Votre nom de famille"
              type="text"
            />
            <GroupInput
              name="motif"
              label="Motif"
              placeholder="Motif du contact"
              type="text"
            />
          </div>
          <GroupInput
            name="email"
            label="Adresse mail"
            placeholder="Votre adresse mail"
            type="email"
          />
          <GroupText
            name="message"
            label="Message"
            placeholder="Votre message"
          />

          <div className="flex flex-col items-start justify-start gap-1 w-full">
            <button
              type="submit"
              disabled={loading}
              className="bg-white px-4 py-2 rounded-md text-black font-semibold hover:bg-white/80 transition-colors duration-300 w-full"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-sm">
                C&apos;est tout bon ! Ton message a été envoyé avec succès. Je
                te réponds dès que possible.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Oups, il y a eu un petit problème technique. Peux-tu réessayer
                ou passer par LinkedIn ?
              </p>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export function GroupInput({
  name,
  label,
  placeholder,
  type,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-start w-full ">
      <label htmlFor={name} className="text-sm text-[#ffffff]">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        className="w-full rounded-md bg-[#0A0A0A] border border-[#252525] px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#333333] transition-colors duration-300"
      />
    </div>
  );
}

export function GroupText({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-start w-full ">
      <label htmlFor={name} className="text-sm text-[#ffffff]">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required
        className="w-full rounded-md bg-[#0A0A0A] border border-[#252525] px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#333333] transition-colors duration-300 min-h-43 resize-none"
      />
    </div>
  );
}
