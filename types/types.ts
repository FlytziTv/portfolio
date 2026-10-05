import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ size?: number; color?: string }>;

export type Social = {
  name: string;
  label: string;
  url: string;
  icon: IconComponent;
};

/* ---------- BTS SIO ---------- */

export type CompetenceId = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";

export type Competence = {
  id: CompetenceId;
  title: string;
  short: string;
  items: string[];
};

export type Epreuve = {
  code: string;
  title: string;
  coef: number;
  mode: string;
  highlight?: boolean;
};

/* ---------- Parcours ---------- */

export type Formation = {
  school: string;
  logo?: string;
  diploma: string;
  start: string;
  end: string;
  location: string;
  description: string;
};

export type Certification = {
  title: string;
  logo?: string;
  issuer: string;
  year: string;
  file?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

/* ---------- Stages ---------- */

export type Stage = {
  company: string;
  logo?: string;
  role: string;
  start: string;
  end: string;
  level: string;
  presentation?: string;
  missions: string[];
  stack: string[];
  competences: CompetenceId[];
  realisations?: string[];
  weeks?: StageWeek[];
  upcoming?: boolean;
  todo?: string;
};

export type StageWeek = {
  period: string;
  title: string;
  items: string[];
};

export type Experience = {
  company: string;
  logo?: string;
  role: string;
  period: string;
  missions: string[];
};

/* ---------- Réalisations ---------- */

export type RealisationCategory = "e5" | "e6" | "stage" | "perso";

export type RealisationStatus = "Terminé" | "En cours" | "À venir";

export type Realisation = {
  slug: string;
  title: string;
  category: RealisationCategory;
  context: string;
  date: string;
  duration?: string;
  team?: string;
  summary: string;
  objectives: string[];
  steps?: string[];
  difficulties?: { problem: string; solution: string }[];
  results?: string[];
  environment: string[];
  competences: CompetenceId[];
  links: { doc?: string; github?: string; site?: string };
  images: string[];
  status: RealisationStatus;
  featured?: boolean;
  // Projet client : pas de captures ni de détails sensibles
  confidential?: boolean;
};

/* ---------- Veille ---------- */

export type VeilleArticle = {
  date: string;
  source: string;
  title: string;
  summary: string;
  url: string;
  tag: "Matériel" | "Logiciel" | "IA" | "Marché";
};

export type VeilleSource = {
  name: string;
  type: string;
  url: string;
};
