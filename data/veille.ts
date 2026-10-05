import type { VeilleArticle, VeilleSource } from "@/types/types";

export const veille = {
  subject: "Le Raspberry Pi",
  title: "Le Raspberry Pi, du nano-ordinateur à la plateforme de développement",
  problematique:
    "En quoi le Raspberry Pi est-il devenu une plateforme crédible pour développer, héberger et exécuter des applications — y compris d’intelligence artificielle — et quelles limites rencontre-t-il aujourd’hui ?",
  why: [
    "Le Raspberry Pi est un ordinateur complet de la taille d’une carte de crédit, conçu à l’origine pour l’enseignement. Il fait tourner un vrai système Linux basé sur Debian : c’est l’environnement que j’administre déjà en TP (Apache, SSH, MariaDB).",
    "Pour un développeur SLAM, c’est un terrain idéal pour auto-héberger une API ou une base de données, tester un déploiement sur architecture ARM, ou faire tourner un outil interne à moindre coût — comme mon projet LogPulse.",
    "Depuis 2024, il s’ouvre à l’IA embarquée : on peut désormais exécuter des modèles de langage directement sur la carte, sans cloud. Un sujet qui croise développement, matériel et protection des données.",
  ],
};

export const veilleSources: VeilleSource[] = [
  { name: "Blog officiel Raspberry Pi", type: "Flux RSS", url: "https://www.raspberrypi.com/news/" },
  { name: "OMG! Ubuntu", type: "Flux RSS", url: "https://www.omgubuntu.co.uk/" },
  { name: "Next", type: "Flux RSS", url: "https://next.ink/" },
  { name: "CNX Software", type: "Flux RSS", url: "https://www.cnx-software.com/" },
  { name: "Phoronix", type: "Flux RSS", url: "https://www.phoronix.com/" },
  { name: "Forums Raspberry Pi", type: "Communauté", url: "https://forums.raspberrypi.com/" },
];

export const veilleTools = [
  { name: "Feedly", role: "Agrégateur des flux RSS, consulté plusieurs fois par semaine" },
  { name: "Google Alerts", role: "Alerte e-mail sur « Raspberry Pi »" },
  { name: "Notion", role: "Fiches de synthèse : date, source, résumé, impact" },
];

export const veilleArticles: VeilleArticle[] = [
  {
    date: "Octobre 2026",
    source: "OMG! Ubuntu",
    title: "Nouvelle hausse de prix des modèles 2 Go",
    summary:
      "Au 1er octobre 2026, le Raspberry Pi 4 2 Go passe à 67,50 $ et le Pi 5 2 Go à 77,50 $ (+12,50 $). Le Pi 4 2 Go coûte désormais 50 % de plus qu’à son lancement en 2019. Les modèles 1 Go restent inchangés.",
    url: "https://omgubuntu.co.uk/2026/10/raspberry-pi-2gb-costs-how-much-now",
    tag: "Marché",
  },
  {
    date: "Septembre 2026",
    source: "DistroWatch",
    title: "Raspberry Pi OS 2026-09-15 : un bureau modernisé",
    summary:
      "Nouvelle mise à jour de Raspberry Pi OS : interface du bureau rafraîchie et apparition d’un dock d’icônes, tout en gardant la simplicité du système.",
    url: "https://distrowatch.com/?newsid=12954",
    tag: "Logiciel",
  },
  {
    date: "Février 2026",
    source: "Raspberry Pi",
    title: "Des hausses de prix dictées par la mémoire",
    summary:
      "Le coût de la mémoire LPDDR4 explose, car les usines de mémoire privilégient les datacenters d’IA. Les prix augmentent selon la quantité de RAM (+10 $ pour 2 Go jusqu’à +60 $ pour 16 Go) : le Pi 5 16 Go atteint 205 $. Les modèles 1 Go sont épargnés, dont un Pi 5 1 Go à 45 $ lancé en décembre 2025.",
    url: "https://www.raspberrypi.com/news/more-memory-driven-price-rises/",
    tag: "Marché",
  },
  {
    date: "Janvier 2026",
    source: "Raspberry Pi",
    title: "AI HAT+ 2 : l’IA générative en local sur le Pi 5",
    summary:
      "Carte d’extension à 130 $ équipée de l’accélérateur Hailo-10H (40 TOPS INT4) et de 8 Go de RAM dédiée. Elle exécute des LLM légers (Llama 3.2 1B, Qwen2.5-Coder 1.5B, DeepSeek-R1-Distill 1.5B) entièrement hors ligne, sans envoyer de données dans le cloud.",
    url: "https://www.raspberrypi.com/news/introducing-the-raspberry-pi-ai-hat-plus-2-generative-ai-on-raspberry-pi-5/",
    tag: "IA",
  },
  {
    date: "Octobre 2025",
    source: "Next",
    title: "Raspberry Pi OS passe à Debian 13 « Trixie »",
    summary:
      "Le système officiel est reconstruit sur Debian 13 : nouveau thème et nouvelles icônes, un Control Centre qui regroupe les réglages, un packaging plus modulaire, le noyau Linux 6.12 LTS et la prise en charge du bug de l’an 2038.",
    url: "https://next.ink/203051/raspberry-pi-os-passe-a-debian-13-trixie-et-renove-son-interface/",
    tag: "Logiciel",
  },
  {
    date: "Septembre 2025",
    source: "OMG! Ubuntu",
    title: "Raspberry Pi 500+ : un vrai poste de travail dans un clavier",
    summary:
      "Un ordinateur complet intégré dans un clavier mécanique rétroéclairé : 16 Go de RAM, SSD NVMe de 256 Go et processeur Cortex-A76 à 2,4 GHz, pour 200 $. Le Pi devient un poste de développement crédible.",
    url: "https://www.omgubuntu.co.uk/2025/09/raspberry-pi-500-mechanical-keyboard-pc",
    tag: "Matériel",
  },
  {
    date: "2025",
    source: "Raspberry Pi",
    title: "Raspberry Pi Connect sort de bêta",
    summary:
      "Le service d’accès à distance par navigateur sort de bêta. Il permet de prendre la main sur son Pi ou d’ouvrir un shell à distance via WebRTC, avec un trafic chiffré de bout en bout (DTLS), sans ouvrir de port sur sa box.",
    url: "https://www.raspberrypi.com/news/raspberry-pi-connect-is-out-of-beta-simple-remote-access-now-even-better/",
    tag: "Logiciel",
  },
  {
    date: "Juin 2024",
    source: "Raspberry Pi",
    title: "AI Kit : premier accélérateur d’IA officiel",
    summary:
      "Un module Hailo-8L (13 TOPS) relié en PCIe au Pi 5 pour 70 $. Il permet de la vision par ordinateur en temps réel (détection d’objets, de poses) avec une faible consommation.",
    url: "https://www.raspberrypi.com/news/raspberry-pi-ai-kit-available-now-at-70/",
    tag: "IA",
  },
  {
    date: "Septembre 2023",
    source: "Raspberry Pi",
    title: "Lancement du Raspberry Pi 5",
    summary:
      "Processeur Cortex-A76 à 2,4 GHz, puce d’entrées-sorties RP1 conçue en interne et un port PCIe : 2 à 3 fois plus rapide que le Pi 4, il ouvre la voie aux SSD NVMe et aux accélérateurs d’IA.",
    url: "https://www.raspberrypi.com/news/introducing-raspberry-pi-5/",
    tag: "Matériel",
  },
];

export const veilleSynthese = [
  {
    title: "Une vraie machine de développement",
    text: "Avec le Pi 5, le PCIe, les SSD NVMe et jusqu’à 16 Go de RAM, le Raspberry Pi n’est plus un simple gadget : il peut héberger une API, une base PostgreSQL ou un outil interne pour une petite structure.",
  },
  {
    title: "L’IA s’exécute en local",
    text: "En moins de deux ans, on est passé de la vision par ordinateur (AI Kit, 2024) aux modèles de langage hors ligne (AI HAT+ 2, 2026). Les données restent sur la carte, ce qui répond aux enjeux de confidentialité et de RGPD.",
  },
  {
    title: "Un écosystème logiciel mature",
    text: "Raspberry Pi OS suit Debian (Trixie) et Raspberry Pi Connect simplifie l’administration à distance : on retrouve les mêmes outils qu’en environnement professionnel.",
  },
  {
    title: "La limite : le coût de la mémoire",
    text: "Paradoxalement, l’essor de l’IA dans les datacenters fait flamber le prix de la RAM. Le Pi « à 35 $ » ne concerne plus que les modèles 1 Go : il faut désormais dimensionner son matériel au plus juste.",
  },
];

export const veilleConclusion =
  "Le Raspberry Pi est devenu une plateforme pertinente pour un développeur : auto-hébergement, tests sur architecture ARM, IA embarquée respectueuse des données. Pour la suite, je souhaite déployer l’un de mes projets (LogPulse) sur un Raspberry Pi 5 et tester un assistant de code local avec Qwen2.5-Coder.";
