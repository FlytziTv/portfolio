// Petites croix posées sur les rails du cadre, aux intersections avec les séparateurs
export default function Corners() {
  return (
    <>
      <Cross className="-top-[5.5px] -left-[5.5px]" />
      <Cross className="-top-[5.5px] -right-[5.5px]" />
    </>
  );
}

function Cross({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 11 11"
      className={`pointer-events-none absolute z-10 size-[11px] text-foreground/35 ${className}`}
    >
      <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
