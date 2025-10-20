/**
 * Type definitions for React component props
 * Ensures type safety and clear component APIs
 */

/**
 * CheckIcon component props
 */
export interface CheckIconProps {
  className?: string;
  ariaLabel?: string;
}

/**
 * Button component variants and sizes
 */
export type ButtonVariant = "default" | "inverted" | "outline";
export type ButtonSize = "default" | "small" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

/**
 * Container component props
 */
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
