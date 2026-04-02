import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Ghunghat team for order support, beauty advice, or any queries. We're here to help.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Ghunghat",
    description: "We're here to help with your beauty journey.",
    url: "https://ghunghat.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#FFF8E7", minHeight: "100vh", paddingTop: "5rem" }}>
      <div style={{ backgroundColor: "#2C0A0A", padding: "4rem 2rem", textAlign: "center" }}>
        <span style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#B8860B", letterSpacing: "0.3em", textTransform: "uppercase" }}>We&apos;re Here For You</span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "3rem", fontWeight: "bold", color: "#FFF8E7", margin: "0.75rem 0 0.5rem" }}>Contact Us</h1>
        <p style={{ fontFamily: "Arial", fontSize: "0.95rem", color: "rgba(255,248,231,0.7)" }}>Questions about an order? Beauty advice? We&apos;d love to help.</p>
      </div>

      <div style={{ maxWidth: "600px", margin: "4rem auto", padding: "0 2rem" }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            { label: "Full Name", type: "text", placeholder: "Priya S." },
            { label: "Email", type: "email", placeholder: "priya@example.com" },
            { label: "Phone (optional)", type: "tel", placeholder: "+91 98765 43210" },
          ].map(({ label, type, placeholder }) => (
            <div key={label}>
              <label style={{ display: "block", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{label}</label>
              <input type={type} placeholder={placeholder} style={{ width: "100%", padding: "0.875rem", border: "1px solid #CCCCCC", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.9rem", color: "#1A1A1A", backgroundColor: "#fff", outline: "none", boxSizing: "border-box" }} />
            </div>
          ))}
          <div>
            <label style={{ display: "block", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Message</label>
            <textarea rows={5} placeholder="How can we help you?" style={{ width: "100%", padding: "0.875rem", border: "1px solid #CCCCCC", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.9rem", color: "#1A1A1A", backgroundColor: "#fff", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
          </div>
          <button type="submit" style={{ padding: "1rem 2rem", backgroundColor: "#8B0000", color: "#fff", border: "none", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
            Send Message
          </button>
        </form>

        <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "#2C0A0A", borderRadius: "8px", textAlign: "center" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#FFF8E7", marginBottom: "0.5rem" }}>Prefer WhatsApp?</p>
          <p style={{ fontFamily: "Arial", fontSize: "0.8rem", color: "rgba(255,248,231,0.65)", marginBottom: "1rem" }}>Chat with us directly for order support &amp; beauty advice.</p>
          <a href="https://wa.me/91XXXXXXXXXX" style={{ display: "inline-block", padding: "0.75rem 1.5rem", backgroundColor: "#25D366", color: "#fff", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "4px" }}>
            Open WhatsApp
          </a>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" style={{ fontFamily: "Arial", fontSize: "0.8rem", color: "#8B0000", textDecoration: "underline" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
