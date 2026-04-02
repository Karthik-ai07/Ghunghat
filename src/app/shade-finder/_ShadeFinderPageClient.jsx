"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    id: 1,
    tag: "Step 1 of 3",
    title: "Your Skin Undertone",
    subtitle:
      "Hold your inner wrist to natural light and examine your vein colour.",
    options: [
      {
        value: "warm",
        label: "Warm",
        sublabel:
          "Veins appear greenish · Olive or golden complexion · Gold jewellery flatters",
        swatch: "#C8874A",
        gradient: "linear-gradient(135deg, #D4943A 0%, #C06A1A 100%)",
      },
      {
        value: "cool",
        label: "Cool",
        sublabel:
          "Veins appear blue-purple · Rosy or pink complexion · Silver jewellery flatters",
        swatch: "#8B6EA0",
        gradient: "linear-gradient(135deg, #9B7EB5 0%, #6B4E8A 100%)",
      },
      {
        value: "neutral",
        label: "Neutral",
        sublabel:
          "Veins look blue-green · You can't decide · Both metals suit you",
        swatch: "#B8860B",
        gradient: "linear-gradient(135deg, #C89E2A 0%, #9A6E00 100%)",
      },
    ],
  },
  {
    id: 2,
    tag: "Step 2 of 3",
    title: "Your Skin Depth",
    subtitle: "How does your skin appear in bright natural daylight?",
    options: [
      {
        value: "fair",
        label: "Fair",
        sublabel:
          "Very light, minimal melanin · Burns easily · Porcelain or ivory tones",
        swatch: "#F5D5B0",
        gradient: "linear-gradient(135deg, #F7E0C5 0%, #EDCBA5 100%)",
      },
      {
        value: "medium",
        label: "Medium",
        sublabel:
          "Light to medium brown · Tans gradually · Wheatish to honey tones",
        swatch: "#C8956C",
        gradient: "linear-gradient(135deg, #D4A07A 0%, #B8805A 100%)",
      },
      {
        value: "dusky",
        label: "Dusky",
        sublabel:
          "Medium to dark brown · Rich melanin · Sandalwood to caramel tones",
        swatch: "#8B5E3C",
        gradient: "linear-gradient(135deg, #9A6E4A 0%, #7A4E2C 100%)",
      },
      {
        value: "deep",
        label: "Deep",
        sublabel:
          "Deep brown or ebony · High melanin · Rarely burns, tans easily",
        swatch: "#4A2C1A",
        gradient: "linear-gradient(135deg, #5A3C2A 0%, #3A1C0A 100%)",
      },
    ],
  },
  {
    id: 3,
    tag: "Step 3 of 3",
    title: "Your Finish Preference",
    subtitle: "How do you want your skin to look after your routine?",
    options: [
      {
        value: "dewy",
        label: "Dewy Glow",
        sublabel:
          "Glass-skin luminosity · Lit-from-within radiance · Hydrated & fresh",
        swatch: "#F0C56E",
        gradient: "linear-gradient(135deg, #F5D080 0%, #E8AA40 100%)",
      },
      {
        value: "matte",
        label: "Matte Velvet",
        sublabel: "Shine-free all day · Refined pores · Smooth, powdery finish",
        swatch: "#9E7B5C",
        gradient: "linear-gradient(135deg, #AE8B6C 0%, #8E6B4C 100%)",
      },
      {
        value: "natural",
        label: "Natural Skin",
        sublabel:
          "Barely-there feeling · Real skin texture · Effortless everyday look",
        swatch: "#D4A882",
        gradient: "linear-gradient(135deg, #DEB892 0%, #C49872 100%)",
      },
      {
        value: "coverage",
        label: "Full Coverage",
        sublabel:
          "Even tone, zero blemishes · Photogenic finish · Long-wearing",
        swatch: "#8B0000",
        gradient: "linear-gradient(135deg, #A01010 0%, #6B0000 100%)",
      },
    ],
  },
];

/* ── Product Recommendations ──────────────────── */
const getRecommendations = (selections) => {
  const products = [
    {
      name: "Kumkumadi Tailam",
      category: "Face Oil",
      price: "₹1,199",
      img: "/products/kumkumadi.png",
      match: "96%",
      href: "/ayurvedic",
    },
    {
      name: "Rose Glow Serum",
      category: "Serum",
      price: "₹899",
      img: "/products/serum.png",
      match: "94%",
      href: "/skincare",
    },
    {
      name: "Velvet Matte Lipstick",
      category: "Lipstick",
      price: "₹599",
      img: "/products/lipstick.png",
      match: "91%",
      href: "/makeup",
    },
    {
      name: "Sandalwood Moisturiser",
      category: "Moisturiser",
      price: "₹649",
      img: "/products/moisturizer.png",
      match: "89%",
      href: "/skincare",
    },
  ];
  // Adjust order based on finish preference
  if (selections[3] === "dewy")
    return [products[0], products[1], products[3], products[2]];
  if (selections[3] === "matte")
    return [products[2], products[1], products[0], products[3]];
  if (selections[3] === "coverage")
    return [products[2], products[3], products[1], products[0]];
  return products;
};

/* ── Components ───────────────────────────────── */
function GoldOrb({ size = 300, x = "0%", y = "0%", opacity = 0.06 }) {
  return (
    <div
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
      }}
    />
  );
}

/* ── Main Page ────────────────────────────────── */
export default function ShadeFinderPageClient() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
  const [selections, setSelections] = useState({});
  const [done, setDone] = useState(false);
  const [entering, setEntering] = useState(false);

  function choose(value) {
    const step = steps[currentStep - 1];
    const newSel = { ...selections, [step.id]: value };
    setSelections(newSel);
    setEntering(true);
    setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      } else {
        setDone(true);
      }
      setEntering(false);
    }, 400);
  }

  function handleStart() {
    setEntering(true);
    setTimeout(() => {
      setCurrentStep(1);
      setEntering(false);
    }, 350);
  }

  function reset() {
    setCurrentStep(0);
    setSelections({});
    setDone(false);
  }

  const recs = getRecommendations(selections);
  const undertone = selections[1] || "";
  const depth = selections[2] || "";
  const finish = selections[3] || "";

  /* ── BASE WRAPPER ── */
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D0404",
        color: "#FFF8E7",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <GoldOrb size={500} x="-10%" y="-5%" opacity={0.05} />
      <GoldOrb size={400} x="70%" y="60%" opacity={0.04} />
      <GoldOrb size={250} x="50%" y="5%" opacity={0.03} />

      {/* ── INTRO SCREEN ── */}
      {currentStep === 0 && !done && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 5rem)",
            padding: "3rem 2rem",
            textAlign: "center",
            animation: "fadeInUp 0.7s ease both",
          }}
        >
          {/* Mandala */}
          <div
            style={{
              position: "relative",
              width: 160,
              height: 160,
              marginBottom: "3rem",
            }}
          >
            <svg viewBox="0 0 200 200" width="160" height="160" fill="none">
              {[80, 60, 40, 20].map((r) => (
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
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
                (d) => (
                  <line
                    key={d}
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="180"
                    stroke="#B8860B"
                    strokeWidth="0.3"
                    opacity="0.5"
                    transform={`rotate(${d} 100 100)`}
                  />
                ),
              )}
              <circle cx="100" cy="100" r="8" fill="#B8860B" opacity="0.8" />
            </svg>
          </div>

          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.68rem",
              color: "#B8860B",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              display: "block",
            }}
          >
            Personalised Shade Consultation
          </span>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "bold",
              color: "#FFF8E7",
              lineHeight: 1.15,
              margin: "0 0 1.5rem",
              maxWidth: "700px",
            }}
          >
            Find Your
            <br />
            <span style={{ color: "#B8860B" }}>Bridal Ghunghat Match</span>
          </h1>

          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1rem",
              color: "rgba(255,248,231,0.6)",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 0 3rem",
            }}
          >
            Three precise questions to match your skin depth and undertone to a traditional ghunghat beauty routine — ensuring quality for the modern bride.
          </p>

          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Undertone", "Skin Depth", "Finish"].map((s, i) => (
              <div
                key={s}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: "1px solid rgba(184,134,11,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Arial",
                    fontSize: "0.7rem",
                    color: "#B8860B",
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.75rem",
                    color: "rgba(255,248,231,0.5)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            style={{
              padding: "1.1rem 3rem",
              background: "linear-gradient(135deg, #B8860B 0%, #8A6400 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "2px",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.8rem",
              fontWeight: "bold",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(184,134,11,0.35)",
              transition: "all 0.3s",
            }}
          >
            Begin Consultation
          </button>

          <p
            style={{
              fontFamily: "Arial",
              fontSize: "0.72rem",
              color: "rgba(255,248,231,0.3)",
              marginTop: "1.5rem",
            }}
          >
            Takes less than 60 seconds · No sign-up required
          </p>
        </div>
      )}

      {/* ── QUIZ STEPS ── */}
      {currentStep > 0 && !done && (
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "3rem 2rem 5rem",
            opacity: entering ? 0 : 1,
            transform: entering ? "translateY(16px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {/* Progress bar */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "Arial",
                  fontSize: "0.68rem",
                  color: "#B8860B",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                {steps[currentStep - 1].tag}
              </span>
              <button
                onClick={reset}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "Arial",
                  fontSize: "0.7rem",
                  color: "rgba(255,248,231,0.35)",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Start Over
              </button>
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(255,248,231,0.08)",
                borderRadius: "999px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${(currentStep / steps.length) * 100}%`,
                  background: "linear-gradient(to right, #B8860B, #E8B840)",
                  transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                  boxShadow: "0 0 10px rgba(184,134,11,0.6)",
                }}
              />
            </div>
          </div>

          {/* Question */}
          <div style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "bold",
                color: "#FFF8E7",
                margin: "0 0 0.75rem",
                lineHeight: 1.2,
              }}
            >
              {steps[currentStep - 1].title}
            </h2>
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "0.9rem",
                color: "rgba(255,248,231,0.5)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {steps[currentStep - 1].subtitle}
            </p>
          </div>

          {/* Options */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                steps[currentStep - 1].options.length <= 3
                  ? `repeat(${steps[currentStep - 1].options.length}, 1fr)`
                  : "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {steps[currentStep - 1].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => choose(opt.value)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 0,
                  border: "1px solid rgba(184,134,11,0.2)",
                  backgroundColor: "rgba(255,248,231,0.02)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "left",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(184,134,11,0.7)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(184,134,11,0.06)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(184,134,11,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(184,134,11,0.2)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,248,231,0.02)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Swatch bar */}
                <div
                  style={{
                    width: "100%",
                    height: "90px",
                    background: opt.gradient || opt.swatch,
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                    }}
                  />
                </div>
                {/* Label */}
                <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.05rem",
                      fontWeight: "bold",
                      color: "#FFF8E7",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    {opt.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.72rem",
                      color: "rgba(255,248,231,0.45)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {opt.sublabel}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── RESULTS SCREEN ── */}
      {done && (
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "4rem 2rem 6rem",
            animation: "fadeInUp 0.7s ease both",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                width: 48,
                height: 48,
                margin: "0 auto 1.5rem",
                borderRadius: "50%",
                border: "1px solid #B8860B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B8860B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "Arial",
                fontSize: "0.68rem",
                color: "#B8860B",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Shade Profile Complete
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "#FFF8E7",
                margin: "0 0 1rem",
                fontWeight: "bold",
              }}
            >
              Your Perfect Match
            </h2>
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "0.9rem",
                color: "rgba(255,248,231,0.55)",
                margin: 0,
              }}
            >
              Curated for your {undertone} undertone · {depth} depth · {finish}{" "}
              finish
            </p>
          </div>

          {/* Profile Card */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(184,134,11,0.12) 0%, rgba(184,134,11,0.04) 100%)",
              border: "1px solid rgba(184,134,11,0.3)",
              borderRadius: "12px",
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3.5rem",
              textAlign: "center",
            }}
          >
            {[
              {
                label: "Undertone",
                value: undertone.charAt(0).toUpperCase() + undertone.slice(1),
              },
              {
                label: "Skin Depth",
                value: depth.charAt(0).toUpperCase() + depth.slice(1),
              },
              {
                label: "Finish",
                value: finish.charAt(0).toUpperCase() + finish.slice(1),
              },
              { label: "Profile", value: "Ghunghat Match" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "0.65rem",
                    color: "#B8860B",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    margin: "0 0 0.4rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    color: "#FFF8E7",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Recommended Products */}
          <h3
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              color: "#FFF8E7",
              margin: "0 0 1.5rem",
              textAlign: "center",
            }}
          >
            Matched For You
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            {recs.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                style={{
                  textDecoration: "none",
                  display: "block",
                  border: "1px solid rgba(184,134,11,0.2)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "rgba(255,248,231,0.02)",
                  transition: "border-color 0.25s, transform 0.25s",
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
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="220px"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      right: "0.75rem",
                      backgroundColor: "rgba(13,4,4,0.85)",
                      border: "1px solid #B8860B",
                      borderRadius: "999px",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Arial",
                        fontSize: "0.6rem",
                        color: "#B8860B",
                        fontWeight: "bold",
                      }}
                    >
                      {p.match} Match
                    </span>
                  </div>
                </div>
                <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.65rem",
                      color: "#B8860B",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: "0 0 0.3rem",
                    }}
                  >
                    {p.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.95rem",
                      color: "#FFF8E7",
                      margin: "0 0 0.4rem",
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.9rem",
                      color: "#B8860B",
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    {p.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/skincare"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                background: "linear-gradient(135deg, #B8860B 0%, #8A6400 100%)",
                color: "#fff",
                fontFamily: "Arial",
                fontSize: "0.78rem",
                fontWeight: "bold",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                boxShadow: "0 4px 24px rgba(184,134,11,0.3)",
              }}
            >
              Shop All Matches
            </Link>
            <button
              onClick={reset}
              style={{
                padding: "1rem 2.5rem",
                border: "1px solid rgba(184,134,11,0.5)",
                color: "#B8860B",
                backgroundColor: "transparent",
                fontFamily: "Arial",
                fontSize: "0.78rem",
                fontWeight: "bold",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              Retake Quiz
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "0.78rem",
              color: "rgba(255,248,231,0.2)",
              marginTop: "3rem",
            }}
          >
            ✦ Your profile is unique to you. Our experts curate these matches
            based on decades of Indian beauty research. ✦
          </p>
        </div>
      )}

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
