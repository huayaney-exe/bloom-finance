/**
 * Type definitions for content configuration objects
 * Ensures type safety across content files and components
 */

export interface TrustSignal {
  id: string;
  text: string;
}

export interface CTAConfig {
  text: string;
  targetId: string;
}

export interface HeroHeading {
  line1: string;
  line2: string;
}

export interface HeroContent {
  heading: HeroHeading;
  subtitle: string;
  cta: {
    primary: CTAConfig;
  };
  trustSignals: TrustSignal[];
}

export interface ProblemItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}
