import type { ReactNode } from "react";
import Corners from "@/components/page/corners";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  title,
  aside,
  children,
  className,
  action,
}: {
  id?: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative grid scroll-mt-6 gap-6 border-t border-border px-5 py-12 sm:px-8 sm:py-16",
        className,
      )}
    >
      <Corners />
      <div className="w-full flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          {aside && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {aside}
            </p>
          )}
        </div>

        {action}
      </div>

      <div className="min-w-0">{children}</div>
    </section>
  );
}
