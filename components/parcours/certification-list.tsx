import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types/types";

export function CertificationCard({ certif }: { certif: Certification }) {
  const className =
    "group flex h-full items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-xs transition";

  const content = (
    <>
      {certif.logo && (
        <Image
          src={certif.logo}
          alt=""
          width={40}
          height={40}
          unoptimized={certif.logo.endsWith(".gif")}
          className="size-10 shrink-0 rounded-lg border border-border bg-white object-contain p-1"
        />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="text-sm leading-snug font-medium">{certif.title}</p>
        <p className="font-mono text-xs text-muted-foreground">
          {certif.issuer} · {certif.year}
        </p>
      </div>
      {certif.file && (
        <ArrowUpRight
          size={15}
          className="shrink-0 text-muted-foreground transition group-hover:text-brand"
        />
      )}
    </>
  );

  if (!certif.file) return <div className={className}>{content}</div>;

  return (
    <a
      href={certif.file}
      target="_blank"
      rel="noopener noreferrer"
      title="Voir l’attestation"
      className={cn(className, "hover:border-foreground/20")}
    >
      {content}
    </a>
  );
}
