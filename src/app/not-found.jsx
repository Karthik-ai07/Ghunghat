import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#2C0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        color: "#FFF8E7",
      }}
    >
      {/* Decorative mandala */}
      <div
        style={{ opacity: 0.06, marginBottom: "2rem", position: "absolute" }}
      >
        <svg
          viewBox="0 0 200 200"
          width="400"
          height="400"
          fill="none"
          stroke="#B8860B"
        >
          <circle cx="100" cy="100" r="95" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="45" strokeWidth="0.6" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (deg) => (
              <line
                key={deg}
                x1="100"
                y1="5"
                x2="100"
                y2="195"
                strokeWidth="0.4"
                transform={`rotate(${deg} 100 100)`}
              />
            ),
          )}
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "8rem",
            fontWeight: "bold",
            color: "#B8860B",
            lineHeight: 1,
            display: "block",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </span>

        <div
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: "#B8860B",
            margin: "1.5rem auto",
          }}
        />

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: "#FFF8E7",
            marginBottom: "1rem",
          }}
        >
          The Veil Remains Closed
        </h1>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "1rem",
            color: "rgba(255,248,231,0.65)",
            maxWidth: "400px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          The page you&apos;re looking for seems to have slipped behind the
          ghunghat. Let&apos;s guide you back to beauty.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.875rem 2rem",
              backgroundColor: "#8B0000",
              color: "#FFF8E7",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.75rem",
              fontWeight: "bold",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "background 0.2s",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/skincare"
            style={{
              display: "inline-block",
              padding: "0.875rem 2rem",
              border: "1px solid rgba(184,134,11,0.6)",
              color: "#B8860B",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.75rem",
              fontWeight: "bold",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Shop Collection
          </Link>
        </div>

        <p
          style={{
            marginTop: "4rem",
            fontFamily: "Georgia, serif",
            fontSize: "0.75rem",
            fontStyle: "italic",
            color: "rgba(184,134,11,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          ✦ Curated Beauty. Royal Grace. Pure Tradition. ✦
        </p>
      </div>
    </div>
  );
}
