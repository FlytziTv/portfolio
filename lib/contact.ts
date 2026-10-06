// Partagé entre le formulaire (client) et l’action serveur

export const contactSubjects = [
  { id: "stage", label: "Stage" },
  { id: "alternance", label: "Alternance" },
  { id: "projet", label: "Projet" },
  { id: "autre", label: "Autre" },
] as const;

export type ContactSubject = (typeof contactSubjects)[number]["id"];

export type ContactField = "name" | "email" | "subject" | "message";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  // Valeurs renvoyées pour pré-remplir le formulaire après une erreur
  values?: Partial<Record<ContactField, string>>;
};

export const contactLimits = {
  name: 100,
  email: 200,
  message: 5000,
};
