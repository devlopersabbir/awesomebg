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

export type Pattern = {
  id: string;
  name: string;
  category: Category;
  description?: string;
  badge?: Badges;
  style: CSSProperties;
  code: string;
};
