"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export function FinalCTA() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    email1: "",
    email2: "",
    country: "mexico",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name1.trim()) {
      newErrors.name1 = "Tu nombre es requerido";
    }
    if (!formData.email1.trim()) {
      newErrors.email1 = "Tu email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email1)) {
      newErrors.email1 = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState("submitting");

    // Simulate API call (frontend only for now)
    setTimeout(() => {
      setFormState("success");
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (formState === "success") {
    return (
      <section
        id="waitlist-form"
        className="py-section bg-gradient-to-b from-bloom-sage/5 to-bloom-coral/10"
      >
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="mx-auto text-bloom-deep-green" size={64} />
            </div>
            <h2 className="font-display text-display-2 text-bloom-charcoal mb-4">
              🎉 ¡Listo! Están en la lista
            </h2>
            <div className="bg-white rounded-bloom-card p-8 shadow-lg mb-8">
              <h3 className="font-display text-display-3 text-bloom-charcoal mb-4">
                Qué sigue:
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-bloom-deep-green flex-shrink-0 mt-1" size={20} />
                  <span className="text-body text-bloom-charcoal">
                    Recibirán actualizaciones de progreso
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-bloom-deep-green flex-shrink-0 mt-1" size={20} />
                  <span className="text-body text-bloom-charcoal">
                    Acceso anticipado cuando lancemos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-bloom-deep-green flex-shrink-0 mt-1" size={20} />
                  <span className="text-body text-bloom-charcoal">
                    Primer año gratis garantizado
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-body-large text-bloom-gray mb-6">
              <strong>Mientras tanto:</strong> Invita a otra pareja y ayúdales a florecer.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=¡Mira esto! Bloom ayuda a parejas a manejar su dinero sin peleas. Únete a la lista de espera: ${window.location.href}`,
                    "_blank"
                  )
                }
              >
                Compartir en WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="waitlist-form"
      className="py-section bg-gradient-to-b from-bloom-sage/5 to-bloom-coral/10"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-display-2 text-bloom-charcoal mb-4">
            ¿Listos para florecer juntos?
          </h2>
          <p className="text-body-large text-bloom-gray mb-8">
            Únete a +2,500 parejas esperando Bloom
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-bloom-card p-8 shadow-lg text-left">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Tu nombre"
                type="text"
                placeholder="Luis"
                value={formData.name1}
                onChange={(e) => handleChange("name1", e.target.value)}
                error={errors.name1}
                required
              />
              <Input
                label="Nombre de tu pareja"
                type="text"
                placeholder="María"
                value={formData.name2}
                onChange={(e) => handleChange("name2", e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Tu email"
                type="email"
                placeholder="luis@ejemplo.com"
                value={formData.email1}
                onChange={(e) => handleChange("email1", e.target.value)}
                error={errors.email1}
                required
              />
              <Input
                label="Email de tu pareja (opcional)"
                type="email"
                placeholder="maria@ejemplo.com"
                value={formData.email2}
                onChange={(e) => handleChange("email2", e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-body-small text-bloom-gray mb-2 font-medium">
                País
              </label>
              <select
                className="w-full px-4 py-3 rounded-bloom-input border border-bloom-gray focus:border-2 focus:border-bloom-sage focus:ring-2 focus:ring-bloom-sage/10 focus:outline-none transition-all duration-200 text-body text-bloom-charcoal"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
              >
                <option value="mexico">🇲🇽 México</option>
                <option value="colombia">🇨🇴 Colombia</option>
                <option value="brasil">🇧🇷 Brasil</option>
                <option value="argentina">🇦🇷 Argentina</option>
                <option value="otro">🌎 Otro</option>
              </select>
            </div>

            <Button
              type="submit"
              size="large"
              className="w-full"
              disabled={formState === "submitting"}
            >
              {formState === "submitting" ? "Guardando..." : "Guardar mi lugar"}
            </Button>

            <p className="text-body-small text-bloom-gray text-center mt-4">
              ✓ Primer año gratis | ✓ Lanzamiento 2026 | ✓ Sin compromiso
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
