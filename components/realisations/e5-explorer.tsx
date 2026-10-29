"use client";

import { useSearchParams } from "next/navigation";
import RealisationCard from "@/components/realisations/realisation-card";
import { categories, realisations } from "@/data/realisations";
import { cn } from "@/lib/utils";
import type { RealisationCategory } from "@/types/types";
import Link from "next/link";
import { FileChartColumnIncreasing } from "lucide-react";
import { profile } from "@/data/profile";

// Onglets de la page E5 : projets de cours, personnels et en entreprise
export const e5Filters: { id: RealisationCategory; label: string }[] = [
  { id: "e5", label: "Projets de cours" },
  { id: "perso", label: "Projets perso" },
  { id: "stage", label: "Projets entreprise" },
];

const countFor = (id: RealisationCategory) => realisations.filter((r) => r.category === id).length;

export default function E5Explorer() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("categorie");
  const active = e5Filters.find((f) => f.id === requested)?.id ?? e5Filters[0].id;

  // L’URL garde le filtre : un lien direct vers /e5?categorie=perso fonctionne
  const select = (id: RealisationCategory) => {
    const query = id === e5Filters[0].id ? window.location.pathname : `?categorie=${id}`;
    window.history.replaceState(null, "", query);
  };

  return <E5View active={active} onSelect={select} />;
}

export function E5View({
  active,
  onSelect,
}: {
  active: RealisationCategory;
  onSelect?: (id: RealisationCategory) => void;
}) {
  const visible = realisations.filter((r) => r.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filtrer les réalisations" className="flex flex-wrap gap-2">
        {e5Filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={active === filter.id}
            onClick={() => onSelect?.(filter.id)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm shadow-xs transition-colors cursor-pointer",
              active === filter.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-foreground/25 hover:text-foreground",
            )}
          >
            {filter.label}
            <span className="font-mono text-[11px] opacity-60">{countFor(filter.id)}</span>
          </button>
        ))}

        <Link
          className={cn(
            "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm shadow-xs transition-colors cursor-pointer",
            "border-border bg-card text-muted-foreground hover:bg-foreground/10 hover:border-foreground/25 hover:text-foreground",
          )}
          href={profile.synthesis}
        >
          <FileChartColumnIncreasing size={14} />
          Tableau de synthèse
        </Link>
      </div>

      <p className="-mt-4 text-sm text-muted-foreground">{categories.find((c) => c.id === active)?.description}</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((realisation) => (
          <RealisationCard key={realisation.slug} realisation={realisation} />
        ))}
      </div>
    </div>
  );
}
