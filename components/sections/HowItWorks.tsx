import { Container } from "@/components/ui/Container";
import { Smartphone, Link2, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Descarga la app",
    description: "Cuenta lista en 60 segundos. Sin papeleo, sin complicaciones.",
    benefit: "⚡ Más rápido que pedir un café"
  },
  {
    icon: Link2,
    title: "Vincula tu pareja",
    description: "Código único para conectar. Solo ustedes dos tienen acceso.",
    benefit: "🔒 100% privado y seguro"
  },
  {
    icon: Settings,
    title: "Configuran presupuestos",
    description: "Categorías compartidas: supermercado, cenas, viajes. Ambos ven en tiempo real.",
    benefit: "👀 Transparencia total"
  },
  {
    icon: TrendingUp,
    title: "Empiezan a ahorrar juntos",
    description: "Seguimiento automático. Notificaciones cuando se acercan al límite. Cero sorpresas.",
    benefit: "💰 $1,200 promedio ahorrado al año"
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-section bg-bloom-warm-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-display-2 text-bloom-charcoal mb-4">
            <span className="bg-gradient-to-r from-bloom-charcoal via-bloom-sage to-bloom-charcoal bg-clip-text text-transparent">
              Cómo funciona
            </span>
          </h2>
          <p className="text-body-large text-bloom-gray max-w-2xl mx-auto">
            De cero a cuenta compartida en menos de 2 minutos. <span className="font-bold text-bloom-sage">Es realmente así de simple.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection arrows for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-[12.5%] w-[75%] h-0.5 -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-bloom-sage via-bloom-coral to-bloom-sage opacity-30"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-bloom-card p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-bloom-sage/10 group"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-bloom-sage to-bloom-deep-green text-white rounded-full flex items-center justify-center font-display font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                <div className="mb-5 mt-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bloom-coral/10 to-bloom-sage/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-bloom-coral" size={32} />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-bloom-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-bloom-gray leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Benefit badge */}
                <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-bloom-sage/10 to-bloom-coral/10 rounded-full">
                  <span className="text-xs font-bold bg-gradient-to-r from-bloom-sage to-bloom-coral bg-clip-text text-transparent">
                    {step.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
