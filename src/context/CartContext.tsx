"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/mockProducts";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  selectedVolume: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedVolumeIndex: number) => void;
  removeFromCart: (id: string, volume: string) => void;
  updateQuantity: (id: string, volume: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load from localStorage only on client
  useEffect(() => {
    const savedCart = localStorage.getItem("ah_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("ah_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, selectedVolumeIndex: number) => {
    const hasVolumes = product.volumes && product.volumes.length > 0;
    const selectedVolume = hasVolumes ? product.volumes![selectedVolumeIndex].label : product.volume;
    const selectedPrice = hasVolumes ? product.volumes![selectedVolumeIndex].price : product.price;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.selectedVolume === selectedVolume);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedVolume === selectedVolume
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: selectedPrice,
          imageUrl: product.imageUrl,
          selectedVolume,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string, volume: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedVolume === volume)));
  };

  const updateQuantity = (id: string, volume: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.selectedVolume === volume) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
