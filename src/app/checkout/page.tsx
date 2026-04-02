import type { Metadata } from "next";
import CheckoutPageClient from "./_CheckoutPageClient";

/**
 * Checkout is dynamic since it depends on the session and cart.
 * We wrap it in a Server Component just for Metadata management.
 */
export const metadata: Metadata = {
  title: "Secure Checkout",
  description: "Complete your Ghunghat purchase securely. India's trusted beauty destination.",
  alternates: {
    canonical: "/checkout",
  },
  openGraph: {
    title: "Secure Checkout | Ghunghat",
    description: "Complete your premium beauty purchase.",
    url: "https://ghunghat.com/checkout",
    type: "website",
  },
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
