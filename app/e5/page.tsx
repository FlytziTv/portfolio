import SZFooter from "@/components/SZ2026/SZFooter";
import { SZProjectCard } from "@/components/SZ2026/SZProjectCard";
import { SZSection } from "@/components/SZ2026/SZSection";
import { projects_list } from "@/data/e5";

export default function E5() {
  const groupedByCategory = projects_list.reduce(
    (acc, project) => {
      if (!acc[project.categorie]) {
        acc[project.categorie] = [];
      }
      acc[project.categorie].push(project);
      return acc;
    },
    {} as Record<string, typeof projects_list>,
  );

  return (
    <div className="min-h-screen text-[#888] font-sans">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="space-y-1">
          <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
            PROJETS E5
          </h1>
          <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
            Production et optimisation de solutions informatiques
          </p>
        </section>

        {Object.entries(groupedByCategory).map(([category, projects]) => (
          <SZSection
            key={category}
            title={category}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...projects].reverse().map((project) => (
                <SZProjectCard
                  key={project.id}
                  name={project.title}
                  url={project.url}
                  pdf={project.pdf}
                  description={project.desc}
                  image={project.image}
                />
              ))}
            </div>
          </SZSection>
        ))}

        <SZFooter />
      </main>
    </div>
  );
}
