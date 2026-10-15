import type { Metadata } from "next";
import CategoryPage from "@/components/realisations/category-page";

export const metadata: Metadata = { title: "E6" };

export default function E6() {
  return <CategoryPage category="e6" eyebrow="03" />;
}
