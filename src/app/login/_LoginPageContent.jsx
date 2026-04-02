"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function LoginPageContent() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If already logged in, push to account
  useEffect(() => {
    if (session?.user) {
      router.push("/account");
    }
  }, [session, router]);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    setIsGoogleLoading(true);
    // Real Google Auth Trigger
    signIn("google", { callbackUrl: "/account" });
  };

  // Prevent flash while redirecting or before hydration
  if (!mounted) return null;
  if (session?.user || status === "loading") return null;

  return (
    <div
      style={{
        backgroundColor: "#0D0404",
        minHeight: "100vh",
        paddingTop: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          top: "-10%",
          left: "-10%",
          background: "radial-gradient(circle, #B8860B 0%, transparent 60%)",
          opacity: 0.05,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          bottom: "10%",
          right: "-10%",
          background: "radial-gradient(circle, #B8860B 0%, transparent 60%)",
          opacity: 0.04,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          position: "relative",
          zIndex: 1,
          animation: "fadeInUp 0.6s ease both",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#B8860B",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              GHUNGHAT
            </span>
          </Link>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: "0.85rem",
              color: "rgba(255,248,231,0.5)",
              marginTop: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            Your curated beauty journey begins here.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "rgba(20, 6, 6, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(184,134,11,0.2)",
            borderRadius: "10px",
            padding: "2.5rem",
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#FFF8E7",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Welcome Back
          </h1>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
            style={{
              width: "100%",
              padding: "0.875rem",
              border: "1px solid rgba(184,134,11,0.4)",
              borderRadius: "4px",
              backgroundColor: "rgba(255,248,231,0.02)",
              fontFamily: "Arial",
              fontSize: "0.8rem",
              color: "#FFF8E7",
              cursor: isGoogleLoading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              transition: "background 0.2s",
            }}
          >
            {isGoogleLoading ? (
              <svg
                className="animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                width="16"
                height="16"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="3"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="#B8860B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
            )}
            {isGoogleLoading ? "Connecting..." : "Continue with Google"}
          </button>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "0.8rem",
              color: "rgba(255,248,231,0.5)",
              marginTop: "2rem",
              marginBottom: 0,
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              style={{
                color: "#B8860B",
                fontWeight: "bold",
                textDecoration: "none",
                borderBottom: "1px solid rgba(184,134,11,0.5)",
              }}
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
