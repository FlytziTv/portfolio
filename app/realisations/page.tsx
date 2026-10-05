import type { Metadata } from "next";
import { Suspense } from "react";
import Corners from "@/components/page/corners";
import PageHeader from "@/components/page/page-header";
import RealisationsExplorer, {
  RealisationsView,
} from "@/components/realisations/realisations-explorer";

export const metadata: Metadata = { title: "Réalisations" };

export default function Realisations() {
  return (
    <>
      <PageHeader
        eyebrow="04 — Réalisations"
        title="Ce que j’ai construit"
        description="Travaux pratiques du bloc 1, réalisation de stage, projets E6 et projets personnels. Chaque fiche détaille le contexte, la démarche, les difficultés rencontrées et les compétences mobilisées."
      />
      <div className="relative border-t border-border px-5 py-10 sm:px-8 sm:py-12">
        <Corners />
        <Suspense fallback={<RealisationsView active="all" />}>
          <RealisationsExplorer />
        </Suspense>
      </div>
    </>
  );
}
