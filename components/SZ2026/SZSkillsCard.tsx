"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SZSkillsCard({
  url,
  image,
  titre,
  color,
}: {
  url: string;
  image: string;
  titre: string;
  color: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      href={url}
      target="_blank"
      className="group relative bg-[#050505] border border-zinc-900 hover:border-zinc-700 transition-all duration-500 rounded-xl p-4 flex flex-col items-center justify-center aspect-square overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Effet de lueur (plus subtil) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 100px at ${pos.x}px ${pos.y}px, ${color}20, transparent 80%)`,
        }}
      />

      <div className="relative z-10 w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <Image
          src={image}
          alt={titre}
          width={40}
          height={40}
          className="grayscale group-hover:grayscale-0 transition-all duration-500 object-contain"
        />
      </div>

      <h2 className="mt-4 text-[11px] font-mono text-zinc-500 group-hover:text-white transition-colors duration-300 uppercase tracking-tighter z-10 text-center">
        {titre}
      </h2>
    </Link>
  );
}
