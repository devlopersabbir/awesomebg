import { PatternTemplate } from "../_types";

export const patternTemplates: PatternTemplate[] = [
  {
    id: "top-radial",
    name: "Top Radial Glow",
    category: "gradients",
    preview: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    template: (c1, c2) =>
      `radial-gradient(125% 125% at 50% 10%, ${c1} 40%, ${c2} 100%)`,
    description: "Glowing effect from top",
    badge: "New",
  },
  {
    id: "bottom-radial",
    name: "Bottom Radial Glow",
    category: "gradients",
    preview: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    template: (c1, c2) =>
      `radial-gradient(125% 125% at 50% 90%, ${c1} 40%, ${c2} 100%)`,
    badge: "✨New",
    description: "Glowing effect from bottom",
  },
  {
    id: "diagonal-gradient",
    name: "Diagonal Gradient",
    category: "gradients",
    preview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    template: (c1, c2) => `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
    description: "Smooth diagonal transition",
  },
  {
    id: "sunset-gradient",
    name: "Sunset Gradient",
    category: "gradients",
    preview: "linear-gradient(to bottom, #ff7e5f, #feb47b, #ff7e5f)",
    template: (c1, c2, c3) =>
      `linear-gradient(to bottom, ${c1}, ${c2}, ${c3 || c1})`,
    description: "Three-color sunset effect",
  },
  {
    id: "center-radial",
    name: "Center Radial",
    category: "gradients",
    preview: "radial-gradient(circle at center, #667eea 0%, #764ba2 100%)",
    template: (c1, c2) =>
      `radial-gradient(circle at center, ${c1} 0%, ${c2} 100%)`,
    description: "Perfect center glow",
  },
  {
    id: "corner-radial",
    name: "Corner Radial",
    category: "gradients",
    preview: "radial-gradient(125% 125% at 100% 0%, #667eea 40%, #764ba2 100%)",
    template: (c1, c2) =>
      `radial-gradient(125% 125% at 100% 0%, ${c1} 40%, ${c2} 100%)`,
    description: "Glow from top-right corner",
  },
  {
    id: "vertical-gradient",
    name: "Vertical Gradient",
    category: "gradients",
    preview: "linear-gradient(to bottom, #667eea, #764ba2)",
    template: (c1, c2) => `linear-gradient(to bottom, ${c1}, ${c2})`,
    description: "Simple top to bottom",
  },
  {
    id: "horizontal-gradient",
    name: "Horizontal Gradient",
    category: "gradients",
    preview: "linear-gradient(to right, #667eea, #764ba2)",
    template: (c1, c2) => `linear-gradient(to right, ${c1}, ${c2})`,
    description: "Simple left to right",
  },
  {
    id: "conic-gradient",
    name: "Conic Spin",
    category: "effects",
    preview: "conic-gradient(from 0deg, #667eea, #764ba2, #667eea)",
    template: (c1, c2) => `conic-gradient(from 0deg, ${c1}, ${c2}, ${c1})`,
    badge: "🔥Hot",
    description: "Spinning color wheel effect",
  },
  {
    id: "mesh-gradient",
    name: "Mesh Gradient",
    category: "effects",
    preview:
      "radial-gradient(at 40% 20%, #667eea 0px, transparent 50%), radial-gradient(at 80% 0%, #764ba2 0px, transparent 50%), radial-gradient(at 0% 50%, #667eea 0px, transparent 50%)",
    template: (c1, c2) =>
      `radial-gradient(at 40% 20%, ${c1} 0px, transparent 50%), radial-gradient(at 80% 0%, ${c2} 0px, transparent 50%), radial-gradient(at 0% 50%, ${c1} 0px, transparent 50%)`,
    badge: "✨New",
    description: "Modern mesh effect",
  },
];

export const colorPalettes = [
  { name: "Blue", colors: ["#ffffff", "#6366f1", "#3b82f6"] },
  { name: "Purple", colors: ["#ffffff", "#7c3aed", "#a855f7"] },
  { name: "Pink", colors: ["#ffffff", "#ec4899", "#f472b6"] },
  { name: "Green", colors: ["#ffffff", "#10b981", "#34d399"] },
  { name: "Orange", colors: ["#ffffff", "#f59e0b", "#fb923c"] },
  { name: "Red", colors: ["#ffffff", "#ef4444", "#f87171"] },
  { name: "Teal", colors: ["#ffffff", "#14b8a6", "#5eead4"] },
  { name: "Indigo", colors: ["#ffffff", "#6366f1", "#8b5cf6"] },
  { name: "Dark", colors: ["#1f2937", "#374151", "#6b7280"] },
  { name: "Sunset", colors: ["#ff7e5f", "#feb47b", "#ff6b6b"] },
  { name: "Ocean", colors: ["#667eea", "#764ba2", "#89f7fe"] },
  { name: "Forest", colors: ["#134e5e", "#71b280", "#a8e6cf"] },
] as const;
