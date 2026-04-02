import CheckoutPageClient from "./_CheckoutPageClient";

/**
 * Checkout is dynamic since it depends on the session and cart.
 * We wrap it in a Server Component just for Metadata management.
 */
export const metadata = {
  title: "Secure Checkout | Ghunghat — Bridal Ghunghat & Wedding Dupatta",
  description:
    "Complete your purchase of premium bridal ghunghat online securely. Fast delivery across India for your wedding day essentials.",
  alternates: {
    canonical: "/checkout",
  },
  openGraph: {
    title: "Secure Checkout | Ghunghat — Premium Bridal Wear",
    description: "Complete your wedding dupatta and bridal ghunghat purchase.",
    url: "https://ghunghat.com/checkout",
    type: "website",
  },
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
