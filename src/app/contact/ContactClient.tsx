"use client";

import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  mobile: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().trim().min(1, "Select a service"),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const services = [
  "Business Setup",
  "Visa Services",
  "PRO Services",
  "Tax & VAT",
  "Government Services",
  "Document Clearing",
  "Insurance",
  "Other",
];

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = formSchema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        subtitle="Reach our team in Al Ain — by call, WhatsApp, or message. We respond fast."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 container-px lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
              <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill the form and our consultants will get back within one business day.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center rounded-xl bg-teal/10 p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-teal" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for contacting Al Toufeer. We'll reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="name" error={errors.name} />
                  <Field label="Mobile Number" name="mobile" type="tel" error={errors.mobile} />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    error={errors.email}
                    className="sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Service Required
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      maxLength={1000}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-cta px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl bg-gradient-corporate p-7 text-white shadow-elegant">
              <h3 className="font-display text-xl font-bold">Quick Contact</h3>
              <div className="mt-5 space-y-4 text-sm">
                <Row icon={MapPin} title="Visit Us" value="Al Ain, Abu Dhabi, UAE" />
                <Row
                  icon={Phone}
                  title="Call Us"
                  value="+971 50 776 9415"
                  href="tel:+971507769415"
                />
                <Row
                  icon={Mail}
                  title="Email Us"
                  value="info@altoufeer.ae"
                  href="mailto:info@altoufeer.ae"
                />
                <Row icon={Clock} title="Business Hours" value="Sat–Thu, 9:00 AM – 9:00 PM" />
              </div>
              <a
                href="https://wa.me/971507769415"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Al Toufeer location"
                src="https://www.google.com/maps?q=Al+Ain,+UAE&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-navy">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Row({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/60">{title}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-90">
      {inner}
    </a>
  ) : (
    inner
  );
}
