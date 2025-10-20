"use client";

import { useCallback } from "react";

/**
 * Hook for smooth scrolling to elements by ID
 * @returns Function that takes an element ID and scrolls to it smoothly
 */
export function useScrollToElement() {
  return useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Element with id "${elementId}" not found for scroll navigation`);
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });
  }, []);
}
