import CartPageClient from "./_CartPageClient";

export const dynamic = "force-static";

export const metadata = {
  title: "Your Shopping Cart | Ghunghat — Buy Bridal Dupatta Online",
  description:
    "Review your selected wedding dupatta and bridal ghunghat before checkout. Quality assured traditional bridal wear.",
  alternates: {
    canonical: "/cart",
  },
  openGraph: {
    title: "Your Shopping Cart | Ghunghat — Buy Bridal Ghunghat",
    description: "Review your bridal collection items and wedding dupatta selection.",
    url: "https://ghunghat.com/cart",
    type: "website",
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
