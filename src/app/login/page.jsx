import { AuthShell } from "@/components/auth/AuthShell";
import LoginPageContent from "./_LoginPageContent";

export const metadata = {
  title: "Sign In",
  description:
    "Sign in to your Ghunghat account to track orders, access your shade profile, and earn rewards.",
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Sign In | Ghunghat",
    description: "Welcome back to your curated beauty home.",
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
