"use client";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import { gridPatterns } from "@/patterns";
import { useState, useEffect } from "react";

export default function Home() {
  const [activePattern, setActivePattern] = useState<string | null>(
    "bottom-violet-radial"
  ); // just put the
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Find the active pattern object
  const activePatternObj = activePattern
    ? gridPatterns.find((p) => p.id === activePattern)
    : null;

  // Update theme based on pattern background color
  useEffect(() => {
    if (activePatternObj) {
      const is_dark = ["#0", "#1", "rgba(0,", "rgba(1,"];
      // Check if pattern ID starts with "dark-" or contains specific dark colors
      const background = activePatternObj.style.background || "";
      const isDark =
        activePatternObj.id.startsWith("dark-") ||
        (typeof background === "string" && is_dark.includes(background));

      setTheme(isDark ? "dark" : "light");
    } else {
      setTheme("light");
    }
  }, [activePattern, activePatternObj]);

  useEffect(() => {
    setActivePattern("bottom-violet-radial");
  }, []);
  return (
    <div className="min-h-screen relative">
      {/* Apply the active pattern as background */}
      {activePatternObj && (
        <div className="fixed inset-0 z-0" style={activePatternObj.style} />
      )}
      <div className="relative z-10">
        <Navbar theme={theme} />
        <Hero theme={theme} />
        <section className="py-10 mx-auto container border-2 px-5">
          <h1 className="text-4xl">Card will be show here...</h1>
        </section>
        {/* <h1>Pattern showcase</h1>
        <PatternShowcase
          activePattern={activePattern}
          setActivePattern={setActivePattern}
          theme={theme}
        /> */}
        <Footer theme={theme} />
      </div>
      {/* <ReturnToPreview theme={theme} /> */}
    </div>
  );
}
