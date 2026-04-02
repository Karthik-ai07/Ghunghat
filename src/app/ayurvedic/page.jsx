import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const dynamic = "force-static";

export const metadata = {
  title: "Bridal Ayurvedic Beauty | Buy Ghunghat Online India",
  description:
    "Ghunghat: Buy quality Ayurvedic bridal beauty products online in India. Traditional ghunghat rituals, Kumkumadi Tailam, and ancient herb blends.",
  alternates: {
    canonical: "/ayurvedic",
  },
  openGraph: {
    title: "Ayurvedic Beauty | Ghunghat",
    description: "Time-tested Ayurvedic rituals for modern beauty.",
    url: "https://ghunghat.com/ayurvedic",
    type: "website",
  },
};

const products = [
  {
    id: "ay-001",
    name: "Kumkumadi Tailam Face Oil",
    brand: "Ghunghat",
    price: 1199,
    mrp: 1499,
    badge: "Lab Certified",
    category: "Face Oil",
    img: "/products/kumkumadi.png",
    desc: "Ancient 24-herb saffron oil for luminous overnight repair.",
  },
  {
    id: "ay-002",
    name: "Neem & Tulsi Face Pack",
    brand: "Ghunghat",
    price: 399,
    mrp: 549,
    badge: "Ghunghat Curated",
    category: "Face Mask",
    img: "/products/neem.png",
    desc: "Detoxifying antibacterial mask for clear, balanced skin.",
  },
  {
    id: "ay-003",
    name: "Ashwagandha Skin Calm Cream",
    brand: "Ghunghat",
    price: 749,
    mrp: 999,
    badge: "Dermatologist Tested",
    category: "Cream",
    img: "/products/moisturizer.png",
    desc: "Adaptogen-rich formula to soothe inflammation & redness.",
  },
  {
    id: "ay-004",
    name: "Rose Water Toner",
    brand: "Ghunghat",
    price: 349,
    mrp: 449,
    badge: "Lab Certified",
    category: "Toner",
    img: "/products/serum.png",
    desc: "Pure Damascena rose water. Refreshes & balances pH instantly.",
  },
  {
    id: "ay-005",
    name: "Multani Mitti Cleansing Clay",
    brand: "Ghunghat",
    price: 299,
    mrp: 399,
    badge: "Ghunghat Curated",
    category: "Cleanser",
    img: "/products/neem.png",
    desc: "Traditional Fuller's Earth for deep-cleansing oily skin.",
  },
  {
    id: "ay-006",
    name: "Saffron & Honey Night Balm",
    brand: "Ghunghat",
    price: 999,
    mrp: 1299,
    badge: "Lab Certified",
    category: "Night Care",
    img: "/products/kumkumadi.png",
    desc: "Rich restorative balm with wild honey & Kashmiri saffron.",
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

export default function AyurvedicPage() {
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
          Ancient Wisdom
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
          Bridal Ayurvedic Rituals & Traditional Ghunghat
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
          Time-tested botanical formulations rooted in centuries of Indian
          beauty wisdom.
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
                  alt={`Ghunghat ${p.name}: Traditional Bridal Ghunghat Beauty`}
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
