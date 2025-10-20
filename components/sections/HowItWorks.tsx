import { Container } from "@/components/ui/Container";
import { Users, CreditCard, Sprout } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Soliciten su cuenta juntos",
    description: "Verificación de identidad para ambos. Toma 5 minutos.",
  },
  {
    icon: CreditCard,
    title: "Reciban sus tarjetas",
    description: "2 físicas + virtuales ilimitadas. Usen desde el primer día.",
  },
  {
    icon: Sprout,
    title: "Florezcan juntos",
    description: "Aportan según lo acordado, gastan con control, cero peleas.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-section bg-bloom-warm-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-display-2 text-bloom-charcoal mb-4">
            Empieza en 3 pasos
          </h2>
          <p className="text-body-large text-bloom-gray max-w-2xl mx-auto">
            Es más simple de lo que crees. Sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection arrows for desktop */}
          <div className="hidden md:block absolute top-1/4 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-bloom-sage to-bloom-coral -translate-y-1/2" />
          <div className="hidden md:block absolute top-1/4 right-0 w-1/3 h-0.5 bg-gradient-to-r from-bloom-coral to-bloom-deep-green -translate-y-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-bloom-card p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-bloom-sage/10"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-bloom-sage text-white rounded-full flex items-center justify-center font-display font-semibold text-sm">
                  {index + 1}
                </div>

                <div className="mb-6 mt-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-bloom-coral/10 flex items-center justify-center">
                    <Icon className="text-bloom-coral" size={32} />
                  </div>
                </div>

                <h3 className="font-display text-display-3 text-bloom-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-body text-bloom-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
