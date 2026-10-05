import Image from "next/image";
import type { ReactNode } from "react";

// Frise verticale (reprise du style « expériences » de l’ancienne version)
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative flex flex-col gap-10">
      <span
        aria-hidden
        className="absolute top-3 bottom-3 left-[19px] w-px bg-border"
      />
      {children}
    </ol>
  );
}

export function TimelineItem({
  logo,
  title,
  subtitle,
  period,
  children,
}: {
  logo?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  period: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative grid grid-cols-[40px_1fr] gap-4">
      <div className="relative z-10 flex size-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-card shadow-xs">
        {logo ? (
          <Image
            src={logo}
            alt=""
            width={40}
            height={40}
            className="size-full bg-white object-contain"
          />
        ) : (
          <span className="size-2 rounded-full bg-brand" />
        )}
      </div>
      <div className="flex flex-col gap-2 pt-0.5">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold tracking-tight">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {period}
          </span>
        </div>
        {children}
      </div>
    </li>
  );
}

// Liste à puces sobre
export function Bullets({
  items,
  muted = true,
}: {
  items: string[];
  muted?: boolean;
}) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-relaxed ${muted ? "text-muted-foreground" : ""}`}
        >
          <span className="mt-[9px] size-1 shrink-0 rounded-full bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}
