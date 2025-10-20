# Bloom Landing Page

La página de lista de espera para Bloom - la primera tarjeta compartida para parejas latinoamericanas.

## 🌱 Sobre Bloom

Bloom elimina las peleas por dinero en parejas a través de:
- **Contribuciones justas**: División automática proporcional a ingresos
- **Transparencia total**: Visibilidad en tiempo real de gastos compartidos
- **Una sola verdad**: Todos los bancos sincronizados en un dashboard

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 3.4
- **Animaciones**: Framer Motion
- **Íconos**: Lucide React
- **Fuentes**: Inter + DM Sans (Google Fonts)

## 📐 Sistema de Diseño Bloom

### Colores
```css
Sage Green (#7FA58E)    - Primary CTA, accents
Warm Coral (#F08E80)    - Secondary accents, icons
Soft Blue (#A8C7E7)     - Trust elements, stats
Charcoal (#2D3436)      - Text primary
Warm Gray (#636E72)     - Text secondary
Warm White (#FAF8F5)    - Background
Deep Green (#5F9F7C)    - Success states
Warm Orange (#F4A460)   - Warnings
```

### Tipografía
- **Headlines**: DM Sans (Semi-bold 600, Medium 500)
- **Body**: Inter (Regular 400, Medium 500)
- **Escala**: 56px (H1) → 40px (H2) → 28px (H3) → 20px (Body Large) → 16px (Body) → 14px (Small)

### Espaciado
- **8px base system**: xs(8) → sm(16) → md(24) → lg(40) → xl(64) → 2xl(96)
- **Secciones**: 96px vertical padding (64px mobile)

## 🏗️ Estructura del Proyecto

```
bloom-landing/
├── app/
│   ├── layout.tsx           # Root layout con fuentes y metadata
│   └── page.tsx             # Landing page principal
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Sección 1: Hero con CTA
│   │   ├── Problem.tsx      # Sección 2: Pain points (3 cards)
│   │   ├── Solution.tsx     # Sección 3: Features (3 alternating)
│   │   ├── HowItWorks.tsx   # Sección 4: 3-step flow
│   │   ├── SocialProof.tsx  # Sección 5: Testimonials
│   │   ├── FAQ.tsx          # Sección 6: Accordion
│   │   └── FinalCTA.tsx     # Sección 7: Form + success state
│   └── ui/
│       ├── Button.tsx       # Sage green CTAs
│       ├── Card.tsx         # Rounded cards con hover
│       ├── Input.tsx        # Form inputs con validación
│       ├── Container.tsx    # Max-width wrapper
│       └── Accordion.tsx    # FAQ component
├── styles/
│   └── globals.css          # Tailwind + design tokens
├── tailwind.config.ts       # Bloom theme configuration
└── package.json
```

## 🎯 Secciones de la Landing Page

### 1. Hero (Above the fold)
- Headline: "Florezcan juntos financieramente"
- 2 CTAs: "Únete a la lista de espera" + "Conoce cómo funciona"
- Trust signals: Gratis primer año, lanzamiento 2026

### 2. Problem (Pain Points)
- 3 cards: "¿Quién paga más?", "Gastos sorpresa", "¿Cuánto tenemos?"
- Stats sociales: 70%, 52%, 4+ horas

### 3. Solution (Features)
- 3 features alternating: Contribución justa, Gasto compartido, Visibilidad total
- Mockups con checkmarks de beneficios

### 4. How It Works
- 3 pasos: Invita a tu pareja → Conecten cuentas → Florezcan juntos
- Íconos con números de paso

### 5. Social Proof
- 2 testimonials de parejas
- Stat bar: +2,500 parejas, 3 países

### 6. FAQ
- 5 preguntas accordion:
  - Privacidad
  - Contribución proporcional
  - Ruptura de relación
  - Seguridad
  - Precio

### 7. Final CTA (Form)
- Campos: Tu nombre, Nombre pareja, Emails, País
- Success state con share buttons
- Frontend-only validation (backend fase 2)

## 💻 Desarrollo Local

### Instalación
```bash
cd bloom-landing
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

### Build de Producción
```bash
npm run build
npm start
```

## 📱 Responsive Design

- **Desktop**: Grid 12-column, 60/40 splits, alternating layouts
- **Tablet**: Grid 8-column, stacked sections
- **Mobile**: Single column, 48px+ touch targets, bottom-anchored CTAs

## ✅ Features Implementadas

- [x] Next.js 15 con App Router
- [x] TypeScript configurado
- [x] Tailwind con design tokens Bloom
- [x] 7 secciones completas
- [x] 5 componentes UI reutilizables
- [x] Animaciones Framer Motion
- [x] Form con validación frontend
- [x] Success state con WhatsApp share
- [x] Smooth scroll entre secciones
- [x] Metadata SEO optimizado
- [x] Totalmente responsive

## 🚧 Próximos Pasos (Fase 2 - Backend)

- [ ] API route `/api/waitlist` para captura de emails
- [ ] Integración Resend para confirmación por email
- [ ] Airtable/Notion como database temporal
- [ ] PostHog para analytics privacy-compliant
- [ ] Deploy a Vercel con dominio custom
- [ ] A/B testing headlines y CTAs

## 📊 Métricas de Éxito

**Objetivos Primarios** (30 días):
- 1,000+ emails capturados
- 30%+ conversion rate (visitor → email)
- 40%+ signups con ambos emails (validación pareja)
- <10% form abandonment

**Objetivos Secundarios**:
- 10%+ share rate post-signup
- 2min+ tiempo en página
- <5% bounce rate
- 95+ Lighthouse score

## 🎨 Brand Persona: "The Trusted Mediator"

Toda la comunicación sigue la personalidad de marca:
- **Tono**: Cálido, medido, no-judgmental
- **Lenguaje**: "Contribución" (no "pago"), "Partnership" (no "titulares")
- **Estilo**: Invita descubrimiento ("Let me show you..."), no dicta
- **Valores**: Partnership > Individual, Truth > Comfort, Prevention > Punishment

Ver [brand-persona.md](../brand-persona.md) para detalles completos.

## 📄 Licencia

Propiedad de Bloom. Todos los derechos reservados.

## 🤝 Contacto

Para preguntas sobre el proyecto:
- **Email**: [email del founder]
- **Website**: [bloom domain cuando exista]

---

**Hecho con 💚 por el equipo de Bloom**
