import { colorPalettes } from "@/app/create-pattern/_constants";
import { THEME_CONFIG } from "@/constants";
import type { CSSProperties } from "react";

export const categories = [
  "gradients",
  "geometric",
  "decorative",
  "effects",
] as const;
export const badges = ["✨New", "🎇Features", "🔥Hot"] as const;
export type Category = (typeof categories)[number];
export type Badges = (typeof badges)[number];
export type ColorPalettes = (typeof colorPalettes)[number];

export type Pattern = z.infer<typeof patternSchema>;
export type Theme = (typeof THEME_CONFIG)[number];
