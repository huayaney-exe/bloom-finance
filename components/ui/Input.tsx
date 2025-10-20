import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-body-small text-bloom-gray mb-2 font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-bloom-input
            border border-bloom-gray
            focus:border-2 focus:border-bloom-sage
            focus:ring-2 focus:ring-bloom-sage/10
            focus:outline-none
            transition-all duration-200
            text-body text-bloom-charcoal
            placeholder:text-bloom-gray/50
            disabled:bg-gray-50 disabled:cursor-not-allowed
            ${error ? "border-bloom-warm-orange focus:border-bloom-warm-orange focus:ring-bloom-warm-orange/10" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-body-small text-bloom-warm-orange">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
