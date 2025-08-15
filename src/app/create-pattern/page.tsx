"use client";
import PickPattern from "./_components/pick-pattern";
import ChooseColors from "./_components/choose-colors";
import Preview from "./_components/preview-generate/preview";
import Generate from "./_components/preview-generate/generate";
import GeneratedPatterns from "./_components/preview-generate/generated-patterns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SimplePatternGenerator() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="text-center mb-8">
        <p className="text-xl text-muted-foreground">
          1. Pick a pattern → 2. Choose colors → 3. Generate!
        </p>
        <Link href={"/"} className="cursor-pointer mt-10">
          <Button variant={"ghost"} className="cursor-pointer">
            Go back
          </Button>
        </Link>
      </div>

      {/* Step 1: Pick Pattern */}
      <PickPattern />
      {/* Step 2: Choose Colors */}
      <ChooseColors />

      {/* Step 3: Preview & Generate */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Preview />
        <Generate />
      </div>

      {/* Generated Patterns */}
      <GeneratedPatterns />
    </div>
  );
}
