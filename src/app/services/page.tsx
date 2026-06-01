import Link from "next/link";
import {
  Building2,
  Plane,
  Briefcase,
  Landmark,
  Receipt,
  FileCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Our Services | Al Toufeer Business Services",
  description:
    "Business setup, visa, PRO, tax, government, document, and insurance services in Al Ain, UAE.",
  openGraph: {
    title: "Services | Al Toufeer",
    description: "Complete UAE business and government services under one roof.",
    url: "/services",
  },
};

const categories = [
  {
    icon: Building2,
    title: "Business Setup",
    link: "/business-setup",
    items: [
      "Mainland Company Formation",
      "LLC Registration",
      "Trade License Assistance",
      "Business Consultation",
      "Investor Services",
    ],
  },
  {
    icon: Plane,
    title: "Visa Services",
    link: "/visa-services",
    items: [
      "New Visa",
      "Family Visa",
      "Visit Visa",
      "Employment Visa",
      "Visa Renewal",
      "Visa Cancellation",
    ],
  },
  {
    icon: Briefcase,
    title: "PRO Services",
    link: "/services",
    items: [
      "Labor Services",
      "Immigration Services",
      "License Renewal",
      "Government Liaison",
      "Emirates ID Services",
    ],
  },
  {
    icon: Receipt,
    title: "Tax Services",
    link: "/tax-services",
    items: ["VAT Registration", "VAT Filing", "Corporate Tax Services", "Tax Consultation"],
  },
  {
    icon: Landmark,
    title: "Government Services",
    link: "/services",
    items: [
      "Municipality Services",
      "MOHRE Services",
      "Immigration Services",
      "Legal Documentation",
    ],
  },
  {
    icon: FileCheck,
    title: "Document Services",
    link: "/services",
    items: ["Typing Services", "Document Clearing", "Attestation Services", "Translation Services"],
  },
  {
    icon: HeartHandshake,
    title: "Insurance Services",
    link: "/services",
    items: ["Family Insurance", "Daman Insurance", "Medical Insurance Support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your business needs"
        subtitle="From company formation to government approvals — we cover every step of your UAE journey."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 container-px md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-corporate text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{c.title}</h3>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                href={c.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors group-hover:text-brand"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
