import SZFooter from "@/components/SZ2026/SZFooter";
import { SZSection } from "@/components/SZ2026/SZSection";
import {
  Hourglass,
  BookOpen,
  Award,
  GlobeLock,
  ChevronsLeftRight,
} from "lucide-react";

const presentation = [
  {
    titre: "Organisation",
    description: "2 ans de formation",
    icon: Hourglass,
    stats: [
      "1850 heures de formation",
      "10 semaines de stage minimum",
      "Alternance possible",
    ],
  },
  {
    titre: "Programme",
    description: "Formation complète",
    icon: BookOpen,
    stats: [
      "Culture générale et expression",
      "Culture Economique Juridique et Managérial",
      "Anglais technique",
      "Mathématiques pour l'informatique",
    ],
  },
  {
    titre: "Validation",
    description: "Diplôme d'État",
    icon: Award,
    stats: [
      "Niveau 5 (Bac+2)",
      "120 crédits ECTS (60/an)",
      "Certification professionnelle",
    ],
  },
];

const competences_communes = {
  "Support et assistance": [
    "Gestion du patrimoine informatique",
    "Réponse aux incidents",
    "Développement de la présence en ligne",
  ],
  Cybersécurité: [
    "Protection des données",
    "Sécurisation des équipements",
    "Politique de sécurité",
  ],
  "Gestion de projet": [
    "Analyse des besoins",
    "Documentation technique",
    "Travail en équipe",
  ],
};

const options = [
  {
    name: "SLAM",
    icon: ChevronsLeftRight,
    myoptions: true,
    description: "Solutions Logicielles et Applications Métiers",
    infos: {
      "Compétences techniques": [
        "Développement Web",
        "Applications mobiles",
        "Base de données",
        "Programmation objet",
      ],
      Technologies: [
        "Java, C#, Python",
        "HTML, CSS, JavaScript",
        "React, Angular",
        "SQL, NoSQL",
      ],
      "Débouchés professionnels": [
        "Développeur d'applications",
        "Développeur Web",
        "Analyste programmeur",
        "Chef de projet junior",
      ],
    },
  },
  {
    name: "SISR",
    icon: GlobeLock,
    myoptions: false,
    description: "Solutions d'Infrastructure, Systèmes et Réseaux",
    infos: {
      "Compétences techniques": [
        "Administration Windows",
        "Administration Linux",
        "Virtualisation",
        "Réseaux TCP/IP",
      ],
      "Services et sécurité": [
        "Active Directory",
        "Pare-feu",
        "VPN",
        "Supervision",
      ],
      "Débouchés professionnels": [
        "Administrateur réseaux",
        "Technicien support",
        "Responsable infrastructure",
        "Consultant cybersécurité",
      ],
    },
  },
];

export default function Bts() {
  return (
    <div className="min-h-screen text-[#888] font-sans">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="space-y-1">
          <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
            BTS SIO
          </h1>
          <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
            Services Informatiques aux Organisations
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {presentation.map((item) => (
            <div
              key={item.titre}
              className="flex flex-col gap-4 p-6 border border-zinc-900 bg-[#050505] rounded-xl hover:border-zinc-700 transition duration-300"
            >
              <item.icon size={20} className="text-white" />
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-sm font-semibold uppercase tracking-tight">
                  {item.titre}
                </h2>
                <p className="text-xs text-zinc-500">{item.description}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {item.stats.map((stat, index) => (
                  <li
                    key={index}
                    className="text-xs leading-tight flex items-start gap-2"
                  >
                    <span className="text-zinc-700">•</span> {stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SZSection title="Compétences Communes">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(competences_communes).map(([category, skills]) => (
              <div key={category} className="flex flex-col gap-4">
                <h4 className="text-white text-sm font-medium">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SZSection>

        <SZSection title="Spécialisations">
          {options.map((item) => (
            <div
              key={item.name}
              className={`flex flex-col gap-10 relative p-8 rounded-2xl border ${item.myoptions ? "border-zinc-700 bg-zinc-950/50 shadow-2xl" : "border-zinc-900 bg-black opacity-60"}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${item.myoptions ? "bg-white text-black" : "bg-zinc-900 text-zinc-500"}`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      Option {item.name}
                    </h2>
                    <p className="text-sm text-zinc-500 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.myoptions && (
                  <span className="px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-tighter rounded-full self-start md:self-center">
                    Ma Spécialité
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(item.infos).map(([title, content]) => (
                  <div key={title} className="space-y-3">
                    <h5 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                      {title}
                    </h5>
                    <ul className="flex flex-col gap-1">
                      {Array.isArray(content) &&
                        content.map((line, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-zinc-400 font-light flex items-center gap-2"
                          >
                            <span className="h-1 w-1 bg-zinc-800 rounded-full"></span>{" "}
                            {line}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SZSection>

        <SZFooter />
      </main>
    </div>
  );
}
