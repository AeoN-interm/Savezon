// src/services/api.ts
import { Product } from "../context/CartContext";

// Choose proxy for development and direct API in production
const API_BASE = import.meta.env.DEV
  ? "http://localhost:8080/https://fakestoreapi.com"
  : "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    throw error;
  }
};
