"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Search } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-cinzel">
            Elevate Your <span className="text-amber-600 dark:text-amber-400">Senses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Discover our premium collection of authentic attars and perfumes. Crafted with passion, shipped all over India.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-12 lg:px-8">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:border-border transition-all"
            placeholder="Search attars, perfumes, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-muted-foreground">No fragrances found.</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search query.</p>
          </div>
        )}
      </section>
    </div>
  );
}
