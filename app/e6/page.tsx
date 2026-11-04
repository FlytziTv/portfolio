import type { Metadata } from "next";
import { ArrowRight, Database, Globe, Monitor } from "lucide-react";
import Corners from "@/components/page/corners";
import PageHeader from "@/components/page/page-header";
import Tag from "@/components/page/tag";
import RealisationCard from "@/components/realisations/realisation-card";
import { categories, realisations } from "@/data/realisations";

const description =
  "PlayZone : plateforme de réservation d’activités de loisirs à Paris, projet E6 du BTS SIO SLAM réalisé en équipe de 3 développeurs.";

export const metadata: Metadata = {
  title: "Projet E6 — PlayZone",
  description,
  openGraph: { title: "Projet E6 — PlayZone · Alexis De Jesus", description },
};

const facts = [
  { label: "Client", value: "Mairie de Paris (contexte fictif)" },
  { label: "Prestataire", value: "ATM, entreprise de services numériques (fictive)" },
  { label: "Équipe", value: "3 développeurs : Alexis, Thomas et Moncef" },
  { label: "Période", value: "2026 – 2027, en cours" },
];

export default function E6() {
  const { label } = categories.find((c) => c.id === "e6")!;
  const projets = realisations.filter((r) => r.category === "e6");

  return (
    <>
      <PageHeader
        eyebrow={`03 — ${label}`}
        title="Projet E6 : PlayZone"
        description="Une plateforme pour réserver une activité de loisirs à Paris : karting, laser game, escape game ou bowling, dans des lieux partenaires."
      />

      {/* Contexte commun */}
      <section aria-labelledby="contexte" className="relative border-t border-border px-5 py-10 sm:px-8 sm:py-12">
        <Corners />
        <h2 id="contexte" className="mb-6 text-xl font-semibold tracking-tight">
          Contexte commun
        </h2>
        <dl className="grid divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-xs sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {facts.map((item) => (
            <div key={item.label} className="flex flex-col gap-0.5 px-4 py-3">
              <dt className="font-mono text-[11px] text-muted-foreground uppercase">{item.label}</dt>
              <dd className="text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Architecture */}
      <section aria-labelledby="architecture" className="relative border-t border-border px-5 py-10 sm:px-8 sm:py-12">
        <Corners />
        <h2 id="architecture" className="mb-6 text-xl font-semibold tracking-tight">
          Architecture
        </h2>
        <div className="bg-dots rounded-2xl border border-border bg-muted/60 p-4 sm:p-8">
          <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <ArchNode icon={<Globe size={18} />} title="Client léger" text="Site web · visiteurs" />
            <ArrowRight aria-hidden size={16} className="hidden shrink-0 text-muted-foreground md:block" />
            <ArchNode icon={<Database size={18} />} title="Base MySQL" text="Commune aux deux clients" accent />
            <ArrowRight aria-hidden size={16} className="hidden shrink-0 rotate-180 text-muted-foreground md:block" />
            <ArchNode icon={<Monitor size={18} />} title="Client lourd" text="Application Java · gérants, agents" />
          </ol>
        </div>
      </section>

      {/* Projets */}
      <section aria-labelledby="applications" className="relative border-t border-border px-5 py-10 sm:px-8 sm:py-12">
        <Corners />
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 id="applications" className="text-xl font-semibold tracking-tight">
            Les deux applications
          </h2>
          {/* TODO(Alexis): préciser ta part (client léger, client lourd ou les deux) puis afficher le badge « Ma part » sur la carte concernée */}
          <Tag variant="outline">TODO(Alexis) : badge « Ma part »</Tag>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projets.map((realisation) => (
            <RealisationCard key={realisation.slug} realisation={realisation} />
          ))}
        </div>
      </section>
    </>
  );
}

function ArchNode({
  icon,
  title,
  text,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <li
      className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl border bg-card px-4 py-5 text-center shadow-xs ${
        accent ? "border-brand/30" : "border-border"
      }`}
    >
      <span className={accent ? "text-brand" : "text-muted-foreground"}>{icon}</span>
      <span className="text-sm font-semibold tracking-tight">{title}</span>
      <span className="text-xs text-muted-foreground">{text}</span>
    </li>
  );
}
