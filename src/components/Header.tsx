import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/business-setup", label: "Business Setup" },
  { to: "/visa-services", label: "Visa" },
  { to: "/tax-services", label: "Tax" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between container-px">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-corporate)] font-display text-lg font-bold text-white shadow-soft">
            AT
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-navy">Al Toufeer</div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Business Services</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-teal bg-secondary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-teal"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+971500000000" className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal">
            <Phone className="h-4 w-4" /> Call Us
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-[var(--gradient-cta)] px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            Free Consultation
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 container-px py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-teal bg-secondary" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[var(--gradient-cta)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
