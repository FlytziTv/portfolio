import Tag from "@/components/page/tag";
import { cn } from "@/lib/utils";

type OptionCardProps = {
  code: string;
  title: string;
  description: string;
  jobs: string[];
  // true : option suivie, mise en avant avec la couleur de marque
  mine?: boolean;
};

export default function OptionCard({
  code,
  title,
  description,
  jobs,
  mine = false,
}: OptionCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-xl border p-6",
        mine
          ? "border-brand/40 bg-card shadow-sm ring-4 ring-brand/5"
          : "border-border bg-card shadow-xs",
      )}
    >
      {/* Code de l’option */}
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            "font-dot text-4xl font-black",
            mine ? "text-brand" : "text-muted-foreground",
          )}
        >
          {code}
        </h3>
        {mine && <Tag variant="brand">Mon option</Tag>}
      </div>

      {/* Intitulé et description */}
      <div className="flex flex-col gap-2">
        <p className="font-medium">{title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Débouchés */}
      <div className="mt-auto flex flex-col gap-2.5 border-t border-border pt-4">
        <p className="text-xs font-medium text-muted-foreground">
          Métiers visés
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {jobs.map((job) => (
            <li key={job}>
              <Tag>{job}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
