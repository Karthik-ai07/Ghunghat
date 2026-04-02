import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Ghunghat FAQ | Buy Ghunghat Online India Quality Help",
  description:
    "Ghunghat's comprehensive FAQ for bridal ghunghat, wedding dupattas, and traditional ghunghat beauty rituals. Find answers on quality and shipping.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Ghunghat",
    description: "Common questions and beauty advice.",
    url: "https://ghunghat.com/faq",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I know a product is safe for my skin?",
    a: "Every product on Ghunghat carries one of three QA badges: Dermatologist Tested, Lab Certified, or Ghunghat Curated — indicating the level of verification performed before listing.",
  },
  {
    q: "Can I use the Shade Finder if I have mixed undertones?",
    a: "Yes — select 'Neutral' in the undertone step. We'll recommend products with neutral-undertone formulations that work beautifully for mixed complexions.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days of delivery for unopened products. For quality issues with opened products, please contact us with a photo and we'll resolve it promptly.",
  },
  {
    q: "Do you ship pan-India?",
    a: "Yes, Ghunghat ships to all 28 states and 8 Union Territories. Delivery takes 3–5 business days. Free delivery on orders above ₹499.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes, COD is available on all orders. Simply choose 'Cash on Delivery' at checkout.",
  },
  {
    q: "How do Ghunghat Reward Points work?",
    a: "You earn 1 point for every ₹10 spent. Points can be redeemed at checkout (100 points = ₹10 off). Points expire after 12 months of inactivity.",
  },
  {
    q: "Are the products cruelty-free?",
    a: "We prioritise cruelty-free and vegan formulations. Each product listing specifies its cruelty-free and vegan status.",
  },
  {
    q: "How quickly is my order dispatched?",
    a: "Orders placed before 2pm IST are dispatched the same day. Orders placed after 2pm are dispatched the next business day.",
  },
];

export default function FAQPage() {
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
          Traditional Ghunghat FAQ
        </h1>
        <p
          style={{
            fontFamily: "Arial",
            fontSize: "0.9rem",
            color: "rgba(255,248,231,0.65)",
            margin: 0,
          }}
        >
          Find answers to the most common questions about orders, products &
          returns.
        </p>
      </div>

      <div
        style={{
          maxWidth: "780px",
          margin: "4rem auto",
          padding: "0 2rem 4rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((item, i) => (
            <details
              key={i}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E8D5A3",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#8B0000",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {item.q}
                <span
                  style={{
                    flexShrink: 0,
                    color: "#B8860B",
                    fontSize: "1.25rem",
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  fontFamily: "Arial",
                  fontSize: "0.88rem",
                  color: "#555",
                  lineHeight: 1.75,
                  marginTop: "0.875rem",
                  marginBottom: 0,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "#2C0A0A",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              color: "#FFF8E7",
              marginBottom: "0.5rem",
            }}
          >
            Still have questions?
          </p>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: "0.82rem",
              color: "rgba(255,248,231,0.65)",
              marginBottom: "1.25rem",
            }}
          >
            Our team is happy to help you find the perfect product or resolve
            any issue.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              backgroundColor: "#B8860B",
              color: "#fff",
              fontFamily: "Arial",
              fontSize: "0.75rem",
              fontWeight: "bold",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
