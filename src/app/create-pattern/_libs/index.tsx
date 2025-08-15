"use client";

import { PatternSchema } from "@/models/pattern.schema";
import { toast } from "sonner";

export const exportPatterns = (patterns: PatternSchema[]) => {
  const exportData = `
${JSON.stringify(patterns, null, 2)}`;

  const blob = new Blob([exportData], { type: "text/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "patterns.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast.success("Downloaded! 📥");
};
