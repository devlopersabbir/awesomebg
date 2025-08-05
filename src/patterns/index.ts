import { Pattern } from "@/@types";

export const gridPatterns: Pattern[] = [
  {
    id: "top-gradient-radial",
    name: "Top Gradient Radial",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-gradient-radial",
    name: "Bottom Gradient Radial",
    category: "decorative",
    badge: "✨New",
    description: "Radial gradient from white to purple starting from bottom",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-violet-radial",
    name: "Bottom Violet Radial",
    category: "decorative",
    badge: "✨New",
    description: "Rich violet from bottom - luxury feel for premium brands",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
];
