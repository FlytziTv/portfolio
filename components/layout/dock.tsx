"use client";

import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  Radar,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons/icon";
import ThemeToggle from "@/components/layout/theme-toggle";
import { navigation } from "@/data/profile";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "/parcours": UserRound,
  "/bts-sio": GraduationCap,
  "/stages": Briefcase,
  "/realisations": FolderGit2,
  "/veille": Radar,
  "/contact": Mail,
};

// Barre de navigation flottante en bas de l’écran (signature de l’ancienne version)
export default function Dock() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-border bg-card/85 p-1.5 shadow-lg shadow-black/5 backdrop-blur-xl"
    >
      <Link
        href="/"
        title="Accueil"
        aria-label="Accueil"
        className={cn(
          "flex size-8 items-center justify-center rounded-full transition-colors hover:bg-muted",
          pathname === "/" && "bg-muted",
        )}
      >
        <Logo size={15} />
      </Link>

      <span className="mx-1 h-5 w-px bg-border" aria-hidden />

      {navigation.map((item) => {
        const Icon = icons[item.href];
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.label}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex h-8 items-center gap-2 rounded-full px-2.5 text-[13px] whitespace-nowrap transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon size={14} />
            {/* Libellé visible sur grand écran, ou pour la page active sur tablette */}
            <span className={cn("hidden lg:inline", active && "md:inline")}>
              {item.label}
            </span>
          </Link>
        );
      })}

      <span className="mx-1 h-5 w-px bg-border" aria-hidden />
      <ThemeToggle />
    </nav>
  );
}
