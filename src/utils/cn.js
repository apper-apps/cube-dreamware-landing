import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getStaggerDelay(baseDelay, index, sectionDelay = 0) {
  return baseDelay + (index * 100) + sectionDelay;
}

export function getStaggerClass(index, maxIndex = 20) {
  const clampedIndex = Math.min(index + 1, maxIndex);
  return `stagger-${clampedIndex}`;
}