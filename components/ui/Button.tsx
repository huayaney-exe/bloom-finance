"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted";
  size?: "default" | "large";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-bloom transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-bloom-sage text-white hover:bg-bloom-deep-green hover:shadow-2xl hover:shadow-bloom-sage/30 active:scale-98",
    secondary: "border-2 border-bloom-charcoal text-bloom-charcoal hover:bg-bloom-warm-white hover:border-bloom-sage hover:shadow-lg hover:shadow-bloom-sage/20",
    inverted: "bg-white text-bloom-charcoal hover:bg-bloom-warm-white shadow-2xl border-2 border-white active:scale-98 hover:shadow-[0_20px_60px_-15px_rgba(250,248,245,0.5)]",
  };
  const sizes = {
    default: "px-8 py-4 text-body",
    large: "px-10 py-5 text-body-large",
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
