import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download, GraduationCap, MapPin } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import CopyEmail from "@/components/contact/copy-email";
import Corners from "@/components/page/corners";
import PageHeader from "@/components/page/page-header";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/profile";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const links = socials.filter((social) => social.url.startsWith("http"));

  return (
    <>
      <PageHeader
        eyebrow="06 — Contact"
        title="Échangeons"
        description="Une question sur un projet, une proposition de stage ou d’alternance ? Laissez-moi un message, je vous réponds dès que possible."
      />

      <div className="relative border-t border-border px-5 py-12 sm:px-8 sm:py-16">
        <Corners />

        {/* Carte en deux volets, façon widget de réservation cal.com */}
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[340px_1fr]">
          <aside className="relative isolate flex flex-col gap-8 border-b border-border bg-muted/40 p-6 sm:p-8 lg:border-r lg:border-b-0">
            {/* Effet de dégradé */}
            <div
              aria-hidden
              className="bg-dots absolute inset-0 -z-10 mask-[linear-gradient(to_bottom,black,transparent_70%)]"
            />

            {/* informations */}
            <div className="flex flex-col gap-4">
              <Image
                src={profile.avatar}
                alt={`Portrait de ${profile.fullName}`}
                width={56}
                height={56}
                className="size-14 rounded-full border border-border shadow-sm"
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold tracking-tight">
                  {profile.fullName}
                </p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>

              {/* Statut */}
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium shadow-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-red-500" />
                </span>
                Fermé aux propositions de stage
              </p>
            </div>

            {/* Informations de l'utilisateur */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0" />
                {profile.location}
              </div>

              <div className="flex items-center gap-2.5">
                <GraduationCap size={15} className="shrink-0" />
                BTS SIO SLAM · {profile.school}
              </div>
            </div>

            {/* Liens sociaux & contact */}
            <div className="flex flex-col gap-3">
              <CopyEmail email={profile.email} />

              {/* reseaux sociaux */}
              <div className="grid grid-cols-2 gap-2">
                {links.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium shadow-xs transition-colors hover:border-foreground/20"
                    >
                      <Icon size={14} />
                      {social.name}
                      <ArrowUpRight
                        size={13}
                        className="text-muted-foreground transition group-hover:text-brand"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bouton de téléchargement du CV */}
            <Button
              asChild
              variant="outline"
              className="mt-auto h-10 w-full rounded-lg"
            >
              <a href={profile.cv} target="_blank" rel="noopener noreferrer">
                <Download data-icon="inline-start" />
                Télécharger mon CV
              </a>
            </Button>
          </aside>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
