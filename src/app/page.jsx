import Image from "next/image";
import { CanvasSequence } from "@/components/canvas/CanvasSequence";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Buy Ghunghat Online India | Bridal Dupatta | GhunghatWithQuality",
  description:
    "Shop premium bridal ghunghat and wedding dupatta online. Traditional quality with modern designs. Free shipping across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Buy Ghunghat Online India | GhunghatWithQuality",
    description: "Premium bridal ghunghat and wedding dupatta. Traditional quality.",
    url: "https://ghunghat.com",
    siteName: "Ghunghat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ghunghat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ghunghat - Curated Beauty. Royal Grace.",
      },
    ],
  },
};

/* ── Ambient gold orb ─── */
function GoldOrb({ size = 400, x = "0%", y = "0%", opacity = 0.07 }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: x,
        top: y,
        background: "radial-gradient(circle, #B8860B 0%, transparent 70%)",
        opacity,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ── Thin gold rule ─── */
function GoldRule() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(184,134,11,0.5), transparent)",
      }}
    />
  );
}

/* ── Floating product card ─── */
function FloatingCard({ src, alt, delay, rotate = 0, translateY = 0 }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(184,134,11,0.25)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,134,11,0.08)",
        animation: `floatCard 5s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
        flexShrink: 0,
        width: "clamp(160px, 22vw, 260px)",
        aspectRatio: "1",
      }}
    >
      <Image
        src={src}
        alt={`${alt} — Buy Ghunghat Online India`}
        fill
        style={{ objectFit: "cover" }}
        sizes="260px"
      />
      {/* Gold shimmer overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(184,134,11,0.08) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      {/* ── Floating animation keyframes ── */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-14px) rotate(var(--rot, 0deg)); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerSlow {
          0%   { opacity: 0.04; }
          50%  { opacity: 0.08; }
          100% { opacity: 0.04; }
        }
        .float-card-1 { animation: floatCard 5.5s ease-in-out infinite; }
        .float-card-2 { animation: floatCard 6.2s ease-in-out infinite 0.8s; }
        .float-card-3 { animation: floatCard 5.0s ease-in-out infinite 1.5s; }
        .float-card-4 { animation: floatCard 6.8s ease-in-out infinite 0.4s; }
        .float-card-5 { animation: floatCard 5.5s ease-in-out infinite 1.1s; }
      `}</style>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0D0404",
        }}
      >
        {/* Visually integrated H1 for SEO */}
        <h1
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            border: 0,
          }}
        >
          Buy Ghunghat Online India — Premium Bridal Ghunghat & Wedding Dupattas
        </h1>

        {/* ══════════════════════════════════════
             SECTION 1 · 3D SCROLLYTELLING HERO
          ══════════════════════════════════════ */}
        <section style={{ position: "relative", width: "100%" }}>
          <CanvasSequence />
        </section>

        {/* ══════════════════════════════════════
             SECTION 2 · LOGO REVEAL + SINCE 1986
          ══════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "#0D0404",
            padding: "7rem 2rem 6rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background mandala */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <Image
              src="/mandala-bg.png"
              alt="Traditional Indian Ghunghat Mandala Pattern"
              fill
              style={{
                objectFit: "contain",
                opacity: 0.04,
                mixBlendMode: "luminosity",
              }}
              sizes="100vw"
            />
          </div>

          {/* Ambient gold orbs */}
          <GoldOrb size={600} x="50%" y="-20%" opacity={0.05} />
          <GoldOrb size={300} x="10%" y="60%" opacity={0.04} />
          <GoldOrb size={250} x="75%" y="55%" opacity={0.04} />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {/* Gold ornament */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <div
                style={{
                  width: 60,
                  height: "1px",
                  background: "linear-gradient(to right, transparent, #B8860B)",
                }}
              />
              <span
                style={{
                  color: "#B8860B",
                  fontSize: "0.8rem",
                  letterSpacing: "0.5rem",
                  opacity: 0.7,
                }}
              >
                ✦
              </span>
              <div
                style={{
                  width: 60,
                  height: "1px",
                  background: "linear-gradient(to left, transparent, #B8860B)",
                }}
              />
            </div>

            {/* Logo */}
            <div style={{ position: "relative", width: "min(580px, 88vw)" }}>
              <Image
                src="/Logo.png"
                alt="Ghunghat: Buy Quality Ghunghat Online India — Traditional & Bridal Collection"
                width={580}
                height={185}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 40px rgba(184,134,11,0.25))",
                }}
                priority
              />
            </div>

            {/* Since 1986 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  fontStyle: "italic",
                  color: "rgba(255,248,231,0.55)",
                  letterSpacing: "0.08em",
                }}
              >
                In Your Service
              </span>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontWeight: "bold",
                  color: "#B8860B",
                  letterSpacing: "0.2em",
                  lineHeight: 1,
                  textShadow: "0 0 60px rgba(184,134,11,0.3)",
                }}
              >
                1986
              </span>
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(255,248,231,0.3)",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                }}
              >
                Since
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(255,248,231,0.6)",
                maxWidth: "420px",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Buy ghunghat online with royal grace. Our premium bridal ghunghat and wedding dupatta collection defines tradition and pure quality.
            </p>

            {/* CTA */}
            <Link
              href="/skincare"
              aria-label="Explore Skincare Collection"
              style={{
                marginTop: "0.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.1rem 2.75rem",
                background: "linear-gradient(135deg, #B8860B 0%, #8A6400 100%)",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                boxShadow: "0 8px 40px rgba(184,134,11,0.35)",
              }}
            >
              Explore Collection
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            {/* Bottom ornament */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(184,134,11,0.4))",
                }}
              />
              <span
                style={{
                  color: "rgba(184,134,11,0.4)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.4rem",
                }}
              >
                ✦ ✦ ✦
              </span>
              <div
                style={{
                  width: 80,
                  height: "1px",
                  background:
                    "linear-gradient(to left, transparent, rgba(184,134,11,0.4))",
                }}
              />
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ══════════════════════════════════════
             SECTION 3 · FLOATING PRODUCT GALLERY
          ══════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "#0A0202",
            padding: "6rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GoldOrb size={500} x="20%" y="0%" opacity={0.05} />
          <GoldOrb size={350} x="65%" y="50%" opacity={0.04} />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Heading */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span
                style={{
                  fontFamily: "Arial",
                  fontSize: "0.65rem",
                  color: "#B8860B",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Hand-Picked · Quality Assured
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: "bold",
                  color: "#FFF8E7",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Bridal Ghunghat & Wedding Dupatta Collection
              </h2>
            </div>

            {/* Floating cards row */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "2rem 0 3rem",
              }}
            >
              {[
                {
                  src: "/products/serum.png",
                  alt: "Rose Glow Serum",
                  cls: "float-card-1",
                  rotate: -2,
                },
                {
                  src: "/products/kumkumadi.png",
                  alt: "Kumkumadi Tailam",
                  cls: "float-card-2",
                  rotate: 1,
                },
                {
                  src: "/hero-beauty.png",
                  alt: "Luxury Collection",
                  cls: "float-card-3",
                  rotate: 0,
                },
                {
                  src: "/products/lipstick.png",
                  alt: "Velvet Lipstick",
                  cls: "float-card-4",
                  rotate: -1,
                },
                {
                  src: "/products/blush.png",
                  alt: "Rose Blush",
                  cls: "float-card-5",
                  rotate: 2,
                },
              ].map(({ src, alt, cls, rotate }) => (
                <div
                  key={alt}
                  className={cls}
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid rgba(184,134,11,0.3)",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(184,134,11,0.06), inset 0 1px 0 rgba(255,255,255,0.05)",
                    transform: `rotate(${rotate}deg)`,
                    flexShrink: 0,
                    width: "clamp(140px, 18vw, 220px)",
                    aspectRatio: "1",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${alt}: Bridal Ghunghat & Wedding Dupatta`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="220px"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(184,134,11,0.1) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Product names marquee strip */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "1rem",
              }}
            >
              {[
                "Rose Glow Serum",
                "Kumkumadi Tailam",
                "Velvet Matte Lipstick",
                "Rose Blush",
                "SPF 50 Sunscreen",
              ].map((name) => (
                <span
                  key={name}
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.65rem",
                    color: "rgba(255,248,231,0.25)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ══════════════════════════════════════
             SECTION 4 · FEATURED PRODUCT GRID
          ══════════════════════════════════════ */}
        <section style={{ backgroundColor: "#0D0404", padding: "6rem 2rem" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <GoldOrb size={400} x="80%" y="-10%" opacity={0.04} />
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  fontFamily: "Arial",
                  fontSize: "0.65rem",
                  color: "#B8860B",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Featured Picks
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: "bold",
                  color: "#FFF8E7",
                  margin: 0,
                }}
              >
                Traditional Ghunghat & Wedding Dupattas
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  name: "Rose Glow Serum",
                  price: "₹899",
                  img: "/products/serum.png",
                  href: "/skincare",
                  tag: "Skincare",
                },
                {
                  name: "Velvet Matte Lipstick",
                  price: "₹599",
                  img: "/products/lipstick.png",
                  href: "/makeup",
                  tag: "Makeup",
                },
                {
                  name: "Kumkumadi Tailam",
                  price: "₹1,199",
                  img: "/products/kumkumadi.png",
                  href: "/ayurvedic",
                  tag: "Ayurvedic",
                },
                {
                  name: "Rose Blush Powder",
                  price: "₹499",
                  img: "/products/blush.png",
                  href: "/makeup",
                  tag: "Makeup",
                },
              ].map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  aria-label={`View details for ${p.name}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "rgba(255,248,231,0.02)",
                    border: "1px solid rgba(184,134,11,0.18)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition:
                      "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={p.img}
                      alt={`${p.name}: High Quality Traditional Ghunghat`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(13,4,4,0.7) 0%, transparent 50%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        left: "0.75rem",
                        fontFamily: "Arial",
                        fontSize: "0.55rem",
                        color: "#B8860B",
                        backgroundColor: "rgba(13,4,4,0.75)",
                        border: "1px solid rgba(184,134,11,0.4)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "999px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div style={{ padding: "1.1rem 1.25rem 1.35rem" }}>
                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1rem",
                        color: "#FFF8E7",
                        margin: "0 0 0.4rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#B8860B",
                      }}
                    >
                      {p.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link
                href="/skincare"
                aria-label="View all beauty and skincare products"
                style={{
                  fontFamily: "Arial",
                  fontSize: "0.72rem",
                  color: "#B8860B",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(184,134,11,0.4)",
                  paddingBottom: "2px",
                }}
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ══════════════════════════════════════
             SECTION 5 · PHILOSOPHY
          ══════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "#080101",
            padding: "7rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GoldOrb size={500} x="0%" y="30%" opacity={0.04} />
          <GoldOrb size={300} x="70%" y="0%" opacity={0.04} />

          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ marginBottom: "2.5rem" }}>
              <svg
                viewBox="0 0 200 200"
                width="80"
                height="80"
                fill="none"
                style={{ display: "block", margin: "0 auto 2rem" }}
              >
                {[80, 58, 36, 14].map((r) => (
                  <circle
                    key={r}
                    cx="100"
                    cy="100"
                    r={r}
                    stroke="#B8860B"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                ))}
                {[0, 45, 90, 135].map((d) => (
                  <line
                    key={d}
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="180"
                    stroke="#B8860B"
                    strokeWidth="0.4"
                    opacity="0.5"
                    transform={`rotate(${d} 100 100)`}
                  />
                ))}
                <circle cx="100" cy="100" r="6" fill="#B8860B" opacity="0.9" />
              </svg>
            </div>

            <span
              style={{
                fontFamily: "Arial",
                fontSize: "0.65rem",
                color: "#B8860B",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Our Philosophy
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "bold",
                color: "#FFF8E7",
                lineHeight: 1.2,
                margin: "0 0 1.75rem",
              }}
            >
              Every drop is
              <br />
              an experience.
            </h2>
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "1rem",
                color: "rgba(255,248,231,0.5)",
                lineHeight: 1.9,
                margin: "0 0 3rem",
              }}
            >
              Since 1986, Ghunghat has believed that beauty should not be
              guesswork. We curate only the most potent, lab-verified formulas —
              so every rupee you spend delivers results as beautiful as you
              deserve.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "3.5rem",
              }}
            >
              {[
                { stat: "37+", label: "Years of Trust" },
                { stat: "100+", label: "Curated Products" },
                { stat: "3", label: "QA Badge Levels" },
                { stat: "1986", label: "Est. Raebareli" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      fontWeight: "bold",
                      color: "#B8860B",
                      textShadow: "0 0 30px rgba(184,134,11,0.3)",
                    }}
                  >
                    {stat}
                  </span>
                  <span
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.62rem",
                      color: "rgba(255,248,231,0.3)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ══════════════════════════════════════
             SECTION 6 · SHADE FINDER CTA
          ══════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "#0D0404",
            padding: "6rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GoldOrb size={600} x="30%" y="-30%" opacity={0.05} />
          <div
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "Arial",
                fontSize: "0.65rem",
                color: "#B8860B",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Personalised for You
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#FFF8E7",
                fontWeight: "bold",
                margin: "0 0 1.25rem",
                lineHeight: 1.2,
              }}
            >
              Find Your
              <br />
              Perfect Shade
            </h2>
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "0.9rem",
                color: "rgba(255,248,231,0.5)",
                lineHeight: 1.8,
                margin: "0 0 2.5rem",
                maxWidth: "440px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Our 3-step consultation recommends products matched to your exact
              undertone, skin depth, and finish preference.
            </p>
            <Link
              href="/shade-finder"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.1rem 2.75rem",
                background: "linear-gradient(135deg, #B8860B 0%, #8A6400 100%)",
                color: "#fff",
                fontFamily: "Arial",
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                boxShadow: "0 8px 40px rgba(184,134,11,0.3)",
              }}
            >
              Start Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>

        <GoldRule />

        {/* ══════════════════════════════════════
             SECTION 7 · STORE ADDRESS
          ══════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "#080101",
            padding: "5rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GoldOrb size={400} x="60%" y="20%" opacity={0.04} />

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Left — address block */}
              <div>
                <span
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.65rem",
                    color: "#B8860B",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  Visit Our Store
                </span>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.75rem",
                    color: "#FFF8E7",
                    fontWeight: "bold",
                    margin: "0 0 1.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  Come Find Us
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Pin icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B8860B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "1.05rem",
                          color: "#FFF8E7",
                          margin: "0 0 0.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        Shop no. 58, SuperMarket
                      </p>
                      <p
                        style={{
                          fontFamily: "Arial",
                          fontSize: "0.875rem",
                          color: "rgba(255,248,231,0.5)",
                          margin: 0,
                          lineHeight: 1.7,
                        }}
                      >
                        PNT Colony
                        <br />
                        Raebareli, Uttar Pradesh
                        <br />
                        229001
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B8860B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.08-1.08a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "0.875rem",
                        color: "rgba(255,248,231,0.5)",
                        margin: 0,
                      }}
                    >
                      Call or WhatsApp for orders
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B8860B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "0.875rem",
                        color: "rgba(255,248,231,0.5)",
                        margin: 0,
                      }}
                    >
                      Mon–Sat: 9:00 AM – 8:30 PM
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Shop+no+58+SuperMarket+PNT+Colony+Raebareli+Uttar+Pradesh+229001"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.75rem",
                    padding: "0.75rem 1.5rem",
                    border: "1px solid rgba(184,134,11,0.4)",
                    color: "#B8860B",
                    fontFamily: "Arial",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: "2px",
                    transition: "all 0.25s",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Right — decorative since-1986 block */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "1.5rem",
                }}
              >
                <div style={{ position: "relative", width: 180, height: 180 }}>
                  <svg
                    viewBox="0 0 200 200"
                    width="180"
                    height="180"
                    fill="none"
                  >
                    {[95, 70, 45, 20].map((r) => (
                      <circle
                        key={r}
                        cx="100"
                        cy="100"
                        r={r}
                        stroke="#B8860B"
                        strokeWidth="0.5"
                        strokeDasharray="3 3"
                        opacity="0.6"
                      />
                    ))}
                    {[
                      0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
                    ].map((d) => (
                      <line
                        key={d}
                        x1="100"
                        y1="10"
                        x2="100"
                        y2="190"
                        stroke="#B8860B"
                        strokeWidth="0.3"
                        opacity="0.3"
                        transform={`rotate(${d} 100 100)`}
                      />
                    ))}
                    <circle
                      cx="100"
                      cy="100"
                      r="8"
                      fill="#B8860B"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                      color: "rgba(255,248,231,0.4)",
                      margin: "0 0 0.25rem",
                    }}
                  >
                    Serving Raebareli
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      color: "#B8860B",
                      margin: 0,
                      textShadow: "0 0 40px rgba(184,134,11,0.3)",
                      lineHeight: 1,
                    }}
                  >
                    Since
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "4.5rem",
                      fontWeight: "bold",
                      color: "#FFF8E7",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    1986
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoldRule />
      </div>
    </>
  );
}
