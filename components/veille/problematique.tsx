export default function Problematique({ question }: { question: string }) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <span
        aria-hidden
        className="font-dot text-5xl leading-[0.9] font-black text-brand sm:text-6xl"
      >
        ?
      </span>
      <p className="text-xl leading-snug font-medium tracking-tight text-balance">
        {question}
      </p>
    </div>
  );
}
