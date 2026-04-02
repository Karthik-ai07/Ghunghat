import type { Metadata } from "next";
import CartPageClient from "./_CartPageClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "View and manage your curated selection of Ghunghat products before checkout.",
  alternates: {
    canonical: "/cart",
  },
  openGraph: {
    title: "Shopping Bag | Ghunghat",
    description: "Review your curated beauty selection.",
    url: "https://ghunghat.com/cart",
    type: "website",
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
