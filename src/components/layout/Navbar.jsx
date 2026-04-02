"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

function ShoppingBagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  // Avoid SSR/client hydration mismatch: read cart only after mount
  const storeCount = useCartStore((s) => s.totalItems());
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(storeCount);
  }, [storeCount]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: scrolled ? "rgba(44, 10, 10, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184, 134, 11, 0.25)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
        transition:
          "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <button
          className="md:hidden"
          style={{ color: "#FFF8E7" }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="font-serif font-bold tracking-wider uppercase"
            style={{ color: "#B8860B", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            GHUNGHAT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest"
          style={{ color: "#FFF8E7" }}
        >
          {[
            { href: "/skincare", label: "Skincare" },
            { href: "/makeup", label: "Makeup" },
            { href: "/ayurvedic", label: "Ayurvedic" },
            { href: "/shade-finder", label: "Shade Finder" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group"
              style={{ color: "#FFF8E7" }}
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#B8860B" }}
              />
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6" style={{ color: "#FFF8E7" }}>
          <Link
            href="/account"
            className="hidden md:block hover:opacity-70 transition-opacity"
            style={{ color: "#FFF8E7" }}
            aria-label="Account"
          >
            <UserIcon />
          </Link>

          <Link
            href="/cart"
            className="relative hover:opacity-70 transition-opacity"
            style={{ color: "#FFF8E7" }}
            aria-label="Cart"
            suppressHydrationWarning
          >
            <ShoppingBagIcon />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  backgroundColor: "#8B0000",
                  color: "#fff",
                  fontFamily: "Arial",
                  fontSize: "10px",
                  fontWeight: "bold",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation:
                    "badgePop 0.25s cubic-bezier(0.175,0.885,0.32,1.275) both",
                }}
                suppressHydrationWarning
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
