"use client";

import { X, Plus, Minus, Trash, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const phoneNumber = "919055352698";
    let message = "Asalamualikum, I'd like to place an order:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.selectedVolume}) x ${item.quantity} - ₹${item.price * item.quantity}\n`;
    });

    message += `\nTotal: ₹${totalPrice}\n\nThank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] h-screen w-screen transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      style={{ backgroundColor: "var(--background)", opacity: 1 }}
    >
      <div className="flex flex-col h-full w-full relative z-[10000]" style={{ backgroundColor: "var(--background)" }}>
        {/* Header: Solid, Non-Transparent */}
        <div className="relative p-4 sm:p-8 border-b border-amber-500/20 shadow-sm" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 sm:p-3 bg-amber-600 rounded-2xl text-white shadow-lg shadow-amber-600/20">
                <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl font-black font-cinzel tracking-tighter text-foreground uppercase">Shopping Bag</h2>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black text-muted-foreground mt-0.5">{cart.length} Exclusive Items</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-3 hover:bg-accent rounded-full transition-all hover:rotate-90 active:scale-95 border border-border group"
              aria-label="Close boutique cart"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-foreground group-hover:text-amber-600" />
            </button>
          </div>
        </div>

        {/* Content Area: Solid, Non-Transparent */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-10 scrollbar-hide" style={{ backgroundColor: "var(--background)" }}>
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in duration-700">
              <div className="w-32 h-32 bg-amber-500/5 rounded-full flex items-center justify-center border border-amber-500/10 scale-110">
                <ShoppingBag className="w-12 h-12 text-amber-600/20" />
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-black text-foreground font-cinzel uppercase tracking-tighter italic">Your Bag is Empty</p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">Discover our premium collection of authentic attars and perfumes curated just for you.</p>
              </div>
              <button
                onClick={onClose}
                className="px-10 py-4 bg-amber-600 text-white font-black rounded-full text-xs hover:bg-amber-700 transition-all hover:scale-105 shadow-xl active:scale-95 uppercase tracking-[0.2em]"
              >
                Back to Boutique
              </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {cart.map((item, idx) => (
                <div
                  key={`${item.id}-${item.selectedVolume}`}
                  className="group flex gap-4 sm:gap-6 p-4 rounded-2xl border border-border bg-card shadow-sm hover:border-amber-500/40 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-muted ring-1 ring-border shadow-md">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm sm:text-base font-black leading-tight text-foreground group-hover:text-amber-600 transition-colors uppercase tracking-tight line-clamp-1">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedVolume)}
                          className="p-2 text-muted-foreground hover:text-red-600 transition-all hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full"
                          aria-label="Remove item"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500/10 rounded text-[9px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">{item.selectedVolume}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 bg-accent/50 rounded-full px-3 py-1 ring-1 ring-border/50">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedVolume, -1)}
                          className="p-1 text-muted-foreground hover:text-amber-600 transition-colors active:scale-150"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-black min-w-[20px] text-center text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedVolume, 1)}
                          className="p-1 text-muted-foreground hover:text-amber-600 transition-colors active:scale-150"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-base sm:text-lg font-black text-foreground">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Area: Solid, Non-Transparent */}
        {cart.length > 0 && (
          <div className="p-6 sm:p-10 border-t shadow-[0_-15px_40px_rgba(0,0,0,0.05)]" style={{ backgroundColor: "var(--background)" }}>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                  <span>Shipping Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between text-2xl sm:text-5xl font-black">
                  <span className="text-foreground font-cinzel italic tracking-tighter">Total Due</span>
                  <span className="text-amber-600">₹{totalPrice}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={clearCart}
                  className="order-2 sm:order-1 px-8 py-4 sm:py-5 rounded-2xl border-2 border-border font-black text-xs sm:text-sm text-foreground/40 hover:bg-neutral-100 hover:text-red-600 hover:border-red-600/20 transition-all active:scale-95 uppercase tracking-widest"
                >
                  Clear Bag
                </button>
                <button
                  onClick={handleCheckout}
                  className="order-1 sm:order-2 px-8 py-4 sm:py-5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs sm:text-sm shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 border-b-4 border-amber-800 uppercase tracking-[0.2em]"
                >
                  Proceed to WhatsApp
                </button>
              </div>
              <p className="text-[10px] text-center text-muted-foreground font-bold uppercase tracking-widest opacity-40">Secured via encrypted WhatsApp gateway</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
