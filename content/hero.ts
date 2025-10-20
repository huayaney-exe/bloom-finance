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
  subtitle: "La primera tarjeta compartida para parejas que elimina las peleas por dinero.",
  cta: {
    primary: {
      text: "Únete gratis",
      targetId: "waitlist-form",
    },
  },
  trustSignals: [
    {
      id: "free-year",
      text: "Primer año gratis",
    },
    {
      id: "waitlist",
      text: "+2,500 parejas esperando",
    },
  ],
};
