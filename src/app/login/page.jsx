import { AuthShell } from "@/components/auth/AuthShell";
import LoginPageContent from "./_LoginPageContent";

export const metadata = {
  title: "Log In | Ghunghat — Access Your Bridal Orders",
  description:
    "Sign in to your Ghunghat account to track your bridal ghunghat shipment, wedding dupatta orders, and bridal beauty profile.",
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Sign In | Ghunghat — Bridal Ghunghat Support",
    description: "Welcome back to your curated bridal and wedding collection home.",
    url: "https://ghunghat.com/login",
    type: "website",
  },
};

export default function LoginPage() {
  return (
    <AuthShell>
      <LoginPageContent />
    </AuthShell>
  );
}
