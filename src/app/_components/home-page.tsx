"use client";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import PatternShowcase from "./pattern-showcase";
import { PatternSchema } from "@/models/pattern.schema";

type Props = {
  patterns: PatternSchema[];
};
export default function HomePage({ patterns }: Props) {
  const [activePattern, setActivePattern] = useState<string | null>(null); // just put the
  const { theme, updateTheme } = useTheme();

  useEffect(() => {
    updateTheme(activePattern, patterns);
  }, [activePattern, updateTheme, patterns]);

  // Find the active pattern object
  const activePatternObj = activePattern
    ? patterns.find((p) => p.id === activePattern)
    : null;

  useEffect(() => {
    console.log(activePattern);
  }, [activePattern, setActivePattern]);
  console.log("active: ", activePattern);
  return (
    <div className="min-h-screen relative">
      {/* Apply the active pattern as background */}
      {activePatternObj && (
        <div className="fixed inset-0 z-0" style={activePatternObj.style} />
      )}
      <div className="relative z-10">
        <Navbar theme={theme} />
        <Hero theme={theme} />
        <section className="mx-auto container px-5" id="pattern-showcase">
          <h1 className="text-5xl font-semibold">Pattern Library</h1>
          <p className="pt-2 text-muted-foreground text-xl">
            Tap on mobile or hover on desktop to see options
          </p>

          <PatternShowcase
            patterns={patterns}
            activePattern={activePattern}
            setActivePattern={setActivePattern}
            theme={theme}
          />
        </section>

        <Footer theme={theme} />
      </div>
      {/* <ReturnToPreview theme={theme} /> */}
    </div>
  );
}
