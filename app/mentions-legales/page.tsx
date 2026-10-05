import type { Metadata } from "next";
import PageHeader from "@/components/page/page-header";
import Section from "@/components/page/section";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <>
      <PageHeader
        eyebrow="Informations"
        title="Mentions légales"
        description="Informations prévues par la loi pour la confiance dans l’économie numérique (LCEN)."
      />

      <Section title="Éditeur">
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Ce site est édité à titre personnel par {profile.fullName}, étudiant
          en BTS SIO.
          <br />
          Contact :{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {profile.email}
          </a>
        </p>
      </Section>

      <Section title="Hébergement">
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —
          vercel.com
        </p>
      </Section>

      <Section title="Données personnelles">
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p>
            Les informations saisies dans le formulaire de contact (nom, e-mail,
            message) sont transmises par e-mail via le service Resend, dans le
            seul but de vous répondre. Elles ne sont ni stockées sur ce site, ni
            cédées à des tiers, et les e-mails reçus sont supprimés une fois
            l’échange terminé.
          </p>
          <p>
            Conformément au RGPD, vous pouvez demander l’accès, la rectification
            ou la suppression de vos données en écrivant à{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {profile.email}
            </a>
            .
          </p>
          <p>
            Ce site n’utilise aucun cookie de mesure d’audience ou publicitaire.
            Seule votre préférence de thème (clair ou sombre) est enregistrée
            dans le stockage local de votre navigateur, sans être transmise.
          </p>
        </div>
      </Section>

      <Section title="Propriété intellectuelle">
        <p className="leading-relaxed text-muted-foreground">
          Les contenus de ce site (textes, documentations, captures) sont la
          propriété de leur auteur, sauf mention contraire. Les marques et logos
          cités appartiennent à leurs propriétaires respectifs. Les articles de
          la veille technologique sont résumés et renvoient vers leur source
          d’origine.
        </p>
      </Section>
    </>
  );
}
