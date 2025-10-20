import type { CheckIconProps } from "@/types/components";

export function CheckIcon({ className = "w-6 h-6", ariaLabel = "Included" }: CheckIconProps) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
