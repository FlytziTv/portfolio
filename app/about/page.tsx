import { about_xp } from "@/data/about";
import { ArrowUpRight } from "lucide-react";
import { SZSection } from "@/components/SZ2026/SZSection";
import Link from "next/link";
import SZFooter from "@/components/SZ2026/SZFooter";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-[#888] font-sans">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-14">
        <section className="flex flex-col gap-6">
          <div className="space-y-1">
            <h1 className="text-white text-3xl tracking-tight uppercase italic font-bold">
              Alexis De Jesus
            </h1>
            <p className="text-sm font-mono tracking-tighter uppercase text-zinc-500 italic">
              BTS SIO SLAM / Developpeur Fullstack
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium">
            <Link
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alexis-dejesus/"
              className="text-white hover:text-[#888] transition flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight size={12} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://github.com/flytzitv"
              className="text-white hover:text-[#888] transition flex items-center gap-1"
            >
              GitHub <ArrowUpRight size={12} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/files/CV_Alexis_De_Jesus.pdf"
              className="text-white hover:text-[#888] transition underline underline-offset-4"
            >
              CV.pdf
            </Link>
          </div>
        </section>

        <section className=" text-base leading-relaxed space-y-2">
          <p className="text-white">
            J&apos;ai 20 ans et je suis basé à Paris.
          </p>
          <p>
            Actuellement en première année de BTS SIO (SLAM), je me concentre
            sur la création d&apos;applications web performantes avec Next.js et
            TypeScript. Mon approche privilégie la clarté du code et
            l&apos;efficacité des interfaces.
          </p>
        </section>

        <div className="space-y-16">
          <SZSection title="Expériences">
            <div className="space-y-8">
              {about_xp.works.map((work) => (
                <div key={work.id} className="relative group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0">
                    <h3 className="text-white text-sm font-medium">
                      {work.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {work.date}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    <Link
                      rel="noopener noreferrer"
                      href={work.link}
                      className="hover:text-white/70 transition-colors duration-200 "
                    >
                      {work.entreprise}
                    </Link>{" "}
                    - {work.type}
                  </p>
                </div>
              ))}
            </div>
          </SZSection>

          <SZSection title="Études">
            <div className="space-y-8">
              {about_xp.studs.map((stud) => (
                <div key={stud.id} className="relative group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0">
                    <h3 className="text-white text-sm font-medium">
                      {stud.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {stud.date}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    <Link
                      rel="noopener noreferrer"
                      href={stud.link}
                      className="hover:text-white/70 transition-colors duration-200 "
                    >
                      {stud.entreprise}
                    </Link>{" "}
                    - {stud.type}
                  </p>
                </div>
              ))}
            </div>
          </SZSection>
        </div>

        <SZFooter />
      </main>
    </div>
  );
};

export default AboutPage;
