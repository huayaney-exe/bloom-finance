"use client";

import { Button } from "@/components/ui/Button";
import { useScrollToElement } from "@/hooks/useScrollToElement";

export function Navbar() {
  const scrollToElement = useScrollToElement();

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-bloom-sage/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-bloom-sage rounded-full flex items-center justify-center group-hover:bg-bloom-deep-green transition-colors">
                <span className="text-white font-display font-bold text-xl">B</span>
              </div>
              <span className="font-display font-bold text-2xl text-bloom-charcoal">
                Bloom
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#como-funciona"
                className="text-body font-medium text-bloom-charcoal hover:text-bloom-sage transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#features"
                className="text-body font-medium text-bloom-charcoal hover:text-bloom-sage transition-colors"
              >
                Funciones
              </a>
              <Button onClick={() => scrollToElement("waitlist-form")} size="default">
                Únete gratis
              </Button>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <Button onClick={() => scrollToElement("waitlist-form")} size="default">
                Únete
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
