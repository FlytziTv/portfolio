import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/icons/icon";
import { navigation, profile, socials } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="grid gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div className="flex flex-col gap-3">
          <Logo size={20} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {profile.role}
            <br />
            {profile.school} · {profile.location}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-muted-foreground uppercase">Pages</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-muted-foreground uppercase">Contact</p>
          <ul className="flex flex-col gap-1.5 text-sm">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  {...(social.url.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
                >
                  {social.name}
                  <ArrowUpRight size={13} className="text-muted-foreground transition group-hover:text-brand" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marge basse pour ne pas être masqué par la barre flottante */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 pt-5 pb-24 font-mono text-xs text-muted-foreground sm:px-8">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <Link href="/mentions-legales" className="transition-colors hover:text-foreground">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
