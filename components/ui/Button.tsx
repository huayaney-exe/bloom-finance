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
    primary: "bg-bloom-sage text-white hover:bg-bloom-deep-green hover:shadow-lg active:scale-98",
    secondary: "border-2 border-bloom-charcoal text-bloom-charcoal hover:bg-bloom-warm-white hover:border-bloom-sage",
    inverted: "bg-white text-bloom-charcoal hover:bg-bloom-warm-white shadow-2xl border-2 border-white active:scale-98",
  };
  const sizes = {
    default: "px-8 py-4 text-body",
    large: "px-10 py-5 text-body-large",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
