function SZSection({
  title,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-900 pb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export { SZSection };
