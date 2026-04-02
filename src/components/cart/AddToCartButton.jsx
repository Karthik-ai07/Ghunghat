"use client";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export function AddToCartButton({ product, style }) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
  const [added, setAdded] = useState(false);

  const inCart = items.find((i) => i.id === product.id);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      onClick={handleAdd}
      style={{
        padding: "0.6rem 1.25rem",
        backgroundColor: added ? "#2E7D32" : "#8B0000",
        color: "#FFF",
        border: "none",
        borderRadius: "4px",
        fontFamily: "Arial",
        fontSize: "0.68rem",
        fontWeight: "bold",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background-color 0.3s ease, transform 0.1s ease",
        transform: added ? "scale(0.97)" : "scale(1)",
        ...style,
      }}
    >
      {added
        ? "✓ Added!"
        : inCart
          ? `In Cart (${inCart.quantity})`
          : "Add to Cart"}
    </button>
  );
}
