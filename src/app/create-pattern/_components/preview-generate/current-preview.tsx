"use client";

import { useTemplateStore } from "@/providers/template-store-provider";

export default function CurrentPreview() {
  const { currentPreview, selectedTemplate } = useTemplateStore(
    (state) => state
  );
  console.log(currentPreview);

  return (
    <div
      className="w-full h-48 rounded-lg border relative"
      style={{ background: currentPreview }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h3 className="font-bold text-gray-900">
            {selectedTemplate?.name || "Select a pattern"}
          </h3>
          {selectedTemplate?.description && (
            <p className="text-sm text-gray-600 mt-1">
              {selectedTemplate.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
