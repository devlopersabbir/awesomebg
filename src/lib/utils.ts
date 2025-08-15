import { ColorPalettes } from "@/@types";
import { PatternTemplate } from "@/app/create-pattern/_types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createId = (name: string) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export const generateCode = (patternName: string, background: string) => {
  return `<div className="min-h-screen w-full relative">
    {/* ${patternName} Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "${background}",
      }}
    />
    
    {/* Your Content/Components */}
  </div>`;
};
export const createBackground = (
  selectedTemplate: PatternTemplate,
  selectedColors: ColorPalettes["colors"]
) => {
  return selectedTemplate
    ? selectedTemplate.template(
        selectedColors[0],
        selectedColors[1],
        selectedColors[2]
      )
    : "linear-gradient(135deg, #f3f4f6, #e5e7eb)";
};
