"use client";

import { Star } from "lucide-react";
import { Product } from "@/data/mockProducts";

export function ProductCard({ product }: { product: Product }) {
  const handleBuyNow = () => {
    const phoneNumber = "919541457794";
    const message = `Asalamualikum ,\nI want to order ${product.name}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md dark:border-border dark:bg-card">
      <div className="aspect-square w-full overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 flex flex-col gap-1.5">
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
          {product.name} ({product.volume})
        </h3>
        <p className="mt-0.5 font-bold text-base text-foreground">
          ₹{product.price}
        </p>
        <button
          onClick={handleBuyNow}
          className="mt-2 w-full rounded-lg bg-foreground text-background py-2 text-xs font-bold transition-all hover:bg-foreground/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
