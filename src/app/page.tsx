"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Search, ChevronDown, Filter } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { LeaderSection } from "@/components/LeaderSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Perfumes", "Royal Attar", "Popular Attar", "Budget Combos", "Car Perfumes", "Home Fragrance"];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted/50 pt-12 pb-2 md:py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-cinzel text-balance flex flex-wrap justify-center gap-x-4">
            <span className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Elevate</span>
            <span className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Your</span>
            <span className="text-amber-600 dark:text-amber-400 font-cursive italic lowercase lg:text-7xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Senses</span>
          </h1>
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm border rounded-full bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:border-border transition-all shadow-lg"
              placeholder="Search attars, perfumes, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="relative max-w-[200px] mx-auto mb-4 group font-cinzel">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-hover:text-amber-600 transition-colors">
              <Filter className="w-4 h-4" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full p-3 pl-10 pr-10 text-xs font-bold border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:border-border transition-all shadow-md appearance-none cursor-pointer hover:border-amber-500"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-background text-foreground font-sans">
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground group-hover:text-amber-600 transition-colors">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 pt-0 pb-12 md:py-12 lg:px-8 focus:outline-none">
        {/* Category Filter */}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-muted-foreground">No fragrances found.</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search query or category.</p>
          </div>
        )}
      </section>

      {/* Leader Section */}
      <LeaderSection />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
