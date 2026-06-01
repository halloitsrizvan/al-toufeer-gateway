import ContactClient from "@/app/contact/ContactClient";

export const metadata = {
  title: "Contact Al Toufeer | Business Services in Al Ain",
  description:
    "Get in touch with Al Toufeer Business Services in Al Ain. Free consultation via call, WhatsApp, or form.",
  openGraph: {
    title: "Contact Al Toufeer",
    description: "Reach our team in Al Ain for business, visa, tax, and PRO services.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
