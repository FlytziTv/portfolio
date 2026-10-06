"use client";

import { CircleCheck, Loader2, Send } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { sendContactMessage } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactLimits,
  contactSubjects,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  // Changer la clé remonte le formulaire pour envoyer un nouveau message
  const [formKey, setFormKey] = useState(0);
  return (
    <ContactFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />
  );
}

function ContactFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const values = state.values ?? {};
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-4 p-6 sm:p-10">
        <span className="flex size-11 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CircleCheck size={22} />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tight">
            Message envoyé
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Merci pour votre message, je vous réponds dès que possible.
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-full px-4"
          onClick={onReset}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="relative flex flex-col gap-6 p-6 sm:p-8"
    >
      {/* Titre du formulaire */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold tracking-tight">
          Nouveau message
        </h3>
        <p className="text-sm text-muted-foreground">
          Tous les champs sont requis.
        </p>
      </div>

      {/* message d'erreur */}
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
        >
          {state.message}
        </p>
      )}

      {/* Sujet du message */}
      <fieldset
        className="flex flex-col gap-2.5"
        aria-describedby={errors.subject ? "subject-error" : undefined}
      >
        <legend className="mb-2.5 text-sm leading-none font-medium">
          De quoi s’agit-il ?
        </legend>
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-muted p-1 sm:w-fit sm:grid-cols-4">
          {contactSubjects.map((subject, index) => (
            <label
              key={subject.id}
              className="cursor-pointer rounded-lg px-4 py-1.5 text-center text-sm text-muted-foreground transition select-none hover:text-foreground has-checked:bg-card has-checked:font-medium has-checked:text-foreground has-checked:shadow-sm has-focus-visible:ring-[3px] has-focus-visible:ring-brand/20"
            >
              <input
                type="radio"
                name="subject"
                value={subject.id}
                defaultChecked={
                  values.subject ? values.subject === subject.id : index === 0
                }
                className="sr-only"
              />
              {/* Copie invisible en gras superposée : réserve la largeur finale, rien ne bouge à la sélection */}
              <span className="inline-grid justify-items-center">
                <span aria-hidden className="invisible col-start-1 row-start-1 font-medium">
                  {subject.label}
                </span>
                <span className="col-start-1 row-start-1">{subject.label}</span>
              </span>
            </label>
          ))}
        </div>
        {errors.subject && <FieldError id="subject" message={errors.subject} />}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Nom et e-mail */}
        <Field id="name" label="Nom" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Prénom Nom"
            maxLength={contactLimits.name}
            defaultValue={values.name}
            {...fieldA11y("name", errors.name)}
          />
        </Field>

        {/* E-mail */}
        <Field id="email" label="E-mail" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.fr"
            maxLength={contactLimits.email}
            defaultValue={values.email}
            {...fieldA11y("email", errors.email)}
          />
        </Field>
      </div>

      {/* Message */}
      <Field id="message" label="Message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Bonjour Alexis, …"
          className="resize-none"
          maxLength={contactLimits.message}
          defaultValue={values.message}
          {...fieldA11y("message", errors.message)}
        />
      </Field>

      {/* Champ piège anti-spam */}
      <div
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Site web</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Bouton d'envoi */}
      <div className="flex flex-col-reverse gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Vos informations servent uniquement à vous répondre.{" "}
          <Link
            href="/mentions-legales"
            className="underline underline-offset-2 hover:text-foreground"
          >
            En savoir plus
          </Link>
        </p>

        {/* Bouton d'envoi */}
        <Button
          type="submit"
          disabled={pending}
          size="lg"
          className="rounded-2xl cursor-pointer"
        >
          {pending ? (
            <>
              <Loader2 data-icon="inline-start" className="animate-spin" />
              Envoi…
            </>
          ) : (
            <>
              Envoyer
              <Send data-icon="inline-end" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: ContactField;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <FieldError id={id} message={error} />}
    </div>
  );
}

function FieldError({ id, message }: { id: ContactField; message: string }) {
  return (
    <p id={`${id}-error`} className="text-xs text-destructive">
      {message}
    </p>
  );
}

const fieldA11y = (id: ContactField, error?: string) =>
  error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};
