"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <main className="relative z-10 w-full px-6 flex flex-col items-center gap-6 text-center">
        <div className=" flex flex-col items-center gap-4">
          <h1 className="text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase italic leading-[0.9] pr-4 pb-2">
            Alexis <br />
            <span className="bg-linear-to-b from-white to-zinc-600 bg-clip-text text-transparent pr-4 -mr-4">
              De Jesus
            </span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-base font-mono uppercase tracking-widest ">
            Developpeur Full Stack / BTS SIO SLAM
          </p>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <Link
            href="/e5"
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full border border-transparent text-sm font-bold transition-all hover:bg-zinc-200"
          >
            Voir mes projets
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full border border-zinc-800 bg-black text-white text-sm font-medium hover:bg-zinc-900 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </main>
    </div>
  );
}
