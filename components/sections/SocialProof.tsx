import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Una tarjeta compartida con bolsillos separados. Es exactamente lo que necesitábamos para dejar de pelear por dinero. ¡Ya en la lista!",
    names: "Laura & Miguel",
    location: "Ciudad de México",
    initials: "L&M",
  },
  {
    quote:
      "Me encanta que cada quien puede tener su tarjeta virtual para el súper, Netflix, gasolina. Control total sin sentirnos vigilados.",
    names: "Camila & Diego",
    location: "Bogotá, Colombia",
    initials: "C&D",
  },
];

export function SocialProof() {
  return (
    <section className="py-section bg-gradient-to-b from-bloom-warm-white to-bloom-sage/5">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-display-2 text-bloom-charcoal mb-4">
            Parejas como ustedes ya están listas
          </h2>
          <p className="text-body-large text-bloom-gray max-w-2xl mx-auto">
            Miles de parejas esperan el lanzamiento de Bloom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote
                className="absolute top-6 right-6 text-bloom-coral/20"
                size={48}
              />
              <div className="relative">
                <p className="text-body-large text-bloom-charcoal mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bloom-sage to-bloom-coral flex items-center justify-center">
                    <span className="text-white font-display font-semibold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-bloom-charcoal">
                      {testimonial.names}
                    </p>
                    <p className="text-body-small text-bloom-gray">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stat bar */}
        <div className="bg-bloom-blue/20 rounded-bloom-card p-6 text-center">
          <p className="text-body-large text-bloom-charcoal font-medium">
            🌎 <span className="font-display font-semibold">+2,500 parejas</span> en lista de espera
            <span className="mx-3">|</span>
            🇲🇽 México <span className="mx-2">•</span> 🇨🇴 Colombia <span className="mx-2">•</span> 🇧🇷 Brasil
          </p>
        </div>
      </Container>
    </section>
  );
}
