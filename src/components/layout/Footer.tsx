"use client";
import React from "react";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#050101", borderTop: "1px solid rgba(184,134,11,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand column */}
          <div>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "1.75rem", fontWeight: "bold", color: "#B8860B", letterSpacing: "0.15em", textTransform: "uppercase" }}>GHUNGHAT</span>
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(255,248,231,0.35)", margin: "0.5rem 0 1.25rem", lineHeight: 1.6 }}>
              Your Satisfaction is Our Mission
            </p>
            {/* Address */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", color: "rgba(255,248,231,0.4)" }}>
              <PinIcon />
              <address style={{ fontFamily: "Arial", fontSize: "0.78rem", color: "rgba(255,248,231,0.4)", lineHeight: 1.7, fontStyle: "normal" }}>
                Shop no. 58, SuperMarket<br />
                PNT Colony, Raebareli<br />
                Uttar Pradesh — 229001
              </address>
            </div>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              {[
                { href: "https://instagram.com", Icon: InstagramIcon, label: "Instagram" },
                { href: "https://wa.me/91XXXXXXXXXX", Icon: WhatsAppIcon, label: "WhatsApp" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(184,134,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,248,231,0.4)", transition: "all 0.2s" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontFamily: "Arial", fontSize: "0.65rem", color: "#B8860B", letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Shop</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { href: "/skincare", label: "Skincare" },
                { href: "/makeup", label: "Makeup" },
                { href: "/ayurvedic", label: "Ayurvedic" },
                { href: "/gifting", label: "Gift Sets" },
                { href: "/shade-finder", label: "Shade Finder" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontFamily: "Arial", fontSize: "0.82rem", color: "rgba(255,248,231,0.4)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.03em" }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div>
            <h4 style={{ fontFamily: "Arial", fontSize: "0.65rem", color: "#B8860B", letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Help</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { href: "/faq", label: "FAQs" },
                { href: "/shipping", label: "Shipping & Returns" },
                { href: "/contact", label: "Contact Us" },
                { href: "/account", label: "My Account" },
                { href: "/account/orders", label: "Track Order" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontFamily: "Arial", fontSize: "0.82rem", color: "rgba(255,248,231,0.4)", textDecoration: "none", transition: "color 0.2s" }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Trust badges */}
          <div>
            <h4 style={{ fontFamily: "Arial", fontSize: "0.65rem", color: "#B8860B", letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Why Ghunghat</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "🔬", label: "Lab-Certified Quality" },
                { icon: "🚚", label: "Free Delivery ₹499+" },
                { icon: "🔒", label: "Secure Checkout" },
                { icon: "↩️", label: "7-Day Easy Returns" },
                { icon: "💬", label: "COD Available" },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.9rem" }}>{icon}</span>
                  <span style={{ fontFamily: "Arial", fontSize: "0.78rem", color: "rgba(255,248,231,0.35)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(to right, transparent, rgba(184,134,11,0.25), transparent)", marginBottom: "1.75rem" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontFamily: "Arial", fontSize: "0.72rem", color: "rgba(255,248,231,0.2)", margin: 0 }}>
            © {new Date().getFullYear()} Ghunghat Beauty. All rights reserved. · In your service since 1986.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "rgba(255,248,231,0.2)", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
