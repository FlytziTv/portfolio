import type { Metadata } from "next";
import { Download } from "lucide-react";
import PageHeader from "@/components/page/page-header";
import Section from "@/components/page/section";
import { TechTag } from "@/components/page/tag";
import { Timeline, TimelineItem } from "@/components/page/timeline";
import Todo from "@/components/page/todo";
import { CertificationCard } from "@/components/parcours/certification-list";
import { Button } from "@/components/ui/button";
import {
  about,
  certifications,
  formations,
  projetPro,
  skills,
} from "@/data/parcours";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Parcours" };

export default function Parcours() {
  return (
    <>
      <PageHeader
        eyebrow="01 — Parcours"
        title="De la conception industrielle au développement d’applications"
        description="Qui je suis, ce que j’ai appris et ce que je vise."
      />

      <Section title="À propos">
        <div className="flex max-w-3xl flex-col gap-4 leading-relaxed text-muted-foreground">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pt-2">
            <Button asChild variant="outline" className="rounded-full px-4">
              <a href={profile.cv} target="_blank" rel="noopener noreferrer">
                <Download data-icon="inline-start" />
                Télécharger mon CV
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="Formation"
        aside="Mon parcours académique et mes diplômes obtenus."
      >
        <Timeline>
          {formations.map((formation) => (
            <TimelineItem
              key={formation.school}
              logo={formation.logo}
              title={formation.diploma}
              subtitle={`${formation.school} · ${formation.location}`}
              period={`${formation.start} — ${formation.end}`}
            >
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {formation.description}
              </p>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section
        title="Compétences techniques"
        aside="Mes compétences techniques et mes technologies maîtrisées."
      >
        <div className="flex flex-col divide-y divide-border">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[150px_1fr] sm:gap-6"
            >
              <h3 className="flex items-center font-mono text-xs text-muted-foreground uppercase">
                {group.label}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechTag key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Certifications"
        aside="Mes certificats et attestations personnelles."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((certif) => (
            <CertificationCard key={certif.title} certif={certif} />
          ))}
        </div>
      </Section>
    </>
  );
}
