"use client";

import { createStore } from "zustand";
import { PatternTemplate } from "../create-pattern/_types";
import { ColorPalettes } from "@/@types";
import { createBackground } from "@/lib/utils";
import { PatternSchema } from "@/models/pattern.schema";

export type State = {
  selectedTemplate: PatternTemplate | null;
  selectedColors: ColorPalettes["colors"];
  currentPreview: string;
  patterns: PatternSchema[];
};
export type Action = {
  setSelectedTemplate: (template: PatternTemplate) => void;
  setSelectedColors: (colors: ColorPalettes["colors"]) => void;
  setPatterns: (pattern: PatternSchema) => void;
};
export type TemplateStore = State & Action;

export const defaultInitialState: State = {
  selectedTemplate: null,
  selectedColors: ["#ffffff", "#6366f1", "#3b82f6"],
  currentPreview: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
  patterns: [],
};

export const createTemplateStore = (initState: State = defaultInitialState) => {
  return createStore<TemplateStore>((set, get) => ({
    ...initState,

    setSelectedTemplate: (template) => {
      set(() => ({
        selectedTemplate: template,
        currentPreview: createBackground(
          get().selectedTemplate!,
          get().selectedColors
        ),
      }));
    },
    setSelectedColors: (colors) => {
      set(() => ({
        selectedColors: colors,
        currentPreview: createBackground(
          get().selectedTemplate!,
          get().selectedColors
        ),
      }));
    },

    setPatterns: (pattern) => {
      set(() => ({ patterns: [...get().patterns, pattern] }));
    },
  }));
};
