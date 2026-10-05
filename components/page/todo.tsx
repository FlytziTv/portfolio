import { PenLine } from "lucide-react";

// Encart visible signalant un contenu à compléter avant l’oral
export default function Todo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-dashed border-brand/50 bg-brand/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
      <PenLine size={14} className="mt-1 shrink-0 text-brand" />
      <p>
        <span className="font-medium text-foreground">À compléter — </span>
        {children}
      </p>
    </div>
  );
}
