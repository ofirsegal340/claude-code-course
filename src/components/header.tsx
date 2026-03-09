"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "hero", label: "בית" },
  { href: "audience", label: "למי מתאים" },
  { href: "services", label: "שירותים" },
  { href: "why-me", label: "למה אני" },
  { href: "process", label: "תהליך עבודה" },
  { href: "contact", label: "צור קשר" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="text-xl font-bold text-text-primary">
          אופיר סגל <span className="text-primary">| OS Digital</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-primary"
          aria-label="תפריט"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-dark/95 backdrop-blur-md border-b border-white/5 px-4 pb-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-right py-3 text-text-secondary hover:text-primary transition-colors font-medium border-b border-white/5 last:border-0"
            >
              {link.label}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
