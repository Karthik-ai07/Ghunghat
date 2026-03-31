import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "waiting-for-keys",
      clientSecret: process.env.GOOGLE_SECRET || "waiting-for-keys",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "ghunghat_dummy_secret_for_local_development",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        // You can attach custom data here if needed later
      }
      return session;
    },
  },
};
