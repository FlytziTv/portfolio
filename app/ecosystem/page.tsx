import SZFooter from "@/components/SZ2026/SZFooter";
import { SZSection } from "@/components/SZ2026/SZSection";
import SZSkillsCard from "@/components/SZ2026/SZSkillsCard";
import { tools_data } from "@/data/ecosystem";

export default function Ecosysteme() {
  const groupedByCategory = tools_data.reduce(
    (acc, tool) => {
      if (!acc[tool.categorie]) {
        acc[tool.categorie] = [];
      }
      acc[tool.categorie].push(tool);
      return acc;
    },
    {} as Record<string, typeof tools_data>,
  );

  return (
    <div className="min-h-screen text-[#888] font-sans ">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="flex flex-col gap-6">
          <div className="space-y-1">
            <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
              ÉCOSYSTÈME
            </h1>
            <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
              Outils & Technologies maîtrisés au cours de ma formation
            </p>
          </div>
        </section>

        {Object.entries(groupedByCategory).map(([category, tools]) => (
          <SZSection key={category} title={category}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {tools.map((tool) => (
                <SZSkillsCard
                  key={tool.id}
                  url={tool.link}
                  image={tool.image}
                  titre={tool.name}
                  color={tool.color}
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
