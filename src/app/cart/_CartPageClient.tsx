"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
    </svg>
  );
}

function MinusIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>;
}
function PlusIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
}

export default function CartPageClient() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalItems = useCartStore((s) => s.totalItems());
  const totalPrice = useCartStore((s) => s.totalPrice());

  const savings = items.reduce((sum, i) => sum + (i.mrp - i.price) * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div style={{ backgroundColor: "#FFF8E7", minHeight: "100vh", paddingTop: "6rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "6rem 2rem 4rem", textAlign: "center" }}>
        <span style={{ fontSize: "4rem", marginBottom: "1rem" }}>🧺</span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: "#8B0000", marginBottom: "0.5rem" }}>Your cart is empty</h1>
        <p style={{ fontFamily: "Arial", fontSize: "0.9rem", color: "#555", marginBottom: "2rem", maxWidth: "380px", lineHeight: 1.7 }}>
          Discover curated beauty products crafted for Indian skin — quality-assured, every single one.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/skincare" style={{ padding: "0.875rem 2rem", backgroundColor: "#8B0000", color: "#fff", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Shop Skincare</Link>
          <Link href="/makeup" style={{ padding: "0.875rem 2rem", border: "1px solid #B8860B", color: "#B8860B", fontFamily: "Arial", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Shop Makeup</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FFF8E7", minHeight: "100vh", paddingTop: "5rem" }}>
      <div style={{ backgroundColor: "#2C0A0A", padding: "3rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: "bold", color: "#FFF8E7", margin: 0 }}>Your Cart</h1>
        <p style={{ fontFamily: "Arial", fontSize: "0.85rem", color: "rgba(255,248,231,0.6)", marginTop: "0.5rem" }}>
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem", display: "grid", gridTemplateColumns: "1fr min(340px, 100%)", gap: "2rem", alignItems: "start" }}>

        {/* Cart Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "1.25rem", backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "10px", padding: "1.25rem", alignItems: "flex-start" }}>
              {/* Image */}
              <div style={{ position: "relative", width: "100px", height: "100px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", backgroundColor: "#f9f1e0" }}>
                <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} sizes="100px" />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: "Arial", fontSize: "0.65rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.category} · {item.brand}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: "bold", color: "#1A1A1A", margin: "0.2rem 0 0.4rem", lineHeight: 1.3 }}>{item.name}</h3>
                <span style={{ display: "inline-block", padding: "0.15rem 0.5rem", backgroundColor: "#FFF8E7", border: "1px solid #B8860B", borderRadius: "999px", fontSize: "0.58rem", fontFamily: "Arial", color: "#B8860B", fontWeight: "bold" }}>✓ {item.badge}</span>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", flexWrap: "wrap", gap: "0.75rem" }}>
                  {/* Quantity controls */}
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid #E8D5A3", borderRadius: "4px", overflow: "hidden" }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ width: "34px", height: "34px", border: "none", backgroundColor: "#FFF8E7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#8B0000" }}
                    ><MinusIcon /></button>
                    <span style={{ width: "40px", textAlign: "center", fontFamily: "Arial", fontSize: "0.9rem", fontWeight: "bold", color: "#1A1A1A" }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ width: "34px", height: "34px", border: "none", backgroundColor: "#FFF8E7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#8B0000" }}
                    ><PlusIcon /></button>
                  </div>

                  {/* Price & remove */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: "bold", color: "#8B0000" }}>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                      {item.quantity > 1 && <p style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#888", margin: "0" }}>₹{item.price.toLocaleString("en-IN")} each</p>}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{ width: "32px", height: "32px", border: "1px solid #FFCDD2", borderRadius: "50%", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#C62828", transition: "background 0.2s" }}
                      aria-label="Remove item"
                    ><TrashIcon /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Clear cart */}
          <button onClick={clearCart} style={{ alignSelf: "flex-end", background: "none", border: "none", fontFamily: "Arial", fontSize: "0.75rem", color: "#C62828", cursor: "pointer", textDecoration: "underline", padding: "0.25rem" }}>
            Clear entire cart
          </button>
        </div>

        {/* Order Summary */}
        <div style={{ backgroundColor: "#fff", border: "1px solid #E8D5A3", borderRadius: "10px", padding: "1.75rem", position: "sticky", top: "5.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: "bold", color: "#1A1A1A", margin: "0 0 1.25rem" }}>Order Summary</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.875rem", fontFamily: "Arial" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#555" }}>
              <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
              <span>₹{items.reduce((s, i) => s + i.mrp * i.quantity, 0).toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#2E7D32", fontWeight: "bold" }}>
              <span>You save</span>
              <span>− ₹{savings.toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#555" }}>
              <span>Delivery</span>
              <span style={{ color: "#2E7D32" }}>{totalPrice >= 499 ? "FREE" : "₹49"}</span>
            </div>
            {totalPrice < 499 && (
              <p style={{ fontSize: "0.72rem", color: "#B8860B", margin: "0.25rem 0 0" }}>
                Add ₹{(499 - totalPrice).toLocaleString("en-IN")} more for free delivery.
              </p>
            )}
          </div>

          <div style={{ height: "1px", backgroundColor: "#E8D5A3", margin: "1.25rem 0" }} />

          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: "bold", color: "#1A1A1A", marginBottom: "1.5rem" }}>
            <span>Total</span>
            <span style={{ color: "#8B0000" }}>₹{(totalPrice + (totalPrice >= 499 ? 0 : 49)).toLocaleString("en-IN")}</span>
          </div>

          <button
            onClick={() => router.push("/checkout")}
            style={{ width: "100%", padding: "1rem", backgroundColor: "#8B0000", color: "#fff", border: "none", borderRadius: "4px", fontFamily: "Arial", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", marginBottom: "0.75rem" }}
          >
            Proceed to Checkout →
          </button>

          <Link href="/skincare" style={{ display: "block", textAlign: "center", fontFamily: "Arial", fontSize: "0.75rem", color: "#8B0000", textDecoration: "underline" }}>
            ← Continue Shopping
          </Link>

          <div style={{ marginTop: "1.5rem", padding: "0.75rem", backgroundColor: "#FFF8E7", borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#888", margin: 0, lineHeight: 1.6 }}>
              🔒 Secure checkout · COD available · Easy returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
