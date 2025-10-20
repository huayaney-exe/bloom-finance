"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Optimized scroll parallax hook using requestAnimationFrame
 * to prevent excessive re-renders and improve performance.
 *
 * @param speed - Parallax speed multiplier (default: 0.15)
 * @returns Current scroll offset adjusted by speed
 */
export function useScrollParallax(speed: number = 0.15): number {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | undefined>();
  const isScheduledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle using requestAnimationFrame
      if (isScheduledRef.current) return;

      isScheduledRef.current = true;
      rafRef.current = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
        isScheduledRef.current = false;
      });
    };

    // Set initial offset
    setOffset(window.scrollY * speed);

    // Add scroll listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed]);

  return offset;
}
