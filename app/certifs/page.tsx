import SZCertifCard from "@/components/SZ2026/SZCertifCard";
import SZFooter from "@/components/SZ2026/SZFooter";
import { SZSection } from "@/components/SZ2026/SZSection";
import { certif_data } from "@/data/certifs";

export default function Certifs() {
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

        <SZSection title="Mes Certification" className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certif_data.map((certif) => (
              <SZCertifCard
                key={certif.id}
                categorie={certif.categorie}
                name={certif.name}
                image={certif.image}
                pdf={certif.pdf}
                description={certif.description}
                url={certif.link}
              />
            ))}
          </div>
        </SZSection>

        <SZFooter />
      </main>
    </div>
  );
}
