"use client";

import { Container } from "@/components/ui/Container";
import { CreditCard, Smartphone, Lock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const cardFeatures = [
  {
    icon: CreditCard,
    title: "2 tarjetas físicas",
    description: "Una para cada quien. Usen en cualquier comercio que acepte Visa.",
    color: "sage",
    gradient: "from-[#7FA58E] to-[#5A8068]",
  },
  {
    icon: Smartphone,
    title: "Virtuales ilimitadas",
    description: "Para Netflix, súper, gasolina, lo que necesiten. Creen en segundos.",
    color: "coral",
    gradient: "from-[#F08E80] to-[#E67063]",
  },
  {
    icon: Lock,
    title: "Control total",
    description: "Congela, descongela, establece límites en segundos desde la app.",
    color: "blue",
    gradient: "from-[#A8C7E7] to-[#7BA3CA]",
  },
];

// Unique card designs for visual stack
const cardDesigns = [
  {
    name: "Compartido",
    gradient: "from-[#7FA58E] via-[#6B9279] to-[#5A8068]",
    owner: "Luis & María",
    number: "4532 •••• •••• 1234",
    type: "physical",
  },
  {
    name: "Personal Luis",
    gradient: "from-[#8CB599] via-[#7FA58E] to-[#6B9279]",
    owner: "Luis Huayaney",
    number: "4532 •••• •••• 5678",
    type: "virtual",
  },
  {
    name: "Gasolina",
    gradient: "from-[#F08E80] via-[#E87A6C] to-[#E06658]",
    owner: "Luis Huayaney",
    number: "4532 •••• •••• 9012",
    type: "virtual",
  },
  {
    name: "Personal María",
    gradient: "from-[#A8C7E7] via-[#92B5D9] to-[#7BA3CA]",
    owner: "María González",
    number: "4532 •••• •••• 3456",
    type: "virtual",
  },
];

export function Cards() {
  const headerSection = useInView({ threshold: 0.3 });
  const cardStack = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 bg-white">
      <Container>
        <div
          ref={headerSection.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerSection.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-5xl text-bloom-charcoal mb-6 font-bold tracking-tight leading-[1.15]">
            Múltiples tarjetas para diferentes usos
          </h2>
          <p className="text-lg md:text-xl text-bloom-gray max-w-3xl mx-auto leading-relaxed">
            No solo una tarjeta. Un sistema completo de control de gastos.
          </p>
        </div>

        {/* Card Features Grid - with gradient orbs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cardFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-bloom-warm-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="mb-6 flex justify-center">
                  {/* Gradient orb with glow */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                      {/* Inner highlight */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                      <Icon size={40} className="text-white relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-bloom-charcoal mb-3 group-hover:text-bloom-deep-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-lg text-bloom-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Card Stack Visual */}
        <div
          ref={cardStack.ref}
          className={`mb-16 relative transition-all duration-1000 ${
            cardStack.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bloom-charcoal mb-12 text-center tracking-tight">
            Tarjetas únicas para cada necesidad
          </h3>

          <div className="max-w-5xl mx-auto px-4">
            {/* Card stack container */}
            <div className="relative h-80 flex items-center justify-center">
              {cardDesigns.map((card, index) => (
                <div
                  key={index}
                  className="absolute w-72 h-44 transition-all duration-500 hover:z-50 cursor-pointer group"
                  style={{
                    transform: `translateX(${(index - 2) * 60}px) translateY(${Math.abs(index - 2) * 10}px) rotate(${(index - 2) * 3}deg)`,
                    zIndex: index === 2 ? 10 : 10 - Math.abs(index - 2),
                  }}
                >
                  {/* Card glow on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-white via-transparent to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>

                  {/* Card visual */}
                  <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${card.gradient} p-5 shadow-2xl overflow-hidden group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-all`}>
                    {/* Noise texture */}
                    <div
                      className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      }}
                    ></div>

                    {/* Card content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="text-white/90 text-sm font-bold tracking-widest">BLOOM</div>
                        <div className="text-white/70 text-xs font-bold">{card.type === 'physical' ? '💳' : '📱'}</div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-white/70 text-xs tracking-[0.2em] font-medium">{card.name.toUpperCase()}</div>
                        <div className="text-white font-mono text-base tracking-[0.3em] font-semibold">
                          {card.number}
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="text-white/90 text-xs font-bold tracking-wide">{card.owner}</div>
                          <div className="text-white/90 text-sm font-bold tracking-wider">VISA</div>
                        </div>
                      </div>
                    </div>

                    {/* Holographic shimmer on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Example of Multiple Cards */}
        <div className="bg-gradient-to-br from-bloom-sage/10 to-bloom-blue/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-bloom-charcoal mb-6 sm:mb-8 text-center">
              Ejemplo: Una pareja organizada
            </h3>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Luis Cards */}
              <div className="space-y-3 sm:space-y-4">
                <p className="font-bold text-bloom-sage text-lg sm:text-xl mb-3 sm:mb-4">Tarjetas de Luis</p>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">💳 Física #1</span>
                    <span className="text-xs sm:text-sm text-bloom-sage whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Bolsillo: Compartido</p>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">📱 Personal</span>
                    <span className="text-xs sm:text-sm text-bloom-sage whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Bolsillo: Personal Luis</p>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">📱 Gasolina</span>
                    <span className="text-xs sm:text-sm text-bloom-sage whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Límite: $800/mes</p>
                </div>
              </div>

              {/* María Cards */}
              <div className="space-y-3 sm:space-y-4">
                <p className="font-bold text-bloom-coral text-lg sm:text-xl mb-3 sm:mb-4">Tarjetas de María</p>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">💳 Física #2</span>
                    <span className="text-xs sm:text-sm text-bloom-coral whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Bolsillo: Compartido</p>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">📱 Personal</span>
                    <span className="text-xs sm:text-sm text-bloom-coral whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Bolsillo: Personal María</p>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">📱 Súper</span>
                    <span className="text-xs sm:text-sm text-bloom-coral whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Límite: $1,500/mes</p>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-bloom-charcoal text-sm sm:text-base">📱 Netflix</span>
                    <span className="text-xs sm:text-sm text-bloom-coral whitespace-nowrap ml-2">Activa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-bloom-gray">Límite: $200/mes</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-bloom-gray text-sm sm:text-base md:text-lg leading-relaxed">
                Todas las tarjetas conectadas a la misma cuenta Bloom, pero con diferentes límites y bolsillos.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
