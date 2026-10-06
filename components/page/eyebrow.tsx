import { cn } from "@/lib/utils";

// Badge en pilule façon shadcn / cal.com
export default function Eyebrow({
  children,
  className,
  color = "oklch(0.541 0.25 293)",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground shadow-xs",
        className,
      )}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {children}
    </p>
  );
}
