import { createFileRoute } from "@tanstack/react-router";
import { Plane, Users, Briefcase, RefreshCw, X, Crown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/visa-services")({
  head: () => ({
    meta: [
      { title: "Visa Services in Al Ain | Family, Employment, Golden Visa" },
      { name: "description", content: "New visas, family visa, renewal, cancellation, and Golden Visa assistance in Al Ain, UAE." },
      { property: "og:title", content: "Visa Services | Al Toufeer" },
      { property: "og:description", content: "All types of UAE visa services with fast processing." },
      { property: "og:url", content: "/visa-services" },
    ],
    links: [{ rel: "canonical", href: "/visa-services" }],
  }),
  component: VisaPage,
});

const visas = [
  { icon: Plane, title: "New Visa", desc: "Fresh visa applications for residents and investors." },
  { icon: Users, title: "Family Visa", desc: "Bring your spouse, children, and parents to the UAE." },
  { icon: Briefcase, title: "Employment Visa", desc: "Sponsor staff with full MOHRE & immigration support." },
  { icon: RefreshCw, title: "Visa Renewal", desc: "Hassle-free renewal before your visa expires." },
  { icon: X, title: "Visa Cancellation", desc: "Proper cancellation to avoid future complications." },
  { icon: Crown, title: "Golden Visa Assistance", desc: "10-year residency for investors and talent." },
];

const faqs = [
  { q: "How long does a family visa take?", a: "Typically 5–10 working days once all documents are submitted and medical/Emirates ID processing is complete." },
  { q: "What documents do I need for a new visa?", a: "Passport, photo, entry permit, medical fitness certificate, Emirates ID application, and sponsor documents." },
  { q: "Can I work while my visa is being processed?", a: "Only after your visa is stamped and Emirates ID is issued. We help speed up the entire process." },
  { q: "What is the Golden Visa?", a: "A long-term (5 or 10 year) UAE residency for investors, entrepreneurs, specialists, and exceptional talents." },
];

function VisaPage() {
  return (
    <>
      <PageHero eyebrow="Visa Services" title="Every UAE visa, handled with care" subtitle="From family and employment visas to Golden Visa assistance — we make immigration simple." />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 container-px md:grid-cols-2 lg:grid-cols-3">
          {visas.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl container-px">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-6 shadow-soft">
                <summary className="cursor-pointer list-none font-display text-base font-semibold text-navy marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-teal transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
