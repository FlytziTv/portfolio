import type { Metadata } from "next";
import { Suspense } from "react";
import Corners from "@/components/page/corners";
import PageHeader from "@/components/page/page-header";
import E5Explorer, { E5View } from "@/components/realisations/e5-explorer";

export const metadata: Metadata = { title: "E5" };

export default function E5() {
  return (
    <>
      <PageHeader
        eyebrow="02 — E5 · Bloc 1"
        title="Support et mise à disposition de services informatiques"
        description="Projets de cours, projets personnels et projets en entreprise. Chaque fiche détaille le contexte, la démarche, les difficultés rencontrées et les compétences mobilisées."
      />
      <div className="relative border-t border-border px-5 py-10 sm:px-8 sm:py-12">
        <Corners />
        <Suspense fallback={<E5View active="e5" />}>
          <E5Explorer />
        </Suspense>
      </div>
    </>
  );
}
