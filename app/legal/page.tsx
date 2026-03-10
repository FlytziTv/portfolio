import SZFooter from "@/components/SZ2026/SZFooter";
import { SZSection } from "@/components/SZ2026/SZSection";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen text-[#888] font-sans ">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="space-y-1">
          <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
            Mentions Légales
          </h1>
          <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
            Informations obligatoires et stack technique
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <SZSection title="Édition du site">
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-600">
                  Éditeur & Créateur
                </span>
                <span className="text-sm text-zinc-300">
                  Alexis De Jesus (Flytzi)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-600">
                  Statut
                </span>
                <span className="text-sm text-zinc-300">
                  Étudiant BTS SIO SLAM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-600">
                  Contact
                </span>
                <a
                  href="/contact"
                  className="text-sm text-white underline underline-offset-4 decoration-zinc-800 hover:decoration-white transition-all"
                >
                  Formulaire de contact
                </a>
              </div>
            </div>
          </SZSection>

          <SZSection title="Hébergement & Infra">
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-600">
                  Plateforme
                </span>
                <span className="text-sm text-zinc-300">Vercel Inc.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-600">
                  Domaine
                </span>
                <span className="text-sm text-zinc-300">OVH Cloud</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-zinc-600">
                  Localisation
                </span>
                <span className="text-sm text-zinc-300">
                  Région Europe (Paris)
                </span>
              </div>
            </div>
          </SZSection>
        </div>

        <SZSection title="Propriété & Stack Technique">
          <p className="text-sm leading-relaxed text-zinc-500 italic max-w-2xl">
            Ce portfolio a été conçu et développé intégralement par Alexis De
            Jesus. Tous les contenus, code source et designs sont protégés par
            le droit d&apos;auteur.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col p-4 bg-[#0A0A0A] border border-zinc-900 rounded-lg">
              <span className="text-[9px] font-mono text-zinc-600 uppercase">
                Framework
              </span>
              <span className="text-xs text-white font-bold">Next.js 16</span>
            </div>
            <div className="flex flex-col p-4 bg-[#0A0A0A] border border-zinc-900 rounded-lg">
              <span className="text-[9px] font-mono text-zinc-600 uppercase">
                Librairie
              </span>
              <span className="text-xs text-white font-bold">React 19</span>
            </div>
            <div className="flex flex-col p-4 bg-[#0A0A0A] border border-zinc-900 rounded-lg">
              <span className="text-[9px] font-mono text-zinc-600 uppercase">
                Styling
              </span>
              <span className="text-xs text-white font-bold">Tailwind 4</span>
            </div>
            <div className="flex flex-col p-4 bg-[#0A0A0A] border border-zinc-900 rounded-lg">
              <span className="text-[9px] font-mono text-zinc-600 uppercase">
                Icons
              </span>
              <span className="text-xs text-white font-bold">Lucide React</span>
            </div>
          </div>
        </SZSection>

        <SZSection title="Données personnelles">
          <p className="text-sm text-zinc-500 leading-relaxed italic border-l border-zinc-900 pl-6">
            Conformément au RGPD, ce site ne collecte aucune donnée personnelle
            à votre insu. Aucun traceur publicitaire n&apos;est utilisé. Les
            seules données traitées sont les logs techniques anonymes de Vercel
            pour le bon fonctionnement du serveur.
          </p>
        </SZSection>

        <SZFooter />
      </main>
    </div>
  );
}
