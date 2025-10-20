"use client";

import { useInView } from "@/hooks/useInView";

export function Solution() {
  const feature1 = useInView({ threshold: 0.2 });
  const feature2 = useInView({ threshold: 0.2 });
  const feature3 = useInView({ threshold: 0.2 });

  return (
    <>
      {/* Feature 1: BIG CORAL BLOCK */}
      <section
        ref={feature1.ref}
        id="features"
        className="relative py-20 sm:py-24 md:py-28 bg-bloom-coral overflow-hidden"
      >
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px'
          }}
        />
        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 sm:gap-12 md:gap-20 items-center">
            <div
              className={`transition-all duration-1000 ${
                feature1.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-6 leading-[1.15] break-words tracking-tight">
                Cada quien aporta lo justo
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Ambos depositan a su cuenta Bloom según lo acordado. Proporcional a sus ingresos o 50/50.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {["Depósito automático desde su banco", "División proporcional a ingresos", "Saldo visible en tiempo real"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-bloom-coral font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <p className="text-base sm:text-lg text-white font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Enhanced mockup with realistic frame */}
            <div
              className={`relative mt-8 md:mt-0 transition-all duration-1000 delay-300 ${
                feature1.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl"></div>
              {/* Frame */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/50">
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]"></div>
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="bg-bloom-sage/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-bloom-sage font-bold text-lg sm:text-xl mb-2">Luis: 58%</p>
                    <p className="text-bloom-charcoal text-4xl sm:text-5xl font-bold">$2,320</p>
                  </div>
                  <div className="bg-bloom-coral/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-bloom-coral font-bold text-lg sm:text-xl mb-2">María: 42%</p>
                    <p className="text-bloom-charcoal text-4xl sm:text-5xl font-bold">$1,680</p>
                  </div>
                  <div className="bg-bloom-deep-green text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center font-bold text-lg sm:text-xl shadow-lg">
                    ✓ Equilibrado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: WHITE with big stats */}
      <section ref={feature2.ref} className="py-20 sm:py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 sm:gap-12 md:gap-20 items-center">
            <div
              className={`order-2 md:order-1 transition-all duration-1000 ${
                feature2.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Enhanced mockup with realistic depth */}
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-3 bg-gradient-to-br from-bloom-sage/10 to-transparent rounded-3xl blur-2xl"></div>
                {/* Container */}
                <div className="relative bg-bloom-sage/5 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                  <div className="space-y-6">
                    {/* Notification card with enhanced depth */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(127,165,142,0.12)] border border-bloom-sage/5 hover:shadow-[0_12px_40px_rgba(127,165,142,0.18)] transition-all">
                      {/* Subtle top highlight */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      <p className="text-sm text-bloom-gray mb-2">Notificación en vivo</p>
                      <p className="text-lg font-bold text-bloom-charcoal">Luis gastó $450 en Soriana</p>
                      <div className="mt-4 pt-4 border-t border-bloom-sage/20">
                        <p className="text-sm text-bloom-gray mb-1">Súper</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold text-bloom-charcoal">$1,200 / $1,500</p>
                          <span className="text-bloom-sage font-bold">80%</span>
                        </div>
                        <div className="w-full bg-bloom-sage/20 rounded-full h-3 mt-2 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-bloom-sage to-bloom-deep-green h-3 rounded-full shadow-sm" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`order-1 md:order-2 transition-all duration-1000 delay-300 ${
                feature2.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-5xl font-bold text-bloom-charcoal mb-6 leading-[1.15] break-words tracking-tight">
                Gasten juntos con confianza
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-bloom-gray mb-6 sm:mb-8 leading-relaxed">
                Cada compra con sus tarjetas Bloom visible al instante. Control total, cero sorpresas.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {["Notificaciones con cada compra", "Límites automáticos por categoría", "Tarjetas virtuales para presupuestos"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-bloom-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <p className="text-base sm:text-lg text-bloom-charcoal font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: BIG BLUE BLOCK - Pockets */}
      <section
        ref={feature3.ref}
        className="relative py-20 sm:py-24 md:py-28 bg-bloom-blue overflow-hidden"
      >
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px'
          }}
        />
        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 sm:gap-12 md:gap-20 items-center">
            <div
              className={`transition-all duration-1000 ${
                feature3.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-6 leading-[1.15] break-words tracking-tight">
                Organicen su dinero en bolsillos
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Creen bolsillos para gastos compartidos, ahorros, emergencias. Cada uno con su presupuesto.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {["Bolsillo compartido para gastos del hogar", "Bolsillos personales para cada quien", "Fondo de emergencias protegido"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-bloom-blue font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <p className="text-base sm:text-lg text-white font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Enhanced pockets mockup with realistic frame */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                feature3.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-white/30 to-white/5 rounded-3xl blur-xl"></div>
              {/* Frame */}
              <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(168,199,231,0.2)] border border-white/60">
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]"></div>
                <div className="relative space-y-4">
                  <div>
                    <p className="text-sm text-bloom-gray mb-2">Saldo total Bloom</p>
                    <p className="text-6xl font-bold text-bloom-charcoal mb-6 bg-gradient-to-r from-bloom-charcoal to-bloom-deep-green bg-clip-text text-transparent">$4,500</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-bloom-sage/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-bloom-sage/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-bloom-charcoal font-bold">📦 Operación Compartida</span>
                        <span className="font-bold text-bloom-charcoal text-xl">$2,000</span>
                      </div>
                      <p className="text-sm text-bloom-gray">Gastos del hogar</p>
                    </div>
                    <div className="bg-bloom-coral/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-bloom-coral/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-bloom-charcoal font-bold">💰 Personal Luis</span>
                        <span className="font-bold text-bloom-charcoal text-xl">$600</span>
                      </div>
                      <p className="text-sm text-bloom-gray">Gastos personales</p>
                    </div>
                    <div className="bg-bloom-coral/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-bloom-coral/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-bloom-charcoal font-bold">💰 Personal María</span>
                        <span className="font-bold text-bloom-charcoal text-xl">$400</span>
                      </div>
                      <p className="text-sm text-bloom-gray">Gastos personales</p>
                    </div>
                    <div className="bg-bloom-deep-green/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-bloom-deep-green/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-bloom-charcoal font-bold">🚨 Emergencias</span>
                        <span className="font-bold text-bloom-charcoal text-xl">$1,500</span>
                      </div>
                      <p className="text-sm text-bloom-gray">Fondo protegido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
