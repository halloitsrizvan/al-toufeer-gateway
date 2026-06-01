import { Receipt, Building, FileSpreadsheet, Calculator, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Tax & VAT Services in Al Ain | Corporate Tax | Al Toufeer",
  description:
    "VAT registration, VAT filing, corporate tax, accounting & compliance support in Al Ain, UAE.",
  openGraph: {
    title: "Tax & Corporate Services",
    description: "VAT, corporate tax, accounting and compliance support.",
    url: "/tax-services",
  },
};

const services = [
  {
    icon: Receipt,
    title: "VAT Registration",
    desc: "Get your business registered with the FTA quickly and correctly.",
  },
  {
    icon: FileSpreadsheet,
    title: "VAT Filing",
    desc: "Timely, accurate VAT returns to keep you fully compliant.",
  },
  {
    icon: Building,
    title: "Corporate Tax",
    desc: "Corporate tax registration and advisory under UAE law.",
  },
  {
    icon: Calculator,
    title: "Accounting Support",
    desc: "Bookkeeping and financial reporting for SMEs and corporates.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Assistance",
    desc: "Stay aligned with FTA and MOF requirements at all times.",
  },
];

export default function TaxPage() {
  return (
    <>
      <PageHero
        eyebrow="Tax & Corporate"
        title="Stay compliant. Stay confident."
        subtitle="VAT, corporate tax, and accounting expertise — built for UAE businesses."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--gradient-corporate)] text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
