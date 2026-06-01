import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  FileText,
  Shield,
  Briefcase,
  Landmark,
  Receipt,
  Plane,
  FileCheck,
  HeartHandshake,
  ShieldCheck,
  Users,
  Zap,
  Award,
  Star,
  MessageCircle,
  Phone,
  ClipboardList,
  FileSignature,
  BadgeCheck,
} from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import Image from "next/image";
import heroImg from "@/assets/hero.jpg";

export const metadata = {
  title: "Al Toufeer Business Services | Business Setup & PRO in Al Ain",
  description:
    "Business setup, visa, PRO, tax & government services in Al Ain. Fast processing, transparent pricing, expert UAE consultants.",
  openGraph: {
    title: "Al Toufeer Business Services | Al Ain, UAE",
    description: "Your complete business & government service partner in Al Ain.",
    url: "/",
  },
};

const services = [
  {
    icon: Building2,
    title: "Business Setup",
    desc: "Mainland LLC, trade license & company formation.",
  },
  { icon: Plane, title: "Visa Services", desc: "New, family, employment, visit & golden visas." },
  { icon: Briefcase, title: "PRO Services", desc: "Labor, immigration & government liaison." },
  {
    icon: Landmark,
    title: "Government Services",
    desc: "Municipality, MOHRE & legal documentation.",
  },
  { icon: Receipt, title: "Tax & VAT Services", desc: "VAT registration, filing & corporate tax." },
  {
    icon: FileCheck,
    title: "Document Clearing",
    desc: "Typing, attestation & translation services.",
  },
  { icon: HeartHandshake, title: "Family Insurance", desc: "Daman & medical insurance support." },
  {
    icon: ShieldCheck,
    title: "Corporate Services",
    desc: "End-to-end corporate compliance support.",
  },
];

const whyUs = [
  {
    icon: Award,
    title: "Professional Experts",
    desc: "Seasoned consultants with deep UAE expertise.",
  },
  { icon: Zap, title: "Quick Processing", desc: "Fast turnaround on all government procedures." },
  { icon: Shield, title: "Transparent Support", desc: "Honest pricing and clear communication." },
  { icon: Landmark, title: "Government Specialists", desc: "Direct liaison with UAE authorities." },
  {
    icon: Briefcase,
    title: "Corporate Solutions",
    desc: "Tailored services for businesses of every size.",
  },
  { icon: Users, title: "Trusted Local Partner", desc: "Proudly serving Al Ain and Abu Dhabi." },
];

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Contact Us",
    desc: "Reach out via call, WhatsApp, or our form.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Submit Documents",
    desc: "Share your documents securely with our team.",
  },
  {
    n: "03",
    icon: FileSignature,
    title: "Processing & Approvals",
    desc: "We handle approvals with UAE authorities.",
  },
  {
    n: "04",
    icon: BadgeCheck,
    title: "Service Completed",
    desc: "Receive your documents — fast and stress-free.",
  },
];

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    role: "Entrepreneur, Al Ain",
    text: "Al Toufeer made my business setup smooth and quick. Highly professional team!",
  },
  {
    name: "Priya Sharma",
    role: "Family Visa Applicant",
    text: "They handled my family visa with care and transparency. Best service in Al Ain.",
  },
  {
    name: "Mohammed Khan",
    role: "SME Owner",
    text: "Their PRO and tax team is exceptional. I trust them with all my company needs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src={heroImg}
          alt="Al Ain business skyline"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-7xl container-px py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Star className="h-3 w-3 fill-brand" /> Trusted in Al Ain · Abu Dhabi
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Trusted Business & Government Service Partner in{" "}
              <span className="text-brand">Al Ain</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Business Setup, Visa Services, Tax Solutions, Immigration, PRO Services, and
              Government Approvals — all under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-cta)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {["Fast Processing", "Expert Guidance", "Trusted Support", "UAE Compliance"].map(
                (f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Built on trust. Driven by results.
            </h2>
            <p className="mt-3 text-muted-foreground">
              We combine UAE expertise with fast execution to take the complexity out of business
              and government services.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--gradient-corporate)] text-white">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Our Services
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
                Comprehensive solutions for every need
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-elegant"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/5 transition-all group-hover:bg-brand/10" />
                <s.icon className="relative h-9 w-9 text-teal transition-colors group-hover:text-brand" />
                <h3 className="relative mt-4 font-display text-base font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              A simple four-step process
            </h2>
            <p className="mt-3 text-white/70">
              From the first call to final approval — we keep things clear and efficient.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="font-display text-5xl font-bold text-brand/40">{s.n}</span>
                <s.icon className="absolute right-6 top-6 h-6 w-6 text-brand" />
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              What our clients say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex gap-1 text-brand">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
