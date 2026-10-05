import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FileText, Globe, Lock } from "lucide-react";
import { Github } from "@/components/icons/github";
import Corners from "@/components/page/corners";
import Eyebrow from "@/components/page/eyebrow";
import Tag, { TechTag } from "@/components/page/tag";
import { Bullets } from "@/components/page/timeline";
import { Button } from "@/components/ui/button";
import { competenceById } from "@/data/bts";
import {
  categoryLabel,
  getRealisation,
  realisations,
} from "@/data/realisations";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const realisation = getRealisation((await params).slug);
  return realisation
    ? { title: realisation.title, description: realisation.summary }
    : {};
}

export default async function RealisationPage({ params }: Props) {
  const { slug } = await params;
  const realisation = getRealisation(slug);
  if (!realisation) notFound();

  const index = realisations.indexOf(realisation);
  const previous = realisations[index - 1];
  const next = realisations[index + 1];

  const meta = [
    { label: "Contexte", value: realisation.context },
    { label: "Période", value: realisation.date },
    { label: "Durée", value: realisation.duration },
    { label: "Équipe", value: realisation.team ?? "Individuel" },
    { label: "Statut", value: realisation.status },
  ].filter((item) => item.value);

  const { doc, github, site } = realisation.links;

  return (
    <>
      {/* En-tête : titre à gauche, description à droite (façon louisdescotes) */}
      <header className="relative isolate overflow-hidden px-5 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16">
        <div aria-hidden className="bg-grid mask-fade absolute inset-0 -z-10" />
        <Link
          href={`/realisations?categorie=${realisation.category}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> Toutes les réalisations
        </Link>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{categoryLabel(realisation.category)}</Eyebrow>
            <h1 className="text-4xl font-semibold tracking-tighter text-balance sm:text-5xl">
              {realisation.title}
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              {realisation.summary}
            </p>
            {(doc || github || site) && (
              <div className="flex flex-wrap gap-2">
                {doc && (
                  <Button asChild size="lg">
                    <a href={doc} target="_blank" rel="noopener noreferrer">
                      <FileText data-icon="inline-start" />
                      Documentation
                    </a>
                  </Button>
                )}
                {github && (
                  <Button asChild size="lg" variant="outline">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      Code source
                    </a>
                  </Button>
                )}
                {site && (
                  <Button asChild size="lg" variant="outline">
                    <a href={site} target="_blank" rel="noopener noreferrer">
                      <Globe data-icon="inline-start" />
                      Site en ligne
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Projet client : pas de captures */}
      {realisation.confidential && realisation.images.length === 0 && (
        <div className="relative border-t border-border px-5 py-8 sm:px-8 sm:py-10">
          <Corners />
          <div className="bg-dots flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-muted/60 px-6 py-14 text-center">
            <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-xs">
              <Lock size={18} />
            </span>
            <p className="font-semibold tracking-tight">
              Projet client confidentiel
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Réalisée en entreprise, cette mission concerne des projets clients
              : les captures, les noms et les détails internes ne sont pas
              diffusés. Seuls la démarche et les technologies employées sont
              présentées.
            </p>
          </div>
        </div>
      )}

      {/* Visuels présentés dans un grand cadre */}
      {realisation.images.length > 0 && (
        <div className="relative flex flex-col gap-4 border-t border-border px-5 py-8 sm:px-8 sm:py-10">
          <Corners />
          <div className="bg-dots rounded-2xl border border-border bg-muted/60 p-4 sm:p-10">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-black/15">
              <Image
                src={realisation.images[0]}
                alt={`Capture — ${realisation.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover object-top"
              />
            </div>
          </div>
          {realisation.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {realisation.images.slice(1).map((image) => (
                <div
                  key={image}
                  className="bg-dots rounded-2xl border border-border bg-muted/60 p-3 sm:p-6"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-card shadow-xl shadow-black/10">
                    <Image
                      src={image}
                      alt={`Capture — ${realisation.title}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 480px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Fiche */}
      <div className="relative grid gap-10 border-t border-border px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[220px_1fr] md:gap-12">
        <Corners />
        <aside className="flex flex-col gap-6 md:sticky md:top-6 md:self-start">
          <dl className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-xs">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5 px-4 py-3">
                <dt className="font-mono text-[11px] text-muted-foreground uppercase">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[11px] text-muted-foreground uppercase">
              Environnement
            </p>
            <div className="flex flex-wrap gap-1.5">
              {realisation.environment.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col gap-12">
          <Block title="Objectifs">
            <Bullets items={realisation.objectives} muted={false} />
          </Block>

          {realisation.steps && (
            <Block title="Démarche">
              <ol className="flex flex-col">
                {realisation.steps.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-4 border-b border-border py-3.5 text-sm leading-relaxed first:pt-0 last:border-0"
                  >
                    <span className="w-6 shrink-0 font-dot text-base leading-5 font-black text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {realisation.difficulties && (
            <Block title="Difficultés rencontrées">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-muted/50 font-mono text-[11px] text-muted-foreground uppercase">
                    <tr>
                      <th scope="col" className="w-1/2 px-4 py-2.5 font-normal">
                        Problème
                      </th>
                      <th scope="col" className="px-4 py-2.5 font-normal">
                        Solution
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {realisation.difficulties.map((d) => (
                      <tr key={d.problem}>
                        <td className="px-4 py-3 align-top">{d.problem}</td>
                        <td className="px-4 py-3 align-top text-muted-foreground">
                          {d.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
          )}

          {realisation.results && (
            <Block title="Résultats">
              <Bullets items={realisation.results} muted={false} />
            </Block>
          )}

          {realisation.competences.length > 0 && (
            <Block title="Compétences mobilisées">
              <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-xs">
                {realisation.competences.map((id) => (
                  <li key={id} className="flex items-center gap-3 px-4 py-3">
                    <Tag variant="brand" className="font-mono">
                      {id}
                    </Tag>
                    <span className="text-sm">{competenceById(id).title}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>
      </div>

      {/* Navigation entre fiches */}
      <nav
        aria-label="Réalisations voisines"
        className="relative grid grid-cols-2 border-t border-border"
      >
        <Corners />
        {previous ? (
          <Link
            href={`/realisations/${previous.slug}`}
            className="group flex flex-col gap-1 px-5 py-6 transition-colors hover:bg-muted/50 sm:px-8"
          >
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground uppercase">
              <ArrowLeft size={12} /> Précédente
            </span>
            <span className="text-sm font-medium tracking-tight sm:text-base">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/realisations/${next.slug}`}
            className="group flex flex-col items-end gap-1 border-l border-border px-5 py-6 text-right transition-colors hover:bg-muted/50 sm:px-8"
          >
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground uppercase">
              Suivante <ArrowRight size={12} />
            </span>
            <span className="text-sm font-medium tracking-tight sm:text-base">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
