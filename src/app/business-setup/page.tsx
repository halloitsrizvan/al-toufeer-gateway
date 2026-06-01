import Link from "next/link";
import { CheckCircle2, TrendingUp, Globe2, ShieldCheck, Coins, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Business Setup in Al Ain & UAE | Al Toufeer",
  description:
    "Start your UAE business with confidence. Mainland LLC formation, trade license, and investor services in Al Ain.",
  openGraph: {
    title: "Business Setup in UAE",
    description: "Mainland LLC, trade license, and full company formation support.",
    url: "/business-setup",
  },
};

const benefits = [
  {
    icon: Globe2,
    title: "Strategic Location",
    desc: "Gateway between East and West with world-class infrastructure.",
  },
  {
    icon: Coins,
    title: "Tax Advantages",
    desc: "Attractive corporate tax structure and free zones.",
  },
  {
    icon: ShieldCheck,
    title: "Investor Protection",
    desc: "Strong legal framework and 100% foreign ownership options.",
  },
  {
    icon: TrendingUp,
    title: "Growing Economy",
    desc: "One of the world's most dynamic and diversified markets.",
  },
];

const docs = [
  "Valid passport copies",
  "Visa & Emirates ID copies",
  "Proposed trade name",
  "Business activity details",
  "NOC (if applicable)",
  "Initial approval forms",
];
const steps = [
  "Choose business activity & legal structure",
  "Reserve trade name & get initial approval",
  "Prepare MOA & lease agreement (Ejari)",
  "Submit documents & pay license fees",
  "Receive trade license & open bank account",
];

export default function BusinessSetupPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Setup"
        title="Launch your UAE business — the right way"
        subtitle="From idea to trade license, we guide you through every step of company formation in Al Ain and across the UAE."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-gradient-cta px-6 py-3 text-sm font-semibold text-white shadow-glow"
        >
          Get Free Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Why UAE</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Benefits of setting up in the UAE
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <b.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-display text-base font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 container-px lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-navy">Required Documents</h3>
            <p className="mt-2 text-sm text-muted-foreground">A typical mainland setup requires:</p>
            <ul className="mt-6 space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-corporate p-8 text-white shadow-elegant">
            <h3 className="font-display text-2xl font-bold">Formation Process</h3>
            <p className="mt-2 text-sm text-white/80">Our step-by-step process:</p>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-white/90">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
