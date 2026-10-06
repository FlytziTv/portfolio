import { ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Corners from "@/components/page/corners";
import Eyebrow from "@/components/page/eyebrow";
import Section from "@/components/page/section";
import { TechTag } from "@/components/page/tag";
import RealisationCard from "@/components/realisations/realisation-card";
import { Button } from "@/components/ui/button";
import { certifications, skills } from "@/data/parcours";
import { profile, socials, tableauSynthesePdf } from "@/data/profile";
import { realisations } from "@/data/realisations";
import { veilleArticles } from "@/data/veille";

export default function Home() {
  const featured = realisations.filter((r) => r.featured);

  const stats = [
    { value: realisations.length, label: "Réalisations" },
    {
      value: realisations.filter((r) => r.category === "e5").length,
      label: "TP du bloc 1",
    },
    { value: veilleArticles.length, label: "Articles de veille" },
    { value: certifications.length, label: "Certifications" },
  ];

  // Technologies principales mises en avant
  const stack = skills
    .filter((group) => group.label !== "CAO")
    .flatMap((group) => group.items)
    .slice(0, 22);

  return (
    <>
      {/* Présentation */}
      <section className="relative isolate overflow-hidden px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-24">
        <div aria-hidden className="bg-grid mask-fade absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -z-10 h-64 w-xl -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />

        <div className="flex flex-row items-start justify-between gap-8">
          {/* Informations */}
          <div className="flex flex-col gap-7">
            {/* Nom et titre */}
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl font-semibold tracking-tighter sm:text-7xl">
                {profile.fullName}
              </h1>
              <p className="text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl">
                Développeur d’applications{" "}
                <span className="text-foreground">— BTS SIO SLAM</span>
              </p>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              Étudiant en deuxième année à {profile.school}. {profile.tagline}
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button asChild size="lg" className="h-10 rounded-full px-4">
                <Link href="/realisations">
                  Voir mes réalisations
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-10 rounded-full px-4"
              >
                <a href={profile.cv} target="_blank" rel="noopener noreferrer">
                  <Download data-icon="inline-start" />
                  Télécharger mon CV
                </a>
              </Button>

              {/* Tableau de synthèse s'affiche si disponible */}
              {tableauSynthesePdf && (
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10 rounded-full px-4"
                >
                  <a
                    href={tableauSynthesePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tableau de synthèse E5
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
              )}
            </div>

            {/* Informations de contact */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} /> {profile.location}
              </span>

              {/* Réseaux sociaux */}
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    {...(social.url.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Icon size={13} />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Image de profil et statut */}
          <div className="flex items-center gap-4 relative">
            <Image
              src={profile.avatar}
              alt={`Portrait de ${profile.fullName}`}
              width={160}
              height={160}
              priority
              className="size-40 rounded-full border border-border shadow-sm"
            />
            <Eyebrow color="#10b981" className="absolute -bottom-2 -left-2">
              Disponible
            </Eyebrow>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <dl className="relative grid grid-cols-2 border-t border-border md:grid-cols-4">
        <Corners />
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse gap-1 px-5 py-8 sm:px-8 ${index % 2 === 1 ? "border-l border-border" : ""} ${
              index > 1 ? "border-t border-border md:border-t-0" : ""
            } ${index === 2 ? "md:border-l" : ""}`}
          >
            <dt className="font-mono text-xs text-muted-foreground uppercase">
              {stat.label}
            </dt>
            <dd className="font-dot text-5xl leading-none font-black text-foreground">
              {String(stat.value).padStart(2, "0")}
            </dd>
          </div>
        ))}
      </dl>

      {/* a mettre un sommaire */}

      {/* Réalisations à la une */}
      <Section
        title="Réalisations à la une"
        aside="Une sélection parmi mes travaux documentés."
        action={
          <Button asChild variant="outline" className="rounded-full px-3.5">
            <Link href="/realisations">
              Tout voir
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      >
        {/* Liste des réalisations */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((realisation) => (
            <RealisationCard key={realisation.slug} realisation={realisation} />
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section
        title="Stack"
        aside="Les technologies que j’utilise au quotidien."
      >
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </Section>
    </>
  );
}
