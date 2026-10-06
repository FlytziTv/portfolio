import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] flex-col items-start justify-center gap-5 overflow-hidden px-5 sm:px-8">
      <div aria-hidden className="bg-grid mask-fade absolute inset-0 -z-10" />
      <p className="font-dot text-8xl font-black text-brand sm:text-9xl">404</p>
      <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
        Page introuvable
      </h1>
      <p className="text-muted-foreground">
        La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Button asChild size="lg" className="rounded-full px-4">
        <Link href="/">
          <ArrowLeft data-icon="inline-start" />
          Retour à l’accueil
        </Link>
      </Button>
    </div>
  );
}
