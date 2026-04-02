import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://ghunghat.com"),
  title: {
    default: "Ghunghat | Curated Beauty. Royal Grace.",
    template: "%s | Ghunghat",
  },
  description:
    "India's most trusted curated beauty destination since 1986. Quality over Quantity. Shop skincare, makeup & ayurvedic products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ghunghat | Curated Beauty. Royal Grace.",
    description: "India's most trusted curated beauty destination since 1986.",
    url: "https://ghunghat.com",
    siteName: "Ghunghat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ghunghat Beauty Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghunghat | Curated Beauty. Royal Grace.",
    description: "India's most trusted curated beauty destination since 1986.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google3f23f0593b34e847",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#FFF8E7] text-[#1A1A1A]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
