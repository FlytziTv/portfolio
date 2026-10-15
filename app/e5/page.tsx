import type { Metadata } from "next";
import CategoryPage from "@/components/realisations/category-page";

export const metadata: Metadata = { title: "E5" };

export default function E5() {
  return <CategoryPage category="e5" eyebrow="02" />;
}
