import { Container } from "@/components/ui/Container";
import type { ProblemItem } from "@/types/content";

const problems: ProblemItem[] = [
  {
    id: "contribution-fights",
    emoji: "⚖️",
    title: "¿Quién paga más?",
    description:
      "'Yo siempre pago el súper', 'Yo pagué la renta'",
    stat: "70%",
    statLabel: "de parejas pelea por contribuciones",
  },
  {
    id: "surprise-expenses",
    emoji: "👀",
    title: "Gastos sorpresa",
    description:
      "'¿Gastaste $500 en qué?!' Sin visibilidad, solo sorpresas.",
    stat: "52%",
    statLabel: "de rupturas incluyen desconfianza financiera",
  },
  {
    id: "financial-chaos",
    emoji: "🌀",
    title: "¿Cuánto tenemos?",
    description:
      "3 bancos, 4 tarjetas, cero claridad.",
    stat: "4hrs",
    statLabel: "perdidas/mes rastreando gastos",
  },
];

export function Problem() {
  return (
    <section className="pt-24 md:pt-56 lg:pt-64 pb-24 bg-white relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-bloom-charcoal mb-6 font-bold">
            ¿Te suena familiar?
          </h2>
          <p className="text-2xl text-bloom-gray max-w-3xl mx-auto">
            Estos son los problemas que más dañan las relaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-bloom-coral/5 rounded-2xl p-8 hover:bg-bloom-coral/10 transition-all border-2 border-transparent hover:border-bloom-coral/30"
            >
              <div className="text-6xl mb-6">{problem.emoji}</div>
              <h3 className="font-display text-2xl font-bold text-bloom-charcoal mb-4">
                {problem.title}
              </h3>
              <p className="text-lg text-bloom-gray mb-6 leading-relaxed">
                {problem.description}
              </p>
              <div className="pt-4 border-t-2 border-bloom-coral/20">
                <div className="text-4xl font-display font-bold text-bloom-coral mb-1">
                  {problem.stat}
                </div>
                <p className="text-sm font-semibold text-bloom-gray uppercase tracking-wide">
                  {problem.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
