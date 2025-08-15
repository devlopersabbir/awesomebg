"use client";

import { ColorPalettes } from "@/@types";
import { useTemplateStore } from "@/providers/template-store-provider";

type Props = {
  palette: ColorPalettes;
};
export default function Palette({ palette }: Props) {
  const { selectedColors, setSelectedColors } = useTemplateStore(
    (state) => state
  );

  return (
    <div
      key={palette.name}
      className={`cursor-pointer rounded-lg border-2 transition-all hover:scale-105 ${
        JSON.stringify(selectedColors) === JSON.stringify(palette.colors)
          ? "border-blue-500 ring-2 ring-blue-200"
          : "border-gray-200"
      }`}
      onClick={() => setSelectedColors(palette.colors)}
    >
      <div className="flex h-16 rounded-t-lg overflow-hidden">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="p-2 text-center">
        <div className="font-medium text-sm">{palette.name}</div>
      </div>
      {JSON.stringify(selectedColors) === JSON.stringify(palette.colors) && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
      )}
    </div>
  );
}
