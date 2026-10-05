import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/page/page-header";
import Section from "@/components/page/section";
import Tag, { TechTag } from "@/components/page/tag";
import { Bullets, Timeline, TimelineItem } from "@/components/page/timeline";
import Todo from "@/components/page/todo";
import CompetenceTags from "@/components/realisations/competence-tags";
import { getRealisation } from "@/data/realisations";
import { previousExperiences, stages } from "@/data/stages";

export const metadata: Metadata = { title: "Stages" };

export default function Stages() {
  return (
    <>
      <PageHeader
        eyebrow="03 — Stages"
        title="En milieu professionnel"
        description="Les stages du BTS me permettent de mettre mes compétences en pratique dans une vraie équipe, sur des projets en production."
      />

      {stages.map((stage) => (
        <Fragment key={stage.level}>
          {/* Section pour chaque stage */}
          <Section title={stage.level} aside={`${stage.start} — ${stage.end}`}>
            <article className="flex flex-col gap-6 rounded-xl border border-border bg-card p-5 shadow-xs sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
                  {stage.logo ? (
                    <Image
                      src={stage.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="size-full object-contain"
                    />
                  ) : (
                    <span className="font-dot text-xl font-black text-brand">
                      ?
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight">
                    {stage.company}
                    {stage.upcoming && <Tag variant="brand">À venir</Tag>}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stage.role}</p>
                </div>
              </div>

              {stage.presentation && (
                <p className="leading-relaxed text-muted-foreground">
                  {stage.presentation}
                </p>
              )}
              {stage.todo && <Todo>{stage.todo}</Todo>}

              {stage.missions.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-xs text-muted-foreground uppercase">
                    Missions
                  </h4>
                  <Bullets items={stage.missions} muted={false} />
                </div>
              )}

              {stage.stack.length > 0 && (
                <div className="grid gap-6 border-t border-border pt-5 sm:grid-cols-[1fr_auto]">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-mono text-xs text-muted-foreground uppercase">
                      Environnement
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.stack.map((tech) => (
                        <TechTag key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-mono text-xs text-muted-foreground uppercase">
                      Compétences
                    </h4>
                    <CompetenceTags ids={stage.competences} />
                  </div>
                </div>
              )}

              {stage.realisations && stage.realisations.length > 0 && (
                <div className="flex flex-col gap-3 border-t border-border pt-5">
                  <h4 className="font-mono text-xs text-muted-foreground uppercase">
                    Réalisations
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {stage.realisations.map((slug) => {
                      const realisation = getRealisation(slug);
                      if (!realisation) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/realisations/${slug}`}
                            className="group flex h-full flex-col gap-2 rounded-lg border border-border bg-background p-3 transition-colors hover:border-foreground/20"
                          >
                            <span className="flex items-start justify-between gap-2 text-sm leading-snug font-medium">
                              {realisation.title}
                              <ArrowRight
                                size={14}
                                className="mt-0.5 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand"
                              />
                            </span>
                            <CompetenceTags ids={realisation.competences} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </article>
          </Section>

          {/* Section pour le déroulé du stage */}
          {stage.weeks && (
            <Section
              title="Déroulé du stage"
              aside={`${stage.company} · semaine par semaine`}
            >
              <ol className="relative flex flex-col gap-8">
                <span
                  aria-hidden
                  className="absolute top-2 bottom-2 left-[17px] w-px bg-border"
                />
                {stage.weeks.map((week, index) => (
                  <li
                    key={week.period}
                    className="relative grid grid-cols-[36px_1fr] gap-4"
                  >
                    <span className="relative z-10 flex size-9 items-center justify-center rounded-lg border border-border bg-card font-dot text-sm font-black text-brand shadow-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-2 pt-1">
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="font-semibold tracking-tight">
                          {week.title}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {week.period}
                        </span>
                      </div>
                      <Bullets items={week.items} />
                    </div>
                  </li>
                ))}
              </ol>
            </Section>
          )}
        </Fragment>
      ))}

      {/* Section pour les expériences précédentes */}
      <Section title="Avant le BTS" aside="Stages du Bac Pro EDPI">
        <Timeline>
          {previousExperiences.map((experience) => (
            <TimelineItem
              key={experience.company}
              logo={experience.logo}
              title={experience.company}
              subtitle={experience.role}
              period={experience.period}
            >
              <Bullets items={experience.missions} />
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </>
  );
}
