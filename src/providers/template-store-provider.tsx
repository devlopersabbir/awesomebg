"use client";

import {
  createTemplateStore,
  TemplateStore,
} from "@/app/_store/template-store";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

export type TemplateStoreApi = ReturnType<typeof createTemplateStore>;

export const TemplateStoreContext = createContext<TemplateStoreApi | undefined>(
  undefined
);

export const TemplateStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<TemplateStoreApi | null>(null);

  if (storeRef.current === null) storeRef.current = createTemplateStore();

  return (
    <TemplateStoreContext.Provider value={storeRef.current}>
      {children}
    </TemplateStoreContext.Provider>
  );
};

export const useTemplateStore = <T,>(
  selector: (store: TemplateStore) => T
): T => {
  const storeContext = useContext(TemplateStoreContext);
  if (!storeContext)
    throw new Error(`usePatternStore must be used within PatternStoreProvider`);

  return useStore(storeContext, selector);
};
