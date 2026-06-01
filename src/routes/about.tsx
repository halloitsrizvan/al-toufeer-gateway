import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Shield, Zap, Users, Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Al Toufeer Business Services" },
      { name: "description", content: "Learn about Al Toufeer — a trusted business and government service provider in Al Ain, Abu Dhabi." },
      { property: "og:title", content: "About Al Toufeer" },
      { property: "og:description", content: "Trusted business and government services in Al Ain." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Trust", desc: "Building long-term client relationships through integrity." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing and honest communication, always." },
  { icon: Zap, title: "Efficiency", desc: "Fast processing without compromising on quality." },
  { icon: Award, title: "Professionalism", desc: "A team of certified UAE business experts." },
  { icon: Users, title: "Customer Focus", desc: "Tailored service to fit every client's unique needs." },
  { icon: Heart, title: "Care", desc: "We treat your business as if it were our own." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Trusted experts. Local roots." subtitle="A reliable partner for business, visa, tax, and government services across the UAE." />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 container-px lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Who we are</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">A complete service partner in Al Ain</h2>
            <p className="mt-5 text-muted-foreground">
              Al Toufeer Business Services is a trusted provider in Al Ain, Abu Dhabi, offering comprehensive business setup, visa, tax, immigration, and government support services. Our mission is to simplify the complex — through reliable guidance, fast processing, and professional support.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you're an entrepreneur launching your first venture, a family settling in the UAE, or a corporation scaling operations, our experienced consultants make every step seamless.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--gradient-corporate)] p-6 text-white shadow-elegant">
              <Target className="h-8 w-8 text-brand" />
              <h3 className="mt-4 font-display text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-sm text-white/85">To simplify government, corporate, visa, tax, and business-related procedures through reliable guidance and professional support.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <Eye className="h-8 w-8 text-teal" />
              <h3 className="mt-4 font-display text-xl font-bold text-navy">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">To become the preferred business service provider in the UAE through excellence, reliability, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Core Values</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">What guides our work</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
