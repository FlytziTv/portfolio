<div align="center">

# Portfolio — Alexis De Jesus

**Développeur Fullstack · BTS SIO SLAM**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev)

 **[aalexis.fr](https://aalexis.fr)**

</div>

---

## Présentation

Portfolio personnel développé avec **Next.js 16** et **TypeScript**, présentant mon parcours, mes compétences et mes projets réalisés dans le cadre de mon BTS SIO option SLAM ainsi que mes projets personnels.

---

## Fonctionnalités

- **Page d'accueil** — présentation et mise en avant du profil
- **Projets E5** — projets réalisés en BTS SIO SLAM
- **Formulaire de contact** — envoi d'e-mails via [Resend](https://resend.com)
- **Design responsive** — adapté mobile, tablette et desktop
- **Performances optimisées** — rendu serveur avec Next.js App Router

---

## Stack technique

| Technologie | Usage |
|---|---|
| **Next.js 16** | Framework React (App Router) |
| **TypeScript 5** | Typage statique |
| **Tailwind CSS 4** | Styles utilitaires |
| **Lucide React** | Icônes |
| **Resend** | Envoi d'e-mails (formulaire de contact) |
| **clsx / tailwind-merge** | Gestion des classes CSS |

---

## Installation & lancement

### Prérequis

- **Node.js** >= 18
- **npm** ou **yarn** ou **pnpm**

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/FlytziTv/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Renseigner votre clé API Resend dans .env.local

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## Structure du projet

```
portfolio/
├── app/              # Pages et routes (Next.js App Router)
├── components/       # Composants React réutilisables
├── data/             # Données statiques (projets, compétences…)
├── lib/              # Utilitaires et helpers
├── public/           # Assets statiques (images, icônes…)
└── ...
```

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run start` | Démarre le serveur de production |
| `npm run lint` | Vérifie la qualité du code (ESLint) |

---

## Déploiement

Le site est déployé et accessible à l'adresse **[aalexis.fr](https://aalexis.fr)**.

Le déploiement est recommandé via **[Vercel](https://vercel.com)** pour une intégration optimale avec Next.js.

---

## Auteur

**Alexis De Jesus**

- Portfolio : [aalexis.fr](https://aalexis.fr)
- GitHub : [@FlytziTv](https://github.com/FlytziTv)
