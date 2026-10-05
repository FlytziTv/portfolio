import { epreuves } from "@/data/bts";
import { cn } from "@/lib/utils";

export default function Epreuvres() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-[480px] text-left text-sm">
        {/* En-tête du tableau */}
        <thead className="bg-muted/60 text-xs text-muted-foreground">
          <tr>
            <th scope="col" className="px-4 py-2.5 font-medium">
              Épreuve
            </th>
            <th scope="col" className="px-4 py-2.5 font-medium">
              Intitulé
            </th>
            <th scope="col" className="px-4 py-2.5 font-medium">
              Forme
            </th>
            <th scope="col" className="px-4 py-2.5 text-right font-medium">
              Coef.
            </th>
          </tr>
        </thead>

        {/* Corps du tableau (données) */}
        <tbody className="divide-y divide-border">
          {epreuves.map((epreuve) => (
            <tr
              key={epreuve.code}
              className={cn(epreuve.highlight && "bg-brand/5")}
            >
              <td className="px-4 py-3">
                <span
                  className={cn(
                    "font-mono text-xs",
                    epreuve.highlight && "font-medium text-brand",
                  )}
                >
                  {epreuve.code}
                </span>
              </td>
              <td
                className={cn("px-4 py-3", epreuve.highlight && "font-medium")}
              >
                {epreuve.title}
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {epreuve.mode}
              </td>
              <td className="px-4 py-3 text-right font-mono">{epreuve.coef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
