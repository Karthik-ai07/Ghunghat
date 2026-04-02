"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AccountPageContent() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  if (!mounted) return null; // Avoid hydration flash

  return (
    <div
      style={{
        backgroundColor: "#0D0404",
        minHeight: "100vh",
        paddingTop: "5rem",
        padding: "5rem 2rem 4rem",
        position: "relative",
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          top: "5%",
          right: "-10%",
          background: "radial-gradient(circle, #B8860B 0%, transparent 60%)",
          opacity: 0.04,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          bottom: "-10%",
          left: "-20%",
          background: "radial-gradient(circle, #B8860B 0%, transparent 60%)",
          opacity: 0.03,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          animation: "fadeInUp 0.6s ease both",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "0.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "Arial",
                fontSize: "0.65rem",
                color: "#B8860B",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Client Portal
            </span>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 2.75rem)",
                fontWeight: "bold",
                color: "#FFF8E7",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {user
                ? `Namaste, ${user.name?.split(" ")[0] || "Guest"}`
                : "My Account"}
            </h1>
          </div>
          {user && (
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
            >
              <div className="hidden sm:block" style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    color: "#FFF8E7",
                    margin: "0 0 0.2rem",
                    fontWeight: "bold",
                  }}
                >
                  {user.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    justifyContent: "flex-end",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.8 }}
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.75rem",
                      color: "rgba(255,248,231,0.5)",
                      margin: 0,
                    }}
                  >
                    {user.email}
                  </p>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(184,134,11,0.5)",
                  padding: "2px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  {user.image && (
                    <img
                      src={user.image}
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(184,134,11,0.5), transparent)",
            marginBottom: "3rem",
            marginTop: "1rem",
          }}
        />

        {/* Dashboard Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            {
              icon: "📦",
              title: "My Orders",
              desc: "Track your deliveries & view history",
              href: "/account/orders",
            },
            {
              icon: "❤️",
              title: "Wishlist",
              desc: "Products you've saved for later",
              href: "/account/wishlist",
            },
            {
              icon: "⭐",
              title: "Ghunghat Rewards",
              desc: "View your loyalty points & rewards",
              href: "/account/rewards",
            },
            {
              icon: "📍",
              title: "Saved Addresses",
              desc: "Manage delivery addresses",
              href: "/account/addresses",
            },
            {
              icon: "👤",
              title: "Profile Settings",
              desc: "Update name, email & birthday",
              href: "/account/profile",
            },
            {
              icon: "🎨",
              title: "My Shade Profile",
              desc: "Retake shade quiz or view your profile",
              href: "/shade-finder",
            },
          ].map(({ icon, title, desc, href }) => (
            <Link
              key={href}
              href={user ? href : "/login"}
              style={{
                display: "block",
                padding: "1.75rem",
                backgroundColor: "rgba(255,248,231,0.02)",
                border: "1px solid rgba(184,134,11,0.15)",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(184,134,11,0.06)";
                e.currentTarget.style.borderColor = "rgba(184,134,11,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,248,231,0.02)";
                e.currentTarget.style.borderColor = "rgba(184,134,11,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    display: "block",
                    filter: "drop-shadow(0 4px 10px rgba(184,134,11,0.15))",
                  }}
                >
                  {icon}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "rgba(184,134,11,0.4)" }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#FFF8E7",
                  margin: "0 0 0.35rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Arial",
                  fontSize: "0.8rem",
                  color: "rgba(255,248,231,0.5)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer Area */}
        {user && (
          <div
            style={{
              marginTop: "3.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                padding: "0.875rem 2rem",
                background: "transparent",
                border: "1px solid rgba(184,134,11,0.4)",
                borderRadius: "4px",
                color: "#B8860B",
                fontFamily: "Arial",
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(184,134,11,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Sign Out Securely
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
