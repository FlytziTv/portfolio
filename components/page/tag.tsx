import Image from "next/image";
import { techLogo } from "@/data/tech-logos";
import { cn } from "@/lib/utils";

// Badge façon shadcn
export default function Tag({
  children,
  variant = "muted",
  className,
}: {
  children: React.ReactNode;
  variant?: "muted" | "brand" | "outline" | "code";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs leading-5 font-medium whitespace-nowrap",
        variant === "muted" && "border-transparent bg-muted text-muted-foreground",
        variant === "brand" && "border-brand/20 bg-brand/10 text-brand",
        variant === "outline" && "border-border bg-card text-muted-foreground",
        variant === "code" && "border-border bg-card px-1.5 font-mono text-[11px] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

// Pastille de technologie avec son logo quand il existe
export function TechTag({ name }: { name: string }) {
  const logo = techLogo(name);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs font-medium whitespace-nowrap shadow-xs">
      {logo && <Image src={logo} alt="" width={14} height={14} className="size-3.5 object-contain" />}
      {name}
    </span>
  );
}
