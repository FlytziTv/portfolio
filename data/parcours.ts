import type { Certification, Formation, SkillGroup } from "@/types/types";

export const about = [
  "Étudiant en deuxième année de BTS SIO option SLAM à Ynov Campus Paris, je me forme au développement d’applications avec une vraie passion pour le web : concevoir une base de données, écrire une API, puis construire l’interface qui la rend utile.",
  "Avant l’informatique, j’ai obtenu un Bac Pro en conception de produits industriels (CAO / DAO). Ce parcours m’a appris la rigueur, la lecture de cahiers des charges et l’importance d’une documentation technique claire — des réflexes que je retrouve aujourd’hui dans chacun de mes projets.",
  "En dehors des cours, je multiplie les projets personnels pour progresser plus vite : applications de gestion, sites vitrines, outils en ligne de commande, dashboards auto-hébergés. Je travaille principalement avec TypeScript, React, Next.js, Node.js et PostgreSQL.",
];

export const formations: Formation[] = [
  {
    school: "Ynov Campus Paris",
    logo: "/images/education/ynov.jpg",
    diploma: "BTS SIO — option SLAM",
    start: "2025",
    end: "2027",
    location: "Paris",
    description:
      "Formation au développement d’applications : conception, développement et maintenance d’applications web et logicielles, bases de données, cybersécurité et support des services informatiques.",
  },
  {
    school: "Lycée Simone Weil",
    logo: "/images/education/simone_weil.jpg",
    diploma: "Bac Pro EDPI — Étude et Définition de Produits Industriels",
    start: "2021",
    end: "2024",
    location: "Île-de-France",
    description:
      "Conception et modélisation de systèmes mécaniques avec des outils de CAO (SolidWorks, AutoCAD), méthodes d’étude et de définition de produits en contexte industriel.",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Langages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "HTML", "CSS", "Lua"],
  },
  {
    label: "Front-end",
    items: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Back-end",
    items: ["Node.js", "Express", "Symfony", "Prisma", "Better Auth", "API REST"],
  },
  {
    label: "Bases de données",
    items: ["PostgreSQL", "MySQL / MariaDB", "NeonDB"],
  },
  {
    label: "Systèmes & réseaux",
    items: ["Debian / Ubuntu", "Windows Server", "Apache2", "SSH", "VMware", "VirtualBox"],
  },
  {
    label: "Outils",
    items: ["Git / GitHub", "VS Code", "Figma", "GLPI", "OCS Inventory", "Burp Suite", "Vercel"],
  },
  {
    label: "CAO",
    items: ["SolidWorks", "AutoCAD", "Fusion 360", "Blender"],
  },
];

export const certifications: Certification[] = [
  {
    title: "SecNumacadémie — sensibilisation à la cybersécurité",
    issuer: "ANSSI",
    logo: "/images/certif/secnum.png",
    year: "2026",
    file: "/files/certif/secnum.pdf",
  },
  {
    title: "HTML — structure sémantique et accessibilité",
    issuer: "Codédex",
    logo: "/images/certif/codedex.gif",
    year: "2025",
    file: "/files/certif/codédex_html.pdf",
  },
  {
    title: "CSS — Flexbox & Grid",
    issuer: "Codédex",
    logo: "/images/certif/codedex.gif",
    year: "2025",
    file: "/files/certif/codédex_css.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    logo: "/images/certif/freecodecamp.png",
    year: "2025",
  },
  {
    title: "Certification des compétences numériques",
    issuer: "Pix",
    logo: "/images/certif/pix.png",
    year: "2024",
    file: "/files/certif/pix.pdf",
  },
];

export const projetPro = {
  goal: "Devenir développeur full-stack orienté back-end : concevoir des API robustes, des modèles de données propres et des applications sécurisées.",
  steps: [
    { period: "2025 — 2027", label: "BTS SIO option SLAM à Ynov Campus Paris" },
    { period: "Été 2026", label: "Stage de première année chez 6Team (Angular, Node.js, PostgreSQL)" },
    { period: "Nov. — déc. 2026", label: "Stage de deuxième année chez 6Team (module de gestion des objets 3D)" },
    { period: "2027", label: "Épreuves et obtention du BTS SIO" },
  ],
  todo: "Indique ta poursuite d’études visée après le BTS (ex : Bachelor ou Mastère développement en alternance, licence professionnelle…).",
};
