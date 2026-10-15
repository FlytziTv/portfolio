import type { Competence, CompetenceId } from "@/types/types";

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
