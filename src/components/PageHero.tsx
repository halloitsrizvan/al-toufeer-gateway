import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-corporate)] py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(246,139,0,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,140,149,0.35), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center container-px">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
