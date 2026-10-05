import Tag from "@/components/page/tag";
import { competenceById } from "@/data/bts";
import type { CompetenceId } from "@/types/types";

export default function CompetenceTags({ ids }: { ids: CompetenceId[] }) {
  if (ids.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-1" aria-label="Compétences du bloc 1">
      {ids.map((id) => (
        <li key={id} title={competenceById(id).title}>
          <Tag variant="code">{id}</Tag>
        </li>
      ))}
    </ul>
  );
}
