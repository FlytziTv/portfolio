import { Github } from "@/components/icons/github";
import { Gmail } from "@/components/icons/gmail";
import { Linkedin } from "@/components/icons/linkedin";
import type { Social } from "@/types/types";

export const profile = {
  firstName: "Alexis",
  lastName: "De Jesus",
  fullName: "Alexis De Jesus",
  role: "Étudiant en BTS SIO — option SLAM",
  school: "Ynov Campus Paris",
  location: "Paris, France",
  email: "alexis.dejesus019@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/150966588?v=4",
  cv: "/files/cv_alexis_dejesus.pdf",
  session: "Session 2027",
  tagline:
    "Je conçois et développe des applications web full-stack, de la base de données jusqu’à l’interface.",
};

export const socials: Social[] = [
  {
    name: "Email",
    label: profile.email,
    url: `mailto:${profile.email}`,
    icon: Gmail,
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/alexis-dejesus",
    url: "https://www.linkedin.com/in/alexis-dejesus/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    label: "github.com/FlytziTv",
    url: "https://github.com/FlytziTv",
    icon: Github,
  },
];

// Pages principales du portfolio, utilisées par la navigation et le sommaire
export const navigation = [
  {
    href: "/parcours",
    label: "A propos",
    description: "Présentation, formation, compétences et certifications",
  },
  {
    href: "/bts-sio",
    label: "Bts",
    description: "La formation, l’option SLAM et les épreuves",
  },
  {
    href: "/stages",
    label: "Stages",
    description: "Mes expériences en milieu professionnel",
  },
  {
    href: "/realisations",
    label: "Projets",
    description: "Projets E5, E6 et personnels documentés",
  },
  {
    href: "/veille",
    label: "Veille",
    description: "Le Raspberry Pi comme plateforme de développement",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Me contacter et télécharger mon CV",
  },
];

// Tableau de synthèse officiel de l’épreuve E5 (PDF).
// Dépose le fichier dans /public/files puis indique son chemin, ex : "/files/tableau-synthese.pdf"
export const tableauSynthesePdf: string | null = null;
