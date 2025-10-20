import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7FA58E",
};

export const metadata: Metadata = {
  title: "Bloom - Florezcan juntos financieramente",
  description: "La primera tarjeta compartida para parejas latinoamericanas que elimina las peleas por dinero a través de contribuciones justas y transparencia total.",
  keywords: ["fintech", "parejas", "LATAM", "tarjeta compartida", "finanzas familiares", "contribuciones justas"],
  authors: [{ name: "Bloom" }],
  openGraph: {
    title: "Bloom - Florezcan juntos financieramente",
    description: "Contribuciones justas y transparencia total para parejas latinoamericanas",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom - Florezcan juntos financieramente",
    description: "La primera tarjeta compartida para parejas latinoamericanas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
