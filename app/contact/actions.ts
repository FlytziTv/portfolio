"use server";

import { Resend } from "resend";
import { profile } from "@/data/profile";
import {
  contactLimits,
  contactSubjects,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function sendContactMessage(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const read = (key: string) => String(formData.get(key) ?? "").trim();

  const values = {
    name: read("name"),
    email: read("email"),
    subject: read("subject"),
    message: read("message"),
  };

  // Champ piège invisible : un robot le remplit, un humain non
  if (read("website")) return { status: "success" };

  const errors: Partial<Record<ContactField, string>> = {};
  if (values.name.length < 2) errors.name = "Indiquez votre nom.";
  else if (values.name.length > contactLimits.name) errors.name = "Nom trop long.";

  if (!EMAIL_PATTERN.test(values.email) || values.email.length > contactLimits.email)
    errors.email = "Adresse e-mail invalide.";

  const subject = contactSubjects.find((s) => s.id === values.subject);
  if (!subject) errors.subject = "Choisissez un objet.";

  if (values.message.length < 10) errors.message = "Votre message est trop court (10 caractères min.).";
  else if (values.message.length > contactLimits.message) errors.message = "Votre message est trop long.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Certains champs sont à corriger.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante : le formulaire de contact ne peut pas envoyer d’e-mail.");
    return {
      status: "error",
      message: `Le formulaire est momentanément indisponible. Écrivez-moi directement à ${profile.email}.`,
      values,
    };
  }

  // Pas de retour à la ligne dans l’objet de l’e-mail
  const safeName = values.name.replace(/[\r\n]+/g, " ");

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? profile.email,
    replyTo: values.email,
    subject: `[Portfolio] ${subject!.label} — ${safeName}`,
    text: [
      `Nom : ${safeName}`,
      `E-mail : ${values.email}`,
      `Objet : ${subject!.label}`,
      "",
      values.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Échec de l’envoi Resend :", error);
    return {
      status: "error",
      message: `L’envoi a échoué. Réessayez dans un instant ou écrivez-moi à ${profile.email}.`,
      values,
    };
  }

  return { status: "success" };
}
