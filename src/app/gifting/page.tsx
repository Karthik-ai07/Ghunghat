import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gifting Curations",
  description: "Thoughtfully curated beauty gift sets from Ghunghat — perfect for birthdays, weddings, and festivals. Complimentary gift wrap included.",
  alternates: {
    canonical: "/gifting",
  },
  openGraph: {
    title: "Gifting Curations | Ghunghat",
    description: "Premium beauty gift sets for every occasion.",
    url: "https://ghunghat.com/gifting",
    type: "website",
  },
};

const giftSets = [
  {
    id: "gf-001", name: "The Radiance Ritual", price: 1799, mrp: 2499, img: "/products/serum.png",
    items: ["Rose Glow Serum", "Rose Water Toner", "Sandalwood Moisturiser"],
    badge: "Bestseller", desc: "A complete skincare ritual for luminous, hydrated skin.",
  },
  {
    id: "gf-002", name: "Ayurvedic Indulgence Box", price: 2199, mrp: 2999, img: "/products/kumkumadi.png",
    items: ["Kumkumadi Tailam", "Saffron & Honey Night Balm", "Neem Face Pack"],
    badge: "Most Gifted", desc: "Ancient Ayurvedic formulas beautifully presented as a gift.",
  },
  {
    id: "gf-003", name: "Bridal Glow Collection", price: 3499, mrp: 4799, img: "/products/blush.png",
    items: ["Rose Blush", "Velvet Matte Lipstick", "Golden Hour Highlighter", "Kajal Kohl"],
    badge: "Exclusive", desc: "Everything a bride needs for her most radiant look.",
  },
  {
    id: "gf-004", name: "Everyday Essentials Kit", price: 1299, mrp: 1799, img: "/products/moisturizer.png",
    items: ["SPF 50 Sunscreen", "Vitamin C Toner", "Neem Face Wash"],
    badge: "Great Value", desc: "Daily essentials curated for a complete skincare routine.",
  },
];

export default function GiftingPage() {
  return (
    <div style={{ backgroundColor: "#FFF8E7", minHeight: "100vh", paddingTop: "5rem" }}>
      <div style={{ backgroundColor: "#2C0A0A", padding: "5rem 2rem 4rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <span style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#B8860B", letterSpacing: "0.3em", textTransform: "uppercase" }}>Thoughtfully Curated</span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: "bold", color: "#FFF8E7", margin: "0.75rem 0 0.5rem" }}>Gifting Curations</h1>
        <p style={{ fontFamily: "Arial", fontSize: "1rem", color: "rgba(255,248,231,0.7)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Beautifully curated gift sets for every occasion — birthdays, weddings, festivals & more.
        </p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {["🎁 Complimentary Gift Wrap", "✉️ Personalised Note", "🚚 Free Delivery on Gifts"].map((tag) => (
            <span key={tag} style={{ fontFamily: "Arial", fontSize: "0.75rem", color: "#B8860B", backgroundColor: "rgba(184,134,11,0.1)", padding: "0.35rem 0.85rem", borderRadius: "999px", border: "1px solid rgba(184,134,11,0.3)" }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: "2rem" }}>
          {giftSets.map((g) => (
            <div key={g.id} style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 20px rgba(139,0,0,0.08)", display: "flex", gap: 0 }}>
              <div style={{ position: "relative", width: "180px", flexShrink: 0, backgroundColor: "#f9f1e0" }}>
                <Image src={g.img} alt={`Ghunghat Premium Gift set — ${g.name}`} fill style={{ objectFit: "cover" }} sizes="180px" />
              </div>
              <div style={{ padding: "1.5rem", flex: 1 }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ display: "inline-block", padding: "0.2rem 0.6rem", backgroundColor: "#8B0000", color: "#fff", borderRadius: "999px", fontSize: "0.62rem", fontFamily: "Arial", fontWeight: "bold", letterSpacing: "0.05em" }}>★ {g.badge}</span>
                  <span style={{ display: "inline-block", padding: "0.2rem 0.6rem", backgroundColor: "#FFF8E7", border: "1px solid #B8860B", borderRadius: "999px", fontSize: "0.62rem", fontFamily: "Arial", color: "#B8860B", fontWeight: "bold" }}>Gift Set</span>
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: "bold", color: "#1A1A1A", margin: "0 0 0.4rem" }}>{g.name}</h3>
                <p style={{ fontFamily: "Arial", fontSize: "0.78rem", color: "#555", lineHeight: 1.6, margin: "0 0 0.75rem" }}>{g.desc}</p>
                <p style={{ fontFamily: "Arial", fontSize: "0.72rem", color: "#888", margin: "0 0 1rem" }}>
                  Includes: {g.items.join(" · ")}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                  <div>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", fontWeight: "bold", color: "#8B0000" }}>₹{g.price.toLocaleString("en-IN")} </span>
                    <span style={{ fontFamily: "Arial", fontSize: "0.8rem", color: "#aaa", textDecoration: "line-through" }}>₹{g.mrp.toLocaleString("en-IN")}</span>
                  </div>
                  <AddToCartButton product={{ id: g.id, name: g.name, brand: "Ghunghat", price: g.price, mrp: g.mrp, img: g.img, category: "Gift Set", badge: g.badge }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/" style={{ fontFamily: "Arial", fontSize: "0.8rem", color: "#8B0000", textDecoration: "underline" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
