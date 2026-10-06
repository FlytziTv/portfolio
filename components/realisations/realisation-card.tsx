import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CompetenceTags from "@/components/realisations/competence-tags";
import { categoryLabel } from "@/data/realisations";
import type { Realisation } from "@/types/types";

export default function RealisationCard({
  realisation,
}: {
  realisation: Realisation;
}) {
  const { slug, title, summary, images, category, status, date, competences } =
    realisation;

  return (
    <Link
      href={`/realisations/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-foreground/20"
    >
      {/* Image bord à bord */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
        {images[0] ? (
          <Image
            src={images[0]}
            alt={`Aperçu — ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : realisation.confidential ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <Lock size={16} />
            <span className="text-xs">Projet client confidentiel</span>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-sm text-muted-foreground">
            ~/{slug}
          </div>
        )}

        {status !== "Terminé" && (
          <span className="absolute top-2.5 right-2.5 rounded-md border border-border bg-card/90 px-1.5 py-0.5 text-[11px] font-medium backdrop-blur">
            {status}
          </span>
        )}
      </div>

      {/* Infos compactes */}
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="flex items-start justify-between gap-2 leading-snug font-semibold tracking-tight">
          {title}
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
          />
        </h3>
        <p className="line-clamp-1 text-sm text-muted-foreground">{summary}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <p className="truncate font-mono text-[11px] text-muted-foreground">
            <span className="text-brand">{categoryLabel(category)}</span> ·{" "}
            {date}
          </p>
          <CompetenceTags ids={competences} />
        </div>
      </div>
    </Link>
  );
}
