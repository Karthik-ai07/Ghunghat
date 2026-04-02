import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://ghunghat.com"),
  title: "Buy Ghunghat Online India | Bridal Dupatta | GhunghatWithQuality",
  description:
    "Shop premium bridal ghunghat and wedding dupatta online. Traditional quality with modern designs. Free shipping across India. Buy ghunghat online at the best prices.",
  keywords: [
    "buy ghunghat online",
    "bridal ghunghat India",
    "wedding dupatta for bride",
    "buy designer bridal dupatta online",
    "heavy embroidered bridal veil",
    "wedding chunari for bride",
    "bridal head dupatta",
    "traditional Indian bridal ghunghat",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Buy Ghunghat Online India | GhunghatWithQuality",
    description:
      "Premium bridal ghunghat and wedding dupatta. Traditional quality with modern design. Buy ghunghat online today.",
    url: "https://ghunghat.com",
    siteName: "Ghunghat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ghunghat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ghunghat - Curated Bridal Wear. Royal Grace.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Ghunghat Online India | GhunghatWithQuality",
    description:
      "India's most trusted bridal ghunghat and wedding dupatta destination since 1986.",
    images: ["https://ghunghat.com/og-image.png"],
  },
  verification: {
    google: "google3f23f0593b34e847",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#FFF8E7] text-[#1A1A1A]">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
