import ShadeFinderPageClient from "./_ShadeFinderPageClient";

export const metadata = {
  title: "Shade Finder",
  description:
    "Ghunghat's 3-step AI beauty consultation matches products to your exact skin undertone, depth, and finish preference in under 60 seconds.",
  alternates: {
    canonical: "/shade-finder",
  },
  openGraph: {
    title: "Shade Finder | Ghunghat",
    description: "Find your perfect beauty match in 60 seconds.",
    url: "https://ghunghat.com/shade-finder",
    type: "website",
  },
};

export default function ShadeFinderPage() {
  return <ShadeFinderPageClient />;
}
