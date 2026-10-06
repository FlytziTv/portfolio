"use client";

import { useSearchParams } from "next/navigation";
import RealisationCard from "@/components/realisations/realisation-card";
import { categories, realisations } from "@/data/realisations";
import { cn } from "@/lib/utils";

const filters = [{ id: "all", label: "Toutes" }, ...categories];

const countFor = (id: string) =>
  id === "all"
    ? realisations.length
    : realisations.filter((r) => r.category === id).length;

export default function RealisationsExplorer() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("categorie");
  const active = filters.some((f) => f.id === requested) ? requested! : "all";

  // L’URL garde le filtre : un lien direct vers /realisations?categorie=e5 fonctionne
  const select = (id: string) => {
    const query = id === "all" ? window.location.pathname : `?categorie=${id}`;
    window.history.replaceState(null, "", query);
  };

  return <RealisationsView active={active} onSelect={select} />;
}

export function RealisationsView({
  active,
  onSelect,
}: {
  active: string;
  onSelect?: (id: string) => void;
}) {
  const visible =
    active === "all"
      ? realisations
      : realisations.filter((r) => r.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div
        role="group"
        aria-label="Filtrer les réalisations"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
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
            <span className="font-mono text-[11px] opacity-60">
              {countFor(filter.id)}
            </span>
          </button>
        ))}
      </div>

      {active !== "all" && (
        <p className="-mt-4 text-sm text-muted-foreground">
          {categories.find((c) => c.id === active)?.description}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((realisation) => (
          <RealisationCard key={realisation.slug} realisation={realisation} />
        ))}
      </div>
    </div>
  );
}
