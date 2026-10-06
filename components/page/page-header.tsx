import type { ReactNode } from "react";
import Eyebrow from "@/components/page/eyebrow";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
      <div aria-hidden className="bg-grid mask-fade absolute inset-0 -z-10" />
      <div className="flex flex-col gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tighter text-balance sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
