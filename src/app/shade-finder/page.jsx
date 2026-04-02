import ShadeFinderPageClient from "./_ShadeFinderPageClient";

export const metadata = {
  title: "Shade Finder | Ghunghat — Matching Bridal Ghunghat Colors",
  description:
    "Find the perfect bridal makeup shade to match your wedding lehenga and bridal ghunghat. Ghunghat's AI-powered matching tool.",
  alternates: {
    canonical: "/shade-finder",
  },
  openGraph: {
    title: "Shade Finder | Ghunghat — Bridal Matching",
    description: "Find your perfect wedding day beauty match in 60 seconds.",
    url: "https://ghunghat.com/shade-finder",
    type: "website",
  },
};

export default function ShadeFinderPage() {
  return <ShadeFinderPageClient />;
}
