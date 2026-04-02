import { AuthShell } from "@/components/auth/AuthShell";
import AccountPageContent from "./_AccountPageContent";

export const metadata = {
  title: "My Account",
  description: "Manage your Ghunghat account, orders, wishlist, and shade profile.",
  alternates: {
    canonical: "/account",
  },
  openGraph: {
    title: "My Account | Ghunghat",
    description: "Access your personalised beauty portal.",
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
