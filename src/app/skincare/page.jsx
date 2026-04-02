import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const dynamic = "force-static";

export const metadata = {
  title: "Bridal Skincare | Ghunghat — Prep for Your Wedding Day",
  description:
    "Buy premium bridal skincare to glow under your bridal ghunghat and wedding veil. Curated traditional beauty essentials for the modern Indian bride.",
  alternates: {
    canonical: "/skincare",
  },
  openGraph: {
    title: "Skincare | Ghunghat — Bridal Skin Prep",
    description: "Dermatologist-tested skincare curated for your wedding day glow.",
    url: "https://ghunghat.com/skincare",
    type: "website",
  },
};

const products = [
  {
    id: "sk-001",
    name: "Rose Glow Serum",
    brand: "Ghunghat",
    price: 899,
    mrp: 1199,
    badge: "Dermatologist Tested",
    category: "Serum",
    img: "/products/serum.png",
    desc: "Potent rose hip & vitamin C blend for luminous skin.",
  },
  {
    id: "sk-002",
    name: "Sandalwood Moisturiser",
    brand: "Ghunghat",
    price: 649,
    mrp: 849,
    badge: "Lab Certified",
    category: "Moisturiser",
    img: "/products/moisturizer.png",
    desc: "Deep hydration with indigenous sandalwood extract.",
  },
  {
    id: "sk-003",
    name: "Kumkumadi Night Elixir",
    brand: "Forest Essentials",
    price: 1295,
    mrp: 1495,
    badge: "Ghunghat Curated",
    category: "Night Cream",
    img: "/products/kumkumadi.png",
    desc: "Ancient ayurvedic saffron & herb overnight repair.",
  },
  {
    id: "sk-004",
    name: "SPF 50 Sunscreen",
    brand: "Ghunghat",
    price: 549,
    mrp: 699,
    badge: "Dermatologist Tested",
    category: "Sun Protection",
    img: "/products/sunscreen.png",
    desc: "Broad spectrum, lightweight protection for Indian skin.",
  },
  {
    id: "sk-005",
    name: "Vitamin C Brightening Toner",
    brand: "Ghunghat",
    price: 449,
    mrp: 599,
    badge: "Lab Certified",
    category: "Toner",
    img: "/products/serum.png",
    desc: "Gentle pH-balancing toner with pure vitamin C.",
  },
  {
    id: "sk-006",
    name: "Neem Purifying Face Wash",
    brand: "Biotique",
    price: 299,
    mrp: 399,
    badge: "Ghunghat Curated",
    category: "Cleanser",
    img: "/products/neem.png",
    desc: "Antibacterial neem & tulsi for clear, balanced skin.",
  },
];

function QABadge({ text }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.2rem 0.6rem",
        backgroundColor: "#FFF8E7",
        border: "1px solid #B8860B",
        borderRadius: "999px",
        fontSize: "0.62rem",
        fontFamily: "Arial",
        color: "#B8860B",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        marginBottom: "0.5rem",
      }}
    >
      ✓ {text}
    </span>
  );
}

export default function SkincarePage() {
  return (
    <div
      style={{
        backgroundColor: "#FFF8E7",
        minHeight: "100vh",
        paddingTop: "5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#2C0A0A",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 200 200"
            width="600"
            height="600"
            fill="none"
            stroke="#B8860B"
          >
            {[95, 70, 45, 20].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} strokeWidth="0.5" />
            ))}
          </svg>
        </div>
        <span
          style={{
            fontFamily: "Arial",
            fontSize: "0.7rem",
            color: "#B8860B",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Quality Assured
        </span>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.5rem,5vw,3.5rem)",
            fontWeight: "bold",
            color: "#FFF8E7",
            margin: "0.75rem 0 0.5rem",
          }}
        >
          Bridal Skincare & Traditional Ghunghat Beauty
        </h1>
        <p
          style={{
            fontFamily: "Arial",
            fontSize: "1rem",
            color: "rgba(255,248,231,0.7)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Formulas that work. Ingredients that matter. Every product tested and
          verified.
        </p>
      </div>

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E8D5A3",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(139,0,0,0.06)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1",
                  backgroundColor: "#f9f1e0",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.img}
                  alt={`Ghunghat Curated ${p.name}: Buy Traditional Ghunghat Online India`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <QABadge text={p.badge} />
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.72rem",
                    color: "#888",
                    margin: "0 0 0.2rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.category}
                </p>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.15rem",
                    fontWeight: "bold",
                    color: "#1A1A1A",
                    margin: "0 0 0.2rem",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.78rem",
                    color: "#888",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {p.brand}
                </p>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.83rem",
                    color: "#555",
                    margin: "0 0 1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#8B0000",
                      }}
                    >
                      ₹{p.price}{" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "Arial",
                        fontSize: "0.8rem",
                        color: "#aaa",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{p.mrp}
                    </span>
                  </div>
                  <AddToCartButton product={p} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/"
            style={{
              fontFamily: "Arial",
              fontSize: "0.8rem",
              color: "#8B0000",
              textDecoration: "underline",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
