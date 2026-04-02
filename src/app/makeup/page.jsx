import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const dynamic = "force-static";

export const metadata = {
  title: "Bridal Makeup | Ghunghat — Match Your Wedding Dupatta",
  description:
    "Explore bridal makeup collections that perfectly match your heavy embroidered ghunghat. Shop long-wearing bridal essentials at GhunghatWithQuality.",
  alternates: {
    canonical: "/makeup",
  },
  openGraph: {
    title: "Bridal Makeup | Ghunghat — Bridal Ghunghat Looks",
    description: "Premium makeup curated to match your traditional wedding dupatta.",
    url: "https://ghunghat.com/makeup",
    type: "website",
  },
};

const products = [
  {
    id: "mk-001",
    name: "Velvet Matte Lipstick — Ruby",
    brand: "Ghunghat",
    price: 599,
    mrp: 799,
    badge: "Lab Certified",
    category: "Lipstick",
    img: "/products/lipstick.png",
    desc: "Deeply pigmented ruby red. 8-hour wear. Indian skin-tone optimised.",
  },
  {
    id: "mk-002",
    name: "Kajal Kohl — Intenso Black",
    brand: "Ghunghat",
    price: 299,
    mrp: 399,
    badge: "Dermatologist Tested",
    category: "Eye",
    img: "/products/kajal.png",
    desc: "Smudge-free defining kohl. Safe formula, bold drama.",
  },
  {
    id: "mk-003",
    name: "Satin Finish Foundation",
    brand: "Ghunghat",
    price: 1099,
    mrp: 1399,
    badge: "Dermatologist Tested",
    category: "Foundation",
    img: "/products/moisturizer.png",
    desc: "Shade-matched for warm & dusky Indian skin tones.",
  },
  {
    id: "mk-004",
    name: "Rose Blush Powder",
    brand: "Ghunghat",
    price: 499,
    mrp: 649,
    badge: "Lab Certified",
    category: "Blush",
    img: "/products/blush.png",
    desc: "Buildable rosy flush. Works on all Indian complexions.",
  },
  {
    id: "mk-005",
    name: "Brow Definer Pencil",
    brand: "Ghunghat",
    price: 349,
    mrp: 449,
    badge: "Ghunghat Curated",
    category: "Brows",
    img: "/products/kajal.png",
    desc: "Micro-tip precision for hairlike strokes. Long lasting.",
  },
  {
    id: "mk-006",
    name: "Golden Hour Highlighter",
    brand: "Ghunghat",
    price: 799,
    mrp: 999,
    badge: "Lab Certified",
    category: "Highlight",
    img: "/products/blush.png",
    desc: "Warm champagne glow crafted for golden Indian skin.",
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

export default function MakeupPage() {
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
          Bold &amp; Beautiful
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
          Bridal Makeup & Traditional Ghunghat Essentials
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
          Colours crafted for Indian skin tones — bold reds, warm nudes, and
          everything in between.
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
                  alt={`Ghunghat ${p.name}: Quality Bridal Makeup India`}
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
