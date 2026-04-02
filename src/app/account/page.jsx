import { AuthShell } from "@/components/auth/AuthShell";
import AccountPageContent from "./_AccountPageContent";

export const metadata = {
  title: "My Account | Ghunghat — Buy Bridal Ghunghat Online",
  description:
    "Manage your bridal ghunghat orders, wedding dupatta wishlist, and customized account details at GhunghatWithQuality.",
  alternates: {
    canonical: "/account",
  },
  openGraph: {
    title: "My Account | Ghunghat — Bridal Ghunghat & Wedding Dupatta",
    description: "Manage your premium bridal orders and wedding collection wishlist.",
    url: "https://ghunghat.com/account",
    type: "website",
  },
};

export default function AccountPage() {
  return (
    <AuthShell>
      <AccountPageContent />
    </AuthShell>
  );
}
