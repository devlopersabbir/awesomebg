"use client";

import { Pattern, Theme } from "@/@types";
import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  const updateTheme = (activePattern: string | null, patterns: Pattern[]) => {
    if (!activePattern) return setTheme("light");

    const activePatternObj = patterns.find((p) => p.id === activePattern);
    if (!activePatternObj) return setTheme("light");

    // Check if pattern ID starts with "dark-" or contains specific dark colors
    const background = activePatternObj.style.background || "";
    const isDark =
      activePatternObj.id.startsWith("dark-") ||
      (typeof background === "string" &&
        (background.includes("#0") ||
          background.includes("#1") ||
          background.includes("rgba(0,") ||
          background.includes("rgba(1,")));

    setTheme(isDark ? "dark" : "light");
  };

  return {
    theme,
    setTheme,
    updateTheme,
  };
}
