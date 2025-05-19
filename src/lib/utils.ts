import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export  const parseMetricValue = (val: string | number): number => {
  const str = String(val);

  if (str.endsWith("K")) return parseFloat(str) * 1000;
  if (str.endsWith("M")) return parseFloat(str) * 1000000;
  if (str.includes("%")) return parseFloat(str);
  return parseInt(str.replace(/[^\d]/g, ""), 10);
};

export const formatWithSuffix = (value: number, raw: string | number): string => {
  const str = String(raw);

  if (str.includes("M")) return `${(value / 1_000_000).toFixed(0)}M+`;
  if (str.includes("K")) return `${(value / 1_000).toFixed(0)}K+`;
  if (str.includes("%")) return `${value}%`;
  return value.toLocaleString();
};