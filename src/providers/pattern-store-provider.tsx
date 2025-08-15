"use client";
import { createPatternStore, PatternStore } from "@/app/_store/pattern-store";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

export type PatternStoreApi = ReturnType<typeof createPatternStore>;

export const PatternStoreContext = createContext<PatternStoreApi | undefined>(
  undefined
);

export const PatternStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<PatternStoreApi | null>(null);

  if (storeRef.current === null) storeRef.current = createPatternStore();

  return (
    <PatternStoreContext.Provider value={storeRef.current}>
      {children}
    </PatternStoreContext.Provider>
  );
};

export const usePatternStore = <T,>(
  selector: (store: PatternStore) => T
): T => {
  const patternStoreContext = useContext(PatternStoreContext);
  if (!patternStoreContext)
    throw new Error(`usePatternStore must be used within PatternStoreProvider`);

  return useStore(patternStoreContext, selector);
};
