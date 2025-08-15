"use client";
import { PatternSchema } from "@/models/pattern.schema";
import { createStore } from "zustand";

export type State = {
  allPatterns: PatternSchema[];
};
export type Action = {
  store: (pattern: PatternSchema) => void;
};
export type PatternStore = State & Action;

export const defaultInitialState: State = {
  allPatterns: [],
};

export const createPatternStore = (initState: State = defaultInitialState) => {
  return createStore<PatternStore>((set, get) => ({
    ...initState,
    store: (pattern) =>
      set(() => ({ allPatterns: [...get().allPatterns, pattern] })),
  }));
};
