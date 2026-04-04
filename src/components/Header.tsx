"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems, cart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/#products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Marquee Bar */}
      <div className="bg-amber-600 dark:bg-amber-700 text-white overflow-hidden py-1.5 text-xs font-semibold">
        <div className="animate-marquee inline-block whitespace-nowrap">
          Note: This site is currently under development and may load slowly. Thank you for your patience. &nbsp;&nbsp;|&nbsp;&nbsp; 
          Note: This site is currently under development and may load slowly. Thank you for your patience. &nbsp;&nbsp;|&nbsp;&nbsp;
          Note: This site is currently under development and may load slowly. Thank you for your patience.
        </div>
      </div>
      
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img 
            src="https://i.ibb.co/6cgNBtcn/logo.jpg" 
            alt="Al Hasnain Fragrances Logo" 
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover border-2 border-amber-500/20 shadow-lg"
          />
          <span className="text-xl md:text-2xl font-bold tracking-wider font-cinzel bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 bg-clip-text text-transparent hidden sm:inline-block">
            AL HASNAIN FRAGRANCES
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 mr-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-amber-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Icon & Preview */}
          <div className="flex items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5 hover:text-amber-600 transition-colors" />
              {mounted && totalItems > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-background animate-in fade-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </button>
            
            {mounted && cart.length > 0 && (
              <div 
                className="hidden lg:flex flex-col ml-1 border-l pl-2 border-border/50 max-w-[100px] cursor-pointer hover:text-amber-600 transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                {cart.slice(0, 2).map((item) => (
                  <span key={`${item.id}-${item.selectedVolume}`} className="text-[9px] leading-none font-medium truncate mb-0.5">
                    {item.name}
                  </span>
                ))}
                {cart.length > 2 && (
                  <span className="text-[8px] font-bold text-amber-600">
                    + {cart.length - 2} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background shadow-lg">
          <nav className="container flex flex-col py-4 px-4 mx-auto space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold block rounded-md px-3 py-2 hover:bg-accent hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>

    {/* Cart Drawer: Moved outside header for clean z-stacking */}
    <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
