/**
 * Hero section content configuration
 * Centralized content for easy updates and future i18n support
 */

import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  heading: {
    line1: "Florezcan juntos",
    line2: "financieramente",
  },
  subtitle: "No más 'yo pagué esto, tú pagaste aquello'. La primera tarjeta compartida que elimina las peleas por dinero.",
  cta: {
    primary: {
      text: "Únete a las 2,500+ parejas",
      targetId: "waitlist-form",
    },
  },
  trustSignals: [
    {
      id: "free-year",
      text: "Sin comisiones por 12 meses",
    },
    {
      id: "waitlist",
      text: "Cuenta lista en 60 segundos",
    },
  ],
};
