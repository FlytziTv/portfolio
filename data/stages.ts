import type { Experience, Stage } from "@/types/types";

export const stages: Stage[] = [
  {
    company: "6Team",
    logo: "/images/work/6team.jpg",
    role: "Développeur full-stack — stagiaire",
    start: "6 juillet 2026",
    end: "6 août 2026",
    level: "Stage de 1re année",
    presentation:
      "Entreprise qui développe une plateforme web de visites virtuelles 3D et de gestion de locaux pour ses clients. Par respect de la confidentialité des projets clients, les noms, captures et détails internes ne sont pas diffusés ici.",
    missions: [
      "Prise en main d’une plateforme Angular de visites virtuelles 3D et audit UI / UX présenté sur Figma.",
      "Synchronisation automatique des pièces et des points de captation d’une visite Matterport.",
      "Connexion sécurisée d’une bibliothèque d’objets 3D à la plateforme : API OAuth, viewer 3D, sélecteur embarqué.",
      "Correction de bugs, tests en préproduction et rédaction d’une procédure de déploiement.",
      "Démonstrations en présentiel et accompagnement d’un client sur son logiciel métier.",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Matterport",
      "Figma",
    ],
    competences: ["C1", "C2", "C4", "C5"],
    realisations: ["stage-synchronisation-pieces", "stage-bibliotheque-3d"],
    weeks: [
      {
        period: "6 — 10 juillet",
        title: "Prise en main et mise à jour du SDK",
        items: [
          "Installation du projet, découverte de l’architecture Angular",
          "Audit UI / UX de deux applications et propositions d’amélioration sur Figma",
          "Mise à jour du SDK Matterport sur une branche de test, clé SDK rendue configurable",
          "Recherches sur la protection des visites (mot de passe, rôles)",
        ],
      },
      {
        period: "13 — 17 juillet",
        title: "Pièces et points de captation",
        items: [
          "Recherches sur la sécurisation des liens de visite",
          "Récupération des pièces et des points de captation via le SDK",
          "Détection des points situés dans plusieurs pièces",
        ],
      },
      {
        period: "20 — 24 juillet",
        title: "Enregistrement et démonstration",
        items: [
          "Démonstration des développements en présentiel",
          "Rendez-vous client : conseil et assistance sur un logiciel métier",
          "Bouton de récupération dans la synchronisation, textes multilingues",
          "Enregistrement en base et correction de la création des pièces",
        ],
      },
      {
        period: "27 — 31 juillet",
        title: "Bibliothèque d’objets 3D",
        items: [
          "Installation du second projet et réunion de cadrage des missions",
          "Corrections de l’API et renforcement de la sécurité",
          "API de connexion OAuth entre les deux applications et viewer 3D",
          "Validation partielle par l’équipe, puis sélecteur d’objets embarqué",
        ],
      },
      {
        period: "3 — 6 août",
        title: "Livraison et calibrage",
        items: [
          "Tests, branches de livraison et procédure de déploiement",
          "Gestion de la rotation lors du calibrage du plan",
        ],
      },
    ],
  },
  {
    company: "6Team",
    logo: "/images/work/6team.jpg",
    role: "Développeur full-stack — stagiaire",
    start: "23 novembre 2026",
    end: "31 décembre 2026",
    level: "Stage de 2e année",
    upcoming: true,
    presentation:
      "Retour dans la même entreprise, à Gentilly, pour 6 semaines à temps plein (203 heures). Mission prévue par la convention : concevoir un module de gestion des objets 3D et ses interfaces vers des solutions externes de gestion de projet et de CMDB.",
    missions: [
      "Analyse et expression du besoin.",
      "Définition de l’architecture et des outils de développement, organisation des phases de développement.",
      "Développement d’un module de gestion des objets 3D sur l’environnement de préproduction.",
      "Interfaçage avec des solutions externes de gestion de projet et de CMDB.",
    ],
    stack: ["Angular", "Node.js", "JavaScript", "SQL"],
    competences: ["C1", "C4", "C5"],
  },
];

// Stages réalisés pendant le Bac Pro EDPI (avant le BTS)
export const previousExperiences: Experience[] = [
  {
    company: "New Mat Mécatronics",
    logo: "/images/work/new_mat_mecatronics.jpg",
    role: "Concepteur industriel",
    period: "Nov. — déc. 2023",
    missions: [
      "Étude de marché et veille concurrentielle.",
      "Conception sur SolidWorks d’un prototype de pince industrielle pour robots de préhension.",
    ],
  },
  {
    company: "Eiffage",
    logo: "/images/work/eiffage.jpg",
    role: "Chargé d’études",
    period: "2022 — 2023 · 4 périodes",
    missions: [
      "Plans AutoCAD et modélisation 3D SolidWorks de systèmes d’extraction d’air (atelier de maintenance Renault, restaurant parisien).",
      "Relevés et mise à jour des plans d’un bâtiment selon les modifications demandées par le client.",
      "Modélisation 3D d’un système de ventilation à partir de plans 2D.",
    ],
  },
];
