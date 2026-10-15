import Corners from "@/components/page/corners";
import PageHeader from "@/components/page/page-header";
import RealisationCard from "@/components/realisations/realisation-card";
import { categories, realisations } from "@/data/realisations";
import type { RealisationCategory } from "@/types/types";

// Liste des réalisations d’une catégorie (pages E5 et E6)
export default function CategoryPage({
  category,
  eyebrow,
}: {
  category: RealisationCategory;
  eyebrow: string;
}) {
  const { label, description } = categories.find((c) => c.id === category)!;
  const visible = realisations.filter((r) => r.category === category);

  return (
    <>
      <PageHeader
        eyebrow={`${eyebrow} — ${label}`}
        title={description}
        description={`${visible.length} réalisations documentées : contexte, démarche, difficultés rencontrées et compétences mobilisées.`}
      />
      <div className="relative border-t border-border px-5 py-10 sm:px-8 sm:py-12">
        <Corners />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((realisation) => (
            <RealisationCard key={realisation.slug} realisation={realisation} />
          ))}
        </div>
      </div>
    </>
  );
}
