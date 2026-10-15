import type { VeilleArticle, VeilleSource } from "@/types/types";

export const veille = {
  subject: "Le Raspberry Pi",
  title: "Le Raspberry Pi, du nano-ordinateur à la plateforme de développement",
  problematique:
    "En quoi le Raspberry Pi est-il devenu une plateforme crédible pour développer, héberger et exécuter des applications — y compris d’intelligence artificielle — et quelles limites rencontre-t-il aujourd’hui ?",
  why: "Sous Linux (Debian), le Raspberry Pi permet à un développeur SLAM d’auto-héberger une API ou une base de données, de tester un déploiement sur architecture ARM et, depuis 2024, d’exécuter des modèles d’IA en local, sans cloud.",
};

export const veilleSources: VeilleSource[] = [
  { name: "Blog officiel Raspberry Pi", type: "Flux RSS", url: "https://www.raspberrypi.com/news/" },
  { name: "Next", type: "Flux RSS", url: "https://next.ink/" },
  { name: "OMG! Ubuntu", type: "Flux RSS", url: "https://www.omgubuntu.co.uk/" },
];

export const veilleTools = [
  { name: "Feedly", role: "Agrégateur des flux RSS, consulté plusieurs fois par semaine" },
  { name: "Google Alerts", role: "Alerte e-mail sur « Raspberry Pi »" },
  { name: "Notion", role: "Fiches de synthèse : date, source, résumé, impact" },
];

export const veilleArticles: VeilleArticle[] = [
  {
    date: "Février 2026",
    source: "Raspberry Pi",
    title: "Des hausses de prix dictées par la mémoire",
    summary:
      "Les usines de mémoire privilégient les datacenters d’IA : le prix de la LPDDR4 explose et le Pi 5 16 Go atteint 205 $. Seuls les modèles 1 Go sont épargnés.",
    url: "https://www.raspberrypi.com/news/more-memory-driven-price-rises/",
    tag: "Marché",
  },
  {
    date: "Janvier 2026",
    source: "Raspberry Pi",
    title: "AI HAT+ 2 : l’IA générative en local sur le Pi 5",
    summary:
      "Une carte d’extension à 130 $ (Hailo-10H, 8 Go de RAM dédiée) qui exécute des LLM légers comme Llama 3.2 ou Qwen2.5-Coder entièrement hors ligne.",
    url: "https://www.raspberrypi.com/news/introducing-the-raspberry-pi-ai-hat-plus-2-generative-ai-on-raspberry-pi-5/",
    tag: "IA",
  },
  {
    date: "Octobre 2025",
    source: "Next",
    title: "Raspberry Pi OS passe à Debian 13 « Trixie »",
    summary:
      "Le système officiel est reconstruit sur Debian 13 avec le noyau Linux 6.12 LTS et un Control Centre qui regroupe les réglages.",
    url: "https://next.ink/203051/raspberry-pi-os-passe-a-debian-13-trixie-et-renove-son-interface/",
    tag: "Logiciel",
  },
  {
    date: "Juin 2024",
    source: "Raspberry Pi",
    title: "AI Kit : premier accélérateur d’IA officiel",
    summary:
      "Un module Hailo-8L (13 TOPS) relié en PCIe au Pi 5 pour 70 $, dédié à la vision par ordinateur en temps réel.",
    url: "https://www.raspberrypi.com/news/raspberry-pi-ai-kit-available-now-at-70/",
    tag: "IA",
  },
  {
    date: "Septembre 2023",
    source: "Raspberry Pi",
    title: "Lancement du Raspberry Pi 5",
    summary:
      "Cortex-A76 à 2,4 GHz et port PCIe : 2 à 3 fois plus rapide que le Pi 4, il ouvre la voie aux SSD NVMe et aux accélérateurs d’IA.",
    url: "https://www.raspberrypi.com/news/introducing-raspberry-pi-5/",
    tag: "Matériel",
  },
];

export const veilleSynthese = [
  {
    title: "Une vraie machine de développement",
    text: "PCIe, SSD NVMe et jusqu’à 16 Go de RAM : le Pi 5 peut héberger une API, une base PostgreSQL ou un outil interne.",
  },
  {
    title: "L’IA s’exécute en local",
    text: "De la vision par ordinateur (2024) aux modèles de langage hors ligne (2026) : les données restent sur la carte, un atout pour le RGPD.",
  },
  {
    title: "La limite : le coût de la mémoire",
    text: "L’essor de l’IA fait flamber le prix de la RAM : il faut désormais dimensionner son matériel au plus juste.",
  },
];

export const veilleConclusion =
  "Le Raspberry Pi est devenu une plateforme pertinente pour un développeur : auto-hébergement, tests sur ARM et IA embarquée respectueuse des données. Prochaine étape : déployer LogPulse sur un Raspberry Pi 5.";
