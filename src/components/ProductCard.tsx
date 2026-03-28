"use client";

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
      <div className="p-5 flex flex-col gap-2">
        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
          {product.category}
        </span>
        <h3 className="font-semibold leading-tight line-clamp-2" title={product.name}>
          {product.name} ({product.volume})
        </h3>
        <p className="mt-1 font-bold text-lg">
          ₹{product.price}
        </p>
        <button
          onClick={handleBuyNow}
          className="mt-3 w-full rounded-md bg-foreground text-background py-2.5 text-sm font-semibold transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
