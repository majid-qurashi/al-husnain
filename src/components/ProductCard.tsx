"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Product } from "@/data/mockProducts";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const [selectedVolIdx, setSelectedVolIdx] = useState(0);

  const hasVolumes = product.volumes && product.volumes.length > 0;
  const currentPrice = hasVolumes ? product.volumes![selectedVolIdx].price : product.price;
  const currentVolume = hasVolumes ? product.volumes![selectedVolIdx].label : product.volume;

  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVolIdx);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    const phoneNumber = "919541457794";
    const message = `Asalamualikum ,\nI want to order ${product.name} (${currentVolume}) at ₹${currentPrice}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md dark:border-border dark:bg-card">
      <div className="aspect-square w-full overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow gap-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-[10px] font-bold text-muted-foreground">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-sm font-semibold leading-tight line-clamp-2 min-h-[2.5rem]" title={product.name}>
          {product.name}
        </h3>

        {/* Volume Selection Chips */}
        {hasVolumes && (
          <div className="flex flex-wrap gap-1.5 my-1">
            {product.volumes!.map((vol, idx) => (
              <button
                key={vol.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVolIdx(idx);
                }}
                className={`px-2.5 py-1 text-[10px] font-medium rounded-full border transition-all ${
                  selectedVolIdx === idx
                    ? "bg-foreground text-background border-foreground shadow-sm scale-105"
                    : "bg-background text-foreground/70 border-border hover:border-foreground/50"
                }`}
              >
                {vol.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2">
          <p className="font-bold text-base text-foreground">
            ₹{currentPrice}
            {!hasVolumes && (
              <span className="text-[10px] font-normal text-muted-foreground ml-1">
                ({product.volume})
              </span>
            )}
          </p>
          
          <div className="flex gap-2 mt-1">
            <button
              onClick={handleAddToCart}
              className={`flex-1 rounded-lg py-1 sm:py-2.5 text-[8px] sm:text-[10px] font-black uppercase tracking-tight transition-all active:scale-95 shadow-md transform hover:-translate-y-0.5 ${
                isAdded 
                  ? "bg-green-600 text-white" 
                  : "bg-gradient-to-br from-orange-400 to-orange-600 text-white hover:shadow-orange-500/20"
              }`}
            >
              {isAdded ? "✓ Added" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 text-black py-1 sm:py-2.5 text-[8px] sm:text-[10px] font-black uppercase tracking-tight transition-all active:scale-95 shadow-md transform hover:-translate-y-0.5 hover:shadow-yellow-500/20 border-b-2 border-yellow-600/20"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

