import type { Competence, CompetenceId, Epreuve } from "@/types/types";

// Bloc 1 — Support et mise à disposition de services informatiques (épreuve E5)
export const competences: Competence[] = [
  {
    id: "C1",
    title: "Gérer le patrimoine informatique",
    short: "Patrimoine",
    items: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
      "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
      "Vérifier les conditions de la continuité d’un service informatique",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d’utilisation des ressources numériques",
    ],
  },
  {
    id: "C2",
    title: "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    short: "Incidents",
    items: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes concernant les services réseau et système, applicatifs",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    id: "C3",
    title: "Développer la présence en ligne de l’organisation",
    short: "Présence en ligne",
    items: [
      "Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
      "Référencer les services en ligne de l’organisation et mesurer leur visibilité",
      "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
    ],
  },
  {
    id: "C4",
    title: "Travailler en mode projet",
    short: "Mode projet",
    items: [
      "Analyser les objectifs et les modalités d’organisation d’un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
    ],
  },
  {
    id: "C5",
    title: "Mettre à disposition des utilisateurs un service informatique",
    short: "Mise à disposition",
    items: [
      "Réaliser les tests d’intégration et d’acceptation d’un service",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d’un service",
    ],
  },
  {
    id: "C6",
    title: "Organiser son développement professionnel",
    short: "Dév. professionnel",
    items: [
      "Mettre en place son environnement d’apprentissage personnel",
      "Mettre en œuvre des outils et stratégies de veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
];

export const competenceById = (id: CompetenceId) =>
  competences.find((c) => c.id === id)!;

export const btsInfos = [
  { label: "Niveau", value: "Bac +2 — niveau 5" },
  { label: "Durée", value: "2 ans · 120 crédits ECTS" },
  { label: "Stages", value: "10 semaines minimum" },
  { label: "Diplôme", value: "Diplôme d’État" },
];

export const options = [
  {
    code: "SLAM",
    title: "Solutions Logicielles et Applications Métiers",
    mine: true,
    description:
      "Conception, développement et maintenance d’applications : web, mobile, bases de données et programmation orientée objet.",
    jobs: [
      "Développeur d’applications",
      "Développeur web",
      "Analyste programmeur",
      "Chef de projet junior",
    ],
  },
  {
    code: "SISR",
    title: "Solutions d’Infrastructure, Systèmes et Réseaux",
    mine: false,
    description:
      "Installation, administration et sécurisation des infrastructures : serveurs, réseaux, virtualisation et supervision.",
    jobs: [
      "Administrateur systèmes et réseaux",
      "Technicien support",
      "Technicien d’infrastructure",
      "Technicien cybersécurité",
    ],
  },
];

export const blocs = [
  {
    code: "Bloc 1",
    title: "Support et mise à disposition de services informatiques",
    scope: "Commun SISR / SLAM",
    epreuve: "E5",
  },
  {
    code: "Bloc 2",
    title: "Conception et développement d’applications",
    scope: "Option SLAM",
    epreuve: "E6",
  },
  {
    code: "Bloc 3",
    title: "Cybersécurité des services informatiques",
    scope: "Commun, spécialisé selon l’option",
    epreuve: "E7",
  },
];

export const epreuves: Epreuve[] = [
  { code: "E1", title: "Culture générale et expression", coef: 2, mode: "Écrit" },
  { code: "E2", title: "Expression et communication en langue anglaise", coef: 2, mode: "Oral + écrit" },
  { code: "E3", title: "Mathématiques pour l’informatique", coef: 3, mode: "CCF" },
  { code: "E4", title: "Culture économique, juridique et managériale", coef: 3, mode: "Écrit" },
  { code: "E5", title: "Support et mise à disposition de services informatiques", coef: 4, mode: "Oral", highlight: true },
  { code: "E6", title: "Conception et développement d’applications (SLAM)", coef: 4, mode: "Oral" },
  { code: "E7", title: "Cybersécurité des services informatiques", coef: 4, mode: "Écrit" },
];
