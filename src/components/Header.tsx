"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
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
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
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
  );
}
