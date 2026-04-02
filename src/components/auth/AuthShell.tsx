"use client";
import { SessionProvider } from "next-auth/react";

/**
 * Thin client wrapper around SessionProvider.
 * Import this ONLY in pages that require session access
 * (account, login). Never add it to the root layout —
 * that would block SSG on all public pages.
 */
export function AuthShell({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
