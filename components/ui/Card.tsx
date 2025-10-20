import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-bloom-card p-8
        border border-bloom-sage/15
        shadow-sm hover:shadow-md
        transition-shadow duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
