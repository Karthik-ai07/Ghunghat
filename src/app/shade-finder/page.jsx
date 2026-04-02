import ShadeFinderPageClient from "./_ShadeFinderPageClient";

export const metadata = {
  title: "Bridal Shade Finder | Buy Ghunghat Online India",
  description:
    "Ghunghat's 3-step AI bridal shade finder matches your skin to the perfect traditional ghunghat beauty routine in under 60 seconds. Quality assured.",
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
