import Link from "next/link";

const footerlink = [
  { id: 1, title: "Accueil", url: "/" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Mentions Légales", url: "/legal" },
];

export default function SZFooter() {
  return (
    <footer className="w-full pt-8 border-t border-zinc-900 mt-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        {footerlink.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="text-xs font-mono text-zinc-600 hover:text-zinc-500 transition-colors uppercase tracking-widest"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
