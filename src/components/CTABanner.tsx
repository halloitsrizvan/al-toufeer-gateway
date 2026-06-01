import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-corporate)] py-20">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center container-px">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Need Help With UAE Business or Government Services?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Get expert assistance from Al Toufeer today. Free consultation, transparent pricing, fast
          processing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-cta)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
