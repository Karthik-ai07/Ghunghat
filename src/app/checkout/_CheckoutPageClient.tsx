"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

type Step = "address" | "payment" | "success";

function FormField({ label, type = "text", placeholder, required = false }: { label: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label style={{ display: "block", fontFamily: "Arial", fontSize: "0.7rem", fontWeight: "bold", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
        {label}{required && <span style={{ color: "#8B0000" }}> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={{ width: "100%", padding: "0.875rem 1rem", border: "1px solid #CCCCCC", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.9rem", color: "#1A1A1A", backgroundColor: "#fff", outline: "none", boxSizing: "border-box" }}
      />
    </div>
  );
}

export default function CheckoutPageClient() {
  const [step, setStep] = useState<Step>("address");
  const [payMethod, setPayMethod] = useState<"upi" | "card" | "cod">("upi");
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.totalPrice());
  const totalItems = useCartStore((s) => s.totalItems());
  const clearCart = useCartStore((s) => s.clearCart);
  
  const delivery = totalPrice >= 499 ? 0 : 49;
  const grandTotal = totalPrice + delivery;
  const savings = items.reduce((s, i) => s + (i.mrp - i.price) * i.quantity, 0);

  return (
    <div style={{ backgroundColor: "#FFF8E7", minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Consistent H1 for SEO */}
      <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", border: 0 }}>
        Ghunghat Secure Checkout — India's Premium Beauty Store
      </h1>

      {items.length === 0 && step !== "success" ? (
        <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: "#8B0000", marginBottom: "1rem" }}>Nothing to check out</h2>
          <p style={{ fontFamily: "Arial", color: "#666", marginBottom: "2rem" }}>Your cart is empty. Please add items to proceed.</p>
          <Link href="/" style={{ padding: "1rem 2rem", backgroundColor: "#8B0000", color: "#fff", textDecoration: "none", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Return to Gallery
          </Link>
        </div>
      ) : step === "success" ? (
        <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <div style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "12px", padding: "3.5rem 2.5rem", maxWidth: "480px", width: "100%" }}>
            <div style={{ width: "64px", height: "64px", backgroundColor: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "2rem" }}>✓</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: "#8B0000", margin: "0 0 0.5rem" }}>Order Placed!</h2>
            <p style={{ fontFamily: "Arial", fontSize: "0.9rem", color: "#555", marginBottom: "0.5rem" }}>Thank you for choosing Ghunghat.</p>
            <p style={{ fontFamily: "Arial", fontSize: "0.8rem", color: "#888", marginBottom: "2rem" }}>
              Your order confirmation has been sent. Expected delivery: 3–5 business days.
            </p>
            <div style={{ backgroundColor: "#FFF8E7", padding: "1rem", borderRadius: "6px", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "Arial", fontSize: "0.75rem", color: "#B8860B", margin: 0, fontWeight: "bold" }}>
                ✦ You saved ₹{savings.toLocaleString("en-IN")} on this order!
              </p>
            </div>
            <Link href="/" style={{ display: "block", padding: "1rem", backgroundColor: "#8B0000", color: "#fff", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", borderRadius: "4px" }}>
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div style={{ backgroundColor: "#2C0A0A", padding: "2.5rem 2rem", textAlign: "center" }}>
            {/* Progress steps */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", maxWidth: "360px", margin: "0 auto" }}>
              {(["address", "payment"] as Step[]).map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: step === s || (s === "address" && step === "payment") ? "#B8860B" : "rgba(184,134,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "Arial", fontSize: "0.8rem", fontWeight: "bold", transition: "background 0.3s" }}>
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: "Arial", fontSize: "0.6rem", color: step === s ? "#B8860B" : "rgba(255,248,231,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s}</span>
                  </div>
                  {i < 1 && <div style={{ flex: 1, height: "1px", backgroundColor: step === "payment" ? "#B8860B" : "rgba(184,134,11,0.3)", margin: "0 0.5rem", marginBottom: "1.2rem", transition: "background 0.3s" }} />}
                </div>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 2rem", display: "grid", gridTemplateColumns: "1fr min(320px, 100%)", gap: "2rem", alignItems: "start" }}>
            
            {/* STEP 1: Address */}
            {step === "address" && (
              <div style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "10px", padding: "2rem" }}>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#8B0000", margin: "0 0 1.5rem" }}>Delivery Address</h2>
                <form onSubmit={(e) => { e.preventDefault(); setStep("payment"); }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField label="First Name" placeholder="Priya" required />
                    <FormField label="Last Name" placeholder="Sharma" required />
                  </div>
                  <FormField label="Phone" type="tel" placeholder="+91 98765 43210" required />
                  <FormField label="Email" type="email" placeholder="priya@example.com" required />
                  <FormField label="Address Line 1" placeholder="Flat / House No., Building" required />
                  <FormField label="Address Line 2" placeholder="Street, Area, Landmark" />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                    <FormField label="City" placeholder="Mumbai" required />
                    <FormField label="State" placeholder="Maharashtra" required />
                    <FormField label="PIN Code" placeholder="400001" required />
                  </div>
                  <button type="submit" style={{ marginTop: "0.5rem", padding: "1rem", backgroundColor: "#8B0000", color: "#fff", border: "none", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>
                    Continue to Payment →
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: Payment */}
            {step === "payment" && (
              <div style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "10px", padding: "2rem" }}>
                <button onClick={() => setStep("address")} style={{ background: "none", border: "none", fontFamily: "Arial", fontSize: "0.8rem", color: "#8B0000", cursor: "pointer", marginBottom: "1rem", padding: 0 }}>
                  ← Back to Address
                </button>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#8B0000", margin: "0 0 1.5rem" }}>Payment</h2>

                {/* Payment method selector */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  {(["upi", "card", "cod"] as const).map((method) => (
                    <button
                      key={method}
                      onClick={() => setPayMethod(method)}
                      style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", border: `2px solid ${payMethod === method ? "#B8860B" : "#E8D5A3"}`, backgroundColor: payMethod === method ? "#FFF8E7" : "#fff", borderRadius: "8px", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>{method === "upi" ? "📱" : method === "card" ? "💳" : "🏠"}</span>
                      <div>
                        <p style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "0.9rem", color: "#1A1A1A", margin: 0 }}>
                          {method === "upi" ? "UPI / Google Pay / PhonePe" : method === "card" ? "Credit / Debit Card" : "Cash on Delivery"}
                        </p>
                        <p style={{ fontFamily: "Arial", fontSize: "0.75rem", color: "#888", margin: "0.1rem 0 0" }}>
                          {method === "upi" ? "Instant, no fees" : method === "card" ? "Visa, Mastercard, Rupay" : "Pay when you receive your order"}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {payMethod === "upi" && (
                  <FormField label="UPI ID" placeholder="yourname@paytm" required />
                )}
                {payMethod === "card" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <FormField label="Card Number" placeholder="1234 5678 9012 3456" required />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <FormField label="Expiry" placeholder="MM / YY" required />
                      <FormField label="CVV" placeholder="•••" required />
                    </div>
                    <FormField label="Name on Card" placeholder="Priya Sharma" required />
                  </div>
                )}
                {payMethod === "cod" && (
                  <p style={{ fontFamily: "Arial", fontSize: "0.85rem", color: "#555", padding: "1rem", backgroundColor: "#FFF8E7", borderRadius: "6px", lineHeight: 1.6 }}>
                    Pay ₹{grandTotal.toLocaleString("en-IN")} in cash when your order arrives. No advance payment needed.
                  </p>
                )}

                <button
                  onClick={() => { clearCart(); setStep("success"); }}
                  style={{ width: "100%", marginTop: "1.5rem", padding: "1rem", backgroundColor: "#8B0000", color: "#fff", border: "none", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}
                >
                  🔒 Place Order — ₹{grandTotal.toLocaleString("en-IN")}
                </button>
                <p style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#aaa", textAlign: "center", marginTop: "0.75rem" }}>
                  Secured by Cashfree · 256-bit SSL encryption
                </p>
              </div>
            )}

            {/* Order summary sidebar */}
            <div style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "10px", padding: "1.5rem", position: "sticky", top: "5.5rem" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#1A1A1A", margin: "0 0 1rem" }}>
                Your Order ({totalItems} item{totalItems !== 1 ? "s" : ""})
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
                {items.map((item) => (
                  <div key={item.id} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div style={{ position: "relative", width: "44px", height: "44px", borderRadius: "4px", border: "1px solid #E8D5A3", overflow: "hidden" }}>
                      <Image src={item.img} alt={`Thumbnail of ${item.name}`} fill style={{ objectFit: "cover" }} sizes="44px" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: "Arial", fontSize: "0.78rem", fontWeight: "bold", color: "#1A1A1A", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                      <p style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#888", margin: "0.1rem 0 0" }}>Qty: {item.quantity}</p>
                    </div>
                    <span style={{ fontFamily: "Arial", fontSize: "0.85rem", fontWeight: "bold", color: "#8B0000", flexShrink: 0 }}>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div style={{ height: "1px", backgroundColor: "#E8D5A3", margin: "1rem 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "Arial", fontSize: "0.82rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#555" }}>
                  <span>Subtotal</span><span>₹{items.reduce((s, i) => s + i.mrp * i.quantity, 0).toLocaleString("en-IN")}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#2E7D32" }}>
                  <span>Savings</span><span>−₹{savings.toLocaleString("en-IN")}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#555" }}>
                  <span>Delivery</span><span style={{ color: delivery === 0 ? "#2E7D32" : "#555" }}>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
                </div>
              </div>
              <div style={{ height: "1px", backgroundColor: "#E8D5A3", margin: "1rem 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: "bold" }}>
                <span>Total</span><span style={{ color: "#8B0000" }}>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
