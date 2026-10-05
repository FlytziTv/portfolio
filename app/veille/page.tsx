import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/page/page-header";
import Section from "@/components/page/section";
import Tag from "@/components/page/tag";
import Problematique from "@/components/veille/problematique";
import {
  veille,
  veilleArticles,
  veilleConclusion,
  veilleSources,
  veilleSynthese,
  veilleTools,
} from "@/data/veille";

export const metadata: Metadata = { title: "Veille technologique" };

export default function Veille() {
  return (
    <>
      {/* Section pour le header de la page */}
      <PageHeader
        eyebrow="05 — Veille technologique"
        title={veille.title}
        description="Une veille menée tout au long de ma formation sur l’évolution du Raspberry Pi et ce qu’elle change pour un développeur d’applications."
      />

      <Section
        title="Problématique"
        aside="Identifier les évolutions du Raspberry Pi et leurs impacts pour un développeur d’applications (C6)."
      >
        <Problematique question={veille.problematique} />
      </Section>

      <Section
        title="Pourquoi ce sujet"
        aside="Justification de la sélection de ce sujet pour la veille technologique."
      >
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          {veille.why.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section title="Méthode" aside="Organiser sa veille informationnelle .">
        <div className="flex flex-col gap-8">
          {/* Outils utilisés pour la veille */}
          <div className="grid gap-3 sm:grid-cols-3">
            {veilleTools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4 shadow-xs"
              >
                <p className="font-semibold tracking-tight">{tool.name}</p>
                <p className="text-sm text-muted-foreground">{tool.role}</p>
              </div>
            ))}
          </div>

          {/* Sources suivies pour la veille */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs text-muted-foreground uppercase">
              Sources suivies
            </h3>
            <div className="flex flex-wrap gap-2">
              {veilleSources.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm shadow-xs transition-colors hover:border-foreground/20"
                >
                  {source.name}
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {source.type}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Chronologie"
        aside={`${veilleArticles.length} articles, du plus récent au plus ancien.`}
      >
        <ol className="relative flex flex-col gap-8">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[5px] w-px bg-border"
          />
          {veilleArticles.map((article) => (
            <li
              key={article.url}
              className="relative grid grid-cols-[11px_1fr] gap-5"
            >
              <span className="relative z-10 mt-1.5 size-[11px] rounded-full border-2 border-brand bg-background" />
              <article className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <time className="font-mono text-xs text-muted-foreground">
                    {article.date}
                  </time>
                  <Tag variant="outline">{article.tag}</Tag>
                </div>
                <h3 className="font-semibold tracking-tight">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
                >
                  {article.source}
                  <ArrowUpRight size={13} />
                </a>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="analyse" title="Analyse">
        <div className="grid gap-3 sm:grid-cols-2">
          {veilleSynthese.map((point, index) => (
            <article
              key={point.title}
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-xs"
            >
              <span className="font-dot text-2xl font-black text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold tracking-tight">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Conclusion"
        aside="Synthèse de la veille et perspectives pour un développeur d’applications."
      >
        <p className="text-md leading-relaxed font-medium tracking-tight">
          {veilleConclusion}
        </p>
      </Section>
    </>
  );
}
