import Link from "next/link";
import { Download } from "lucide-react";
import { Logo } from "@/components/icons/icon";
import { profile } from "@/data/profile";

export default function TopBar() {
  return (
    <div className="flex h-14 items-center justify-between border-b border-border px-5 sm:px-8">
      <Link href="/" className="flex items-center gap-2.5 text-sm font-medium">
        <Logo size={16} />
        {profile.fullName}
      </Link>

      <div className="flex items-center gap-4">
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs font-medium shadow-xs transition-colors hover:bg-muted"
        >
          <Download size={13} />
          CV
        </a>
      </div>
    </div>
  );
}
