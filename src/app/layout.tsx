import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Al Toufeer Business Services | Al Ain, UAE",
  description:
    "Trusted business setup, visa, PRO, tax, and government services in Al Ain, Abu Dhabi. Fast processing, expert guidance.",
  authors: [{ name: "Al Toufeer Business Services" }],
  openGraph: {
    title: "Al Toufeer Business Services | Al Ain",
    description: "Your complete business & government service partner in Al Ain, UAE.",
    type: "website",
    siteName: "Al Toufeer",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </Providers>
      </body>
    </html>
  );
}
