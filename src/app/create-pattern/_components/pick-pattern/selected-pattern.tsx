"use client";

import { PatternTemplate } from "@/app/create-pattern/_types";
import { Badge } from "@/components/ui/badge";
import { useTemplateStore } from "@/providers/template-store-provider";

type Props = {
  template: PatternTemplate;
};

export default function SelectedPattern({ template }: Props) {
  const { selectedTemplate, setSelectedTemplate } = useTemplateStore(
    (state) => state
  );

  return (
    <div
      key={template.id}
      className={`relative cursor-pointer rounded-lg border-2 transition-all hover:scale-105 ${
        selectedTemplate?.id === template.id
          ? "border-blue-500 ring-2 ring-blue-200"
          : "border-gray-200"
      }`}
      onClick={() => setSelectedTemplate(template)}
    >
      <div
        className="w-full h-24 rounded-t-lg"
        style={{ background: template.preview }}
      />
      <div className="p-2">
        <div className="font-medium text-sm">{template.name}</div>
        {template.badge && (
          <Badge variant="secondary" className="text-xs mt-1">
            {template.badge}
          </Badge>
        )}
      </div>
      {selectedTemplate?.id === template.id && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
      )}
    </div>
  );
}
