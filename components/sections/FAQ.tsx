import { Container } from "@/components/ui/Container";
import { AccordionItem } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "¿Necesito cambiar de banco?",
    answer: (
      <>
        <strong>No.</strong> Bloom es una cuenta adicional, no un reemplazo. Siguen usando
        sus bancos actuales (Nubank, BBVA, Banorte, etc.) para ingresos y gastos personales.
        Solo depositan a Bloom lo que quieren gastar juntos cada mes.
      </>
    ),
  },
  {
    question: "¿Cuántas tarjetas obtengo?",
    answer: (
      <>
        Cada quien recibe:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>1 tarjeta física</strong> (llega en 7-10 días)</li>
          <li><strong>Virtuales ilimitadas</strong> (las crean al instante desde la app)</li>
        </ul>
        <p className="mt-2">
          Todas conectadas a la misma cuenta Bloom, pero pueden asignarlas a diferentes
          bolsillos y establecer límites independientes.
        </p>
      </>
    ),
  },
  {
    question: "¿Mi pareja puede ver TODOS mis gastos?",
    answer: (
      <>
        <strong>No.</strong> Solo ven lo que gastan desde bolsillos compartidos (súper, renta, servicios).
        Los bolsillos personales de cada quien son privados. Ustedes definen qué comparten y qué no.
      </>
    ),
  },
  {
    question: "¿Qué pasa si pierdo mi tarjeta?",
    answer: (
      <>
        Desde la app congelas tu tarjeta en <strong>2 segundos</strong>. Nadie puede usarla.
        Luego pides una de reemplazo (gratis) que llega en 7-10 días. Mientras tanto,
        usas tus tarjetas virtuales normalmente.
      </>
    ),
  },
  {
    question: "¿Cómo deposito dinero a Bloom?",
    answer: (
      <>
        Tres formas:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Transferencia</strong> desde tu banco (SPEI/Pix, 1-2 días)</li>
          <li><strong>Depósito directo</strong> de tu nómina (configuración única)</li>
          <li><strong>Efectivo</strong> en OXXO o 7-Eleven (disponible de inmediato)</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Qué pasa si terminamos la relación?",
    answer: (
      <>
        Ambos conservan acceso al historial de contribuciones (útil para separar finanzas).
        Pueden cerrar la cuenta compartida en cualquier momento. El dinero regresa
        proporcionalmente según contribución histórica o como ustedes acuerden.
      </>
    ),
  },
  {
    question: "¿Cuánto cuesta Bloom?",
    answer: (
      <>
        <strong>Primer año GRATIS</strong> para miembros de lista de espera. Después:
        $149 MXN/mes (~$7.50 USD) por pareja. Incluye: 2 tarjetas físicas, virtuales ilimitadas,
        soporte prioritario, sin comisiones de transacción.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section className="py-section bg-bloom-warm-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-display-2 text-bloom-charcoal mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-body-large text-bloom-gray max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre Bloom.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
