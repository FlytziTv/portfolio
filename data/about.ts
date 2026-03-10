const birthDate = new Date("2006-11-10");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (
  monthDiff < 0 ||
  (monthDiff === 0 && today.getDate() < birthDate.getDate())
) {
  age--;
}

export const personal_data = {
  prenom: "Alexis",
  name: "De Jesus",
  age: age + " ans",
  location: "Île-de-France, France",
  nationalite: "Française, Portugaise (en cours)",
  disponibilite: "Immédiate",
  permis: "Permis B (Véhiculé)",

  link: [
    {
      id: 1,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/alexis-dejesus",
    },
    {
      id: 2,
      title: "GitHub",
      value: "https://www.github.com/FlytziTv",
    },
    {
      id: 3,
      title: "Mail Scolaire",
      value: "mailto:alexis.dejesus@ynov.com",
    },
  ],

  cv: {
    title: "Mon cv",
    value: "/files/cv_alexis_dejesus.pdf",
  },

  presentation:
    "Passionné par le développement web et mobile, je suis un jeune développeur de " +
    age +
    " ans basé en Île-de-France. Actuellement en formation en BTS SIO (Services Informatiques aux Organisations) à Paris Ynov Campus, je me spécialise dans le développement full-stack et mobile. J'ai acquis des compétences solides en JavaScript, TypeScript, React, Next.js, et Flutter à travers mes projets personnels et académiques. Curieux et motivé, je suis constamment à la recherche de nouvelles technologies et de défis pour améliorer mes compétences. Je suis ouvert à des opportunités de stage ou d'alternance pour mettre en pratique mes connaissances et contribuer à des projets innovants.",
};

export const about_xp = {
  works: [
    {
      id: 0,
      color: "#FE0000",
      image: "/img/icons/studs/eiffage.png",
      title: "Chargé d'études",
      entreprise: "Eiffage",
      type: "Stage",
      date: "mars 2022 - mars 2022",
      link: "https://www.eiffage.com",
    },
    {
      id: 1,
      color: "#FE0000",
      image: "/img/icons/studs/eiffage.png",
      title: "Chargé d'études",
      entreprise: "Eiffage",
      type: "Stage",
      date: "juin 2022 - juin 2022",
      link: "https://www.eiffage.com",
    },
    {
      id: 2,
      color: "#FE0000",
      image: "/img/icons/studs/eiffage.png",
      title: "Chargé d'études",
      entreprise: "Eiffage",
      type: "Stage",
      date: "mars 2023 - mars 2023",
      link: "https://www.eiffage.com",
    },
    {
      id: 3,
      color: "#FE0000",
      image: "/img/icons/studs/eiffage.png",
      title: "Chargé d'études",
      entreprise: "Eiffage",
      type: "Stage",
      date: "juin 2023 - juin 2023",
      link: "https://www.eiffage.com",
    },
    {
      id: 4,
      color: "#BD712B",
      image: "/img/icons/studs/new-mat.png",
      title: "Concepteur industriel",
      entreprise: "New Mat Mécatronics",
      type: "Stage",
      date: "novembre 2023 - décembre 2023",
      link: "https://www.new-mat.fr/",
    },
  ],
  studs: [
    {
      id: 0,
      color: "#FFFFFF",
      image: "/img/icons/studs/lycée.png",
      title: "Bac Pro EDPI ",
      entreprise: "Lycée Simone Weil",
      type: "Lycée",
      date: "septembre 2021 - juin 2024",
      link: "https://lyc-weil-conflans.ac-versailles.fr/",
    },
    {
      id: 2,
      color: "#FFFFFF",
      image: "/img/icons/studs/ynov.svg",
      title: "Bts SIO option SLAM",
      entreprise: "Ynov Campus Paris",
      type: "Études supérieures",
      date: "septembre 2025 - juin 2027",
      link: "/bts",
    },
  ],
};
