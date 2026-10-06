import type { Metadata } from "next";
import PageHeader from "@/components/page/page-header";
import Section from "@/components/page/section";
import Tag from "@/components/page/tag";
import { blocs, btsInfos, options } from "@/data/bts";
import { cn } from "@/lib/utils";
import Epreuvres from "@/components/bts/epreuvres";
import OptionCard from "@/components/bts/option-card";

export const metadata: Metadata = { title: "BTS SIO" };

export default function BtsSio() {
  return (
    <>
      <PageHeader
        eyebrow="02 — BTS SIO"
        title={
          <>
            Services informatiques{" "}
            <span className="text-muted-foreground">aux organisations</span>
          </>
        }
        description="Un BTS en deux ans qui forme des techniciens supérieurs capables de concevoir, déployer et maintenir les services informatiques d’une organisation."
      />

      <Section
        title="La formation"
        aside="Actuellement en deuxième année de BTS SIO, option SLAM (Solutions Logicielles et Applications Métiers)."
      >
        {/* Informations sur la formation (Statistiques) */}
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-card shadow-xs sm:grid-cols-4">
          {btsInfos.map((info, index) => (
            <div
              key={info.label}
              className={cn(
                "flex flex-col gap-1 p-5",
                index % 2 === 1 && "border-l border-border",
                index > 1 && "border-t border-border sm:border-t-0",
                index === 2 && "sm:border-l",
              )}
            >
              <dt className="text-xs text-muted-foreground">{info.label}</dt>
              <dd className="text-sm font-medium">{info.value}</dd>
            </div>
          ))}
        </dl>

        {/* Description de la formation */}
        <p className="mt-6 leading-relaxed text-muted-foreground">
          La première année pose un socle commun (support, réseaux,
          développement, cybersécurité) et les étudiants se spécialisent ensuite
          dans l’une des deux options. Les enseignements généraux — culture
          générale, anglais, mathématiques et culture économique, juridique et
          managériale — complètent la formation.
        </p>
      </Section>

      <Section
        title="Les options"
        aside="Deux options sont proposées : SLAM et SISR."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {options.map((option) => (
            <OptionCard
              key={option.code}
              code={option.code}
              title={option.title}
              description={option.description}
              jobs={option.jobs}
              mine={option.mine}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Blocs de compétences"
        aside="Les blocs de compétences du BTS SIO, qui permettent d’évaluer les acquis des étudiants."
      >
        {/* Description des blocs de compétences */}
        <div className="flex flex-col divide-y divide-border">
          {blocs.map((bloc) => (
            <div
              key={bloc.code}
              className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[90px_1fr_auto] sm:items-baseline sm:gap-6"
            >
              {/* id */}
              <span className="font-mono text-xs text-brand uppercase">
                {bloc.code}
              </span>

              {/* information */}
              <div className="flex flex-col gap-0.5">
                <p className="font-medium">{bloc.title}</p>
                <p className="text-sm text-muted-foreground">{bloc.scope}</p>
              </div>

              {/* Nom de l'épreuve */}
              <Tag variant="code" className="w-fit">
                {bloc.epreuve}
              </Tag>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Les épreuves"
        aside="Les épreuves du BTS SIO, leurs coefficients et leurs formes."
      >
        <Epreuvres />
      </Section>
    </>
  );
}
