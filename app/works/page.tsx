import Image from "next/image";
import {
  Target,
  Briefcase,
  MapPin,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { SZSection } from "@/components/SZ2026/SZSection";
import SZFooter from "@/components/SZ2026/SZFooter";

const data_stud = {
  titre: "BTS SIO SLAM",
  name: "Ynov Campus",
  loc: "Nanterre",
  image: "/img/icons/ynov.svg",
  dates: [
    {
      name: "Début",
      value: "Sept 2025",
      color: "border-green-500 bg-green-500/10",
    },
    { name: "Fin", value: "Juin 2027" },
    { name: "Durée", value: "2 ans" },
  ],
  slogan: "Le digital s'apprend par la pratique.",
  desc: "Paris Ynov Campus est une institution dédiée à la formation aux métiers de demain. L'école se distingue par une pédagogie active centrée sur la réalisation de projets réels, favorisant l'interdisciplinarité (YDAYS) et l'insertion professionnelle immédiate grâce à l'alternance.",
  formation: [
    "Informatique & Développement (Full Stack, Mobile, Cloud)",
    "Cybersécurité & Réseaux",
    "Intelligence Artificielle & Data Science",
    "Création & Digital Design (UX/UI, Direction Artistique)",
    "3D, Animation & Jeux Vidéo",
    "Marketing & Communication Digitale",
    "Audiovisuel & Son",
    "Architecture d’Intérieur & Bâtiment Numérique",
  ],
};

export const search_data = [
  {
    id: 1,
    title: "Recherche d'alternance",
    rythme: "3 jours en entreprise / 2 jours à l'école",
    disponibilite: "Septembre 2026",
    dates: [
      {
        name: "Début",
        value: "Sept 2026",
      },
      {
        name: "Fin",
        value: "Juin 2027",
      },
      { name: "Durée", value: "1 ans", color: "border-sztatus bg-sztatus/10" },
    ],
    objectif:
      "Intégrer une équipe technique pour participer au cycle de vie des applications (analyse, développement, tests).",
  },
  {
    id: 2,
    title: "Recherche de stage",
    periode: "Juillet 2026",
    durée: "5 semaines",
    dates: [
      {
        name: "Début",
        value: "6 Juillet 2026",
      },
      {
        name: "Fin",
        value: "7 Août 2026",
      },
      {
        name: "Durée",
        value: "5 semaines",
      },
    ],
    mission: [
      "Développement Front-end (HTML/CSS, JavaScript).",
      "Maintenance évolutive d'applications existantes.",
      "Gestion de bases de données (SQL).",
      "Participation à la rédaction de documentations techniques.",
    ],
  },
];

export default function Works() {
  return (
    <div className="min-h-screen text-[#888] font-sans">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="space-y-1">
          <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
            école & Entreprise
          </h1>
          <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
            Formations suivies et opportunités en entreprise
          </p>
        </section>

        <SZSection title="Ma formation">
          <div className="flex flex-col gap-8 p-8 bg-[#0A0A0A] border border-zinc-900 rounded-2xl group hover:border-zinc-700 transition-all duration-500">
            <div className="flex flex-col gap-8 items-start justify-between">
              <div className="flex gap-6 items-center">
                <div className="aspect-square w-20 h-20 rounded-2xl bg-white p-4 flex items-center justify-center shrink-0">
                  <Image
                    src={data_stud.image}
                    alt={data_stud.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-white text-2xl font-bold uppercase tracking-tighter">
                    {data_stud.name}
                  </h2>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2 italic">
                    <MapPin size={12} /> {data_stud.loc} — {data_stud.titre}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                {data_stud.dates.map((d, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1a1a] rounded-md p-2 px-4 flex flex-col items-center border border-transparent"
                  >
                    <span className="text-[9px] uppercase font-bold text-zinc-600 tracking-widest">
                      {d.name}
                    </span>
                    <span className="text-[11px] text-white font-bold">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm leading-relaxed text-zinc-500 max-w-3xl">
              {data_stud.desc}
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] flex items-center gap-2">
                <GraduationCap size={14} /> Spécialisations du Campus
              </h3>
              <div className="flex flex-wrap gap-2 font-mono">
                {data_stud.formation.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[10px] text-zinc-400 border border-zinc-900 bg-black/50 rounded-full hover:border-zinc-500 hover:text-white transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SZSection>

        <SZSection title="Recherche d'alternance & stage">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {search_data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 p-6 bg-[#0A0A0A] border border-zinc-900 rounded-2xl group hover:border-zinc-700 transition-all justify-between duration-500"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-5 items-center">
                    <div className="flex items-center justify-center aspect-square h-12 w-12 rounded-xl bg-white text-black transition-colors">
                      {item.id === 1 ? (
                        <Briefcase size={22} />
                      ) : (
                        <Target size={22} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-lg text-white tracking-tight uppercase ">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono tracking-tighter">
                        {item.rythme || item.durée}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {item.dates.map((d, i) => (
                      <div
                        key={i}
                        className="bg-[#1a1a1a] rounded-md p-2 flex flex-col items-center border border-transparent transition"
                      >
                        <span className="text-[10px] uppercase font-bold text-zinc-600">
                          {d.name}
                        </span>
                        <span className="text-xs text-white font-bold">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-zinc-400 font-light italic leading-relaxed min-h-15">
                    {item.id === 1 ? (
                      item.objectif
                    ) : (
                      <ul className="flex flex-col gap-2">
                        {item.mission.map((m, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-zinc-400 flex items-start gap-2"
                          >
                            <span className="mt-1">
                              <ChevronRight
                                size={12}
                                className="text-zinc-600"
                              />
                            </span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3 text-center rounded-lg bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all"
                >
                  Contact Candidate
                </Link>
              </div>
            ))}
          </div>
        </SZSection>

        <SZFooter />
      </main>
    </div>
  );
}
