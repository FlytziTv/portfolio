import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SZProjectCard({
  name,
  url,
  pdf,
  description,
  image,
}: {
  name: string;
  url: string;
  pdf: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group flex flex-col gap-4 bg-[#050505] border border-zinc-900 rounded-xl p-4 hover:border-zinc-700 transition-all duration-500">
      <div className="aspect-video w-full relative overflow-hidden rounded-sm sticky-0">
        <Image
          src={image}
          alt={name}
          fill
          className="absolute rounded-sm object-cover group-hover:scale-105 transition-transform duration-600"
        />
      </div>
      <div className="flex flex-col justify-between w-full flex-1 gap-4 min-h-24">
        <div className="flex flex-col gap-1 items-start w-full ">
          <h2 className="text-base font-semibold text-[#FFFFFF]">{name}</h2>
          <p className="text-xs leading-relaxed text-zinc-400 font-light line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 ">
          {pdf !== "/" && (
            <Link
              href={pdf}
              target="_blank"
              className="text-xs px-3 py-1.5 rounded-sm bg-[#1a1a1a] text-[#a1a1a1] hover:text-[#FFFFFF] transition-colors duration-300 flex items-center gap-2"
            >
              Documentation
              <ArrowRight size={16} />
            </Link>
          )}
          {url !== "/" && (
            <Link
              href={url}
              target="_blank"
              className="text-xs px-3 py-1.5 rounded-sm bg-[#1a1a1a] text-[#a1a1a1] hover:text-[#FFFFFF] transition-colors duration-300 flex items-center gap-2"
            >
              Site Web
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export { SZProjectCard };
