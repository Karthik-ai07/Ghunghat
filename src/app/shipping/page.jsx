import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Shipping Policy | Ghunghat — Free Ghunghat Delivery India",
  description:
    "Learn about our worldwide shipping for bridal ghunghats and wedding dupattas. Free delivery across India for premium traditional bridal wear orders.",
  alternates: {
    canonical: "/shipping",
  },
  openGraph: {
    title: "Shipping & Returns | Ghunghat — Bridal Ghunghat Delivery",
    description: "Transparent shipping and return policies for your wedding collection.",
    url: "https://ghunghat.com/shipping",
    type: "website",
  },
};

export default function ShippingPage() {
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
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "2.5rem",
            color: "#FFF8E7",
            margin: "0 0 0.5rem",
          }}
        >
          Delivery &amp; Returns for Traditional Ghunghat
        </h1>
        <p
          style={{
            fontFamily: "Arial",
            fontSize: "0.9rem",
            color: "rgba(255,248,231,0.65)",
          }}
        >
          Transparent policies crafted around your trust.
        </p>
      </div>

      <div
        style={{
          maxWidth: "780px",
          margin: "4rem auto",
          padding: "0 2rem 4rem",
        }}
      >
        {[
          {
            title: "🚚 Shipping",
            items: [
              { label: "Standard Delivery", val: "3–5 business days" },
              { label: "Express Delivery", val: "1–2 business days (+₹99)" },
              { label: "Free Delivery Threshold", val: "Orders above ₹499" },
              { label: "COD Available", val: "Yes, on all orders" },
              {
                label: "Dispatch Time",
                val: "Orders before 2pm IST dispatched same day",
              },
              { label: "Tracking", val: "Email + SMS tracking link provided" },
            ],
          },
          {
            title: "🔄 Returns & Refunds",
            items: [
              { label: "Return Window", val: "7 days from delivery date" },
              { label: "Eligibility", val: "Unopened, sealed products only" },
              {
                label: "Defective Products",
                val: "Full refund or replacement — contact us with photo",
              },
              {
                label: "Refund Mode",
                val: "Original payment method within 5–7 business days",
              },
              {
                label: "Non-returnable Items",
                val: "Opened cosmetics, gift sets with used items",
              },
            ],
          },
          {
            title: "📦 Packaging",
            items: [
              {
                label: "Tamper-Proof Sealing",
                val: "All orders are sealed before dispatch",
              },
              {
                label: "Eco Packaging",
                val: "We use recyclable and minimal packaging",
              },
              {
                label: "Gift Orders",
                val: "Complimentary gift wrap + personalised note available",
              },
            ],
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.5rem",
                color: "#8B0000",
                marginBottom: "1rem",
              }}
            >
              {section.title}
            </h2>
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E8D5A3",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {section.items.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                    borderBottom:
                      i < section.items.length - 1
                        ? "1px solid #F5EDD8"
                        : "none",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.85rem",
                      color: "#555",
                      fontWeight: "bold",
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "Arial",
                      fontSize: "0.85rem",
                      color: "#1A1A1A",
                    }}
                  >
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link
            href="/contact"
            style={{
              fontFamily: "Arial",
              fontSize: "0.8rem",
              color: "#8B0000",
              textDecoration: "underline",
            }}
          >
            Have a question about your order? Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
