import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 container-px py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image 
              src={logoImg} 
              alt="Al Toufeer Logo" 
              className="h-10 w-auto object-contain" 
            />
            <div className="leading-tight">
              <div className="font-display text-base font-bold">Al Toufeer</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Business Services
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Your complete business and government service partner in Al Ain. Trusted by
            entrepreneurs, families, and corporations across the UAE.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/business-setup" className="hover:text-white">
                Business Setup
              </Link>
            </li>
            <li>
              <Link href="/visa-services" className="hover:text-white">
                Visa Services
              </Link>
            </li>
            <li>
              <Link href="/tax-services" className="hover:text-white">
                Tax & VAT
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                PRO Services
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Government Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Al Ain, Abu Dhabi, UAE
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" /> +971 50 776 9415
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" /> info@altoufeer.ae
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Sat–Thu, 9:00 AM – 9:00 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 container-px py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Al Toufeer Business Services. All rights reserved.</p>
          <p>Al Ain · Abu Dhabi · United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
