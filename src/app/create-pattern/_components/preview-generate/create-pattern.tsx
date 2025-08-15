"use client";
import { copyToClipboard } from "@/app/_libs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createBackground, createId, generateCode } from "@/lib/utils";
import { PatternSchema } from "@/models/pattern.schema";
import { useTemplateStore } from "@/providers/template-store-provider";
import { Copy, Plus } from "lucide-react";
import { Fragment, useState } from "react";
import { toast } from "sonner";

export default function CreatePattern() {
  const { selectedTemplate, selectedColors, setPatterns } = useTemplateStore(
    (state) => state
  );
  const [patternName, setPatternName] = useState<string>("");

  const generateAndCopyCode = async () => {
    if (!selectedTemplate || !patternName)
      return toast.error("Missing selection");

    const background = createBackground(selectedTemplate, selectedColors);
    const code = generateCode(patternName, background);

    await copyToClipboard(code);
    toast.success("Code copied! 📋");
  };
  const createHandler = async () => {
    if (!selectedTemplate || !patternName)
      return toast.error("Missing selection");

    const background = createBackground(selectedTemplate, selectedColors);

    const newPattern: PatternSchema = {
      id: createId(patternName),
      name: patternName,
      description: selectedTemplate.description!,
      badge: selectedTemplate.badge!,
      category: selectedTemplate.category,
      style: {
        background,
      },
      code: generateCode(patternName, background),
      publish: true,
    };
    setPatterns(newPattern);
    setPatternName("");

    toast.success("Pattern created! 🎉");
  };
  return (
    <Fragment>
      <div>
        <Input
          placeholder="Enter pattern name (e.g., 'Beautiful Sunset')"
          value={patternName}
          onChange={(e) => setPatternName(e.target.value)}
          className="text-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={generateAndCopyCode}
          variant="outline"
          className="text-lg py-6 bg-transparent"
          disabled={!selectedTemplate || !patternName}
        >
          <Copy className="w-4 h-4 mr-2" />
          Generate & Copy
        </Button>
        <Button
          onClick={createHandler}
          className="text-lg py-6"
          disabled={!selectedTemplate || !patternName}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Pattern
        </Button>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        <strong>Generate & Copy:</strong> Copy code to clipboard •{" "}
        <strong>Create Pattern:</strong> Save to collection
      </p>
    </Fragment>
  );
}
