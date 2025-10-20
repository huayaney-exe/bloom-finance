"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import { useScrollToElement } from "@/hooks/useScrollToElement";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { heroContent } from "@/content/hero";

export function Hero() {
  const scrollY = useScrollParallax(0.15);
  const scrollToElement = useScrollToElement();

  return (
    <section
      className="relative pt-32 pb-32 md:pb-16 bg-bloom-sage isolate"
      aria-label="Hero section - Bloom shared card for couples"
    >
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none bg-repeat bg-[length:128px_128px]"
        style={{
          backgroundImage: `url('/noise-texture.svg')`
        }}
      />

      {/* MASSIVE sage green hero like Wise's lime */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] xl:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left: Copy */}
          <div className="py-8 md:py-16 flex flex-col max-w-3xl">
            <h1 className="font-display font-bold tracking-tight mb-6 text-hero-heading text-balance" style={{ hyphens: 'none', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              <span className="block bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent">
                {heroContent.heading.line1}
              </span>
              <span className="block bg-gradient-to-r from-white/95 to-white/85 bg-clip-text text-transparent">
                {heroContent.heading.line2}
              </span>
            </h1>
            <p className="text-white/90 mb-10 leading-relaxed max-w-xl text-hero-subtitle">
              {heroContent.subtitle}
            </p>

            {/* BIG CTAs with gradient border */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-white via-bloom-warm-white to-white rounded-bloom opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <Button
                  variant="inverted"
                  size="large"
                  onClick={() => scrollToElement(heroContent.cta.primary.targetId)}
                  className="relative text-lg px-12 py-6 font-bold flex items-center justify-center gap-2"
                >
                  <span>{heroContent.cta.primary.text}</span>
                  <ArrowRight size={24} />
                </Button>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-8 mb-12 text-white/80 text-lg relative z-content">
              {heroContent.trustSignals.map((signal) => (
                <div key={signal.id} className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-white" ariaLabel="Benefit included" />
                  <span className="font-semibold">{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual - phone mockup with CARD - with parallax */}
          <div className="relative md:mb-hero-card-overlap lg:mb-hero-card-overlap-lg z-card">
            <div
              className="relative w-full max-w-lg mx-auto transition-transform duration-200 parallax-element"
              style={{
                transform: `translateY(${scrollY}px)`,
              }}
            >
              {/* Phone mockup - showing BLOOM CARD */}
              <div className="bg-white rounded-t-[40px] shadow-2xl p-8 sm:p-10 pb-20 min-h-[520px] sm:min-h-[620px]">
                <div className="rounded-t-3xl p-4 sm:p-6 min-h-[400px] sm:min-h-[450px] flex flex-col justify-between">
                  {/* Physical Card Visual - Premium Design */}
                  <div className="relative group rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl mb-4 sm:mb-6 overflow-hidden">
                    {/* Complex Mesh Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7FA58E] via-[#6B9279] to-[#5A8068]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#8CB599]/40 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#F08E80]/10 to-transparent"></div>

                    {/* Noise Texture */}
                    <div
                      className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                      style={{
                        backgroundImage: `url('/card-noise.svg')`
                      }}
                    ></div>

                    {/* Holographic Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Edge Glow */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.1)]"></div>

                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8 sm:mb-12">
                        <div className="text-white/90 text-sm sm:text-base font-bold tracking-widest">BLOOM</div>
                        {/* Card Chip */}
                        <div className="w-8 h-6 sm:w-10 sm:h-7 rounded bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 shadow-inner relative overflow-hidden">
                          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[1px] p-[2px]">
                            <div className="bg-amber-500/30 rounded-[1px]"></div>
                            <div className="bg-amber-500/30 rounded-[1px]"></div>
                            <div className="bg-amber-500/30 rounded-[1px]"></div>
                            <div className="bg-amber-500/30 rounded-[1px]"></div>
                            <div className="bg-amber-500/30 rounded-[1px]"></div>
                            <div className="bg-amber-500/30 rounded-[1px]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 sm:space-y-5">
                        <div className="text-white/70 text-xs sm:text-sm tracking-[0.2em] font-medium">TARJETA COMPARTIDA</div>
                        <div className="text-white font-mono text-lg sm:text-xl tracking-[0.3em] font-semibold">
                          •••• •••• •••• 1234
                        </div>
                        <div className="flex justify-between items-end pt-2">
                          <div className="min-w-0 flex-1">
                            <div className="text-white/60 text-[10px] sm:text-xs mb-1 tracking-wider">TITULAR</div>
                            <div className="text-white font-bold text-sm sm:text-base truncate tracking-wide">LUIS HUAYANEY</div>
                          </div>
                          <div className="text-white/90 text-base sm:text-lg font-bold ml-3 tracking-wider">
                            VISA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Account Balance */}
                  <div className="bg-bloom-warm-white rounded-xl sm:rounded-2xl p-4 sm:p-5">
                    <p className="text-bloom-gray text-xs sm:text-sm mb-2">Saldo disponible</p>
                    <p className="text-bloom-charcoal text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">$4,500</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-bloom-gray truncate mr-2">📦 Compartido</span>
                        <span className="font-bold text-bloom-sage whitespace-nowrap">$2,000</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-bloom-gray truncate mr-2">💰 Personal</span>
                        <span className="font-bold text-bloom-coral whitespace-nowrap">$600</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-bloom-gray truncate mr-2">🚨 Emergencias</span>
                        <span className="font-bold text-bloom-blue whitespace-nowrap">$1,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition to white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-base">
        <img src="/wave-transition.svg" alt="" className="w-full" aria-hidden="true" />
      </div>
    </section>
  );
}
