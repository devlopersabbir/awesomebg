"use client";
import { Theme } from "@/@types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/hooks/use-copy";
import { PatternSchema } from "@/models/pattern.schema";
import { Check, Copy, Eye, Sparkles, Star } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  patterns: PatternSchema[];
  activePattern: string | null;
  setActivePattern: Dispatch<SetStateAction<string | null>>;
  theme: Theme;
};
export default function PatternShowcase({
  activePattern,
  setActivePattern,
  patterns,
}: Props) {
  const { copy, isCopied } = useCopy();
  console.log("pattern: ", activePattern);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-10">
      {patterns.map((item, i) => (
        <div key={i} className="group relative">
          <div
            className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-300 ${
              activePattern === item.id
                ? "ring-2 ring-primary ring-offset-2"
                : ""
            } ${
              item.id
                ? "scale-[1.02] shadow-lg sm:scale-100"
                : "hover:shadow-lg hover:scale-[1.02]"
            }`}
            onClick={() => console.log("item id: ", item.id)}
          >
            {/* Favorite Button with Star Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`absolute top-2 left-2 z-10 p-2 rounded-full backdrop-blur-md shadow-lg border transition-all cursor-pointer duration-200 hover:scale-110 group/star bg-gray-500/50`}
            >
              <Star className={`h-4 w-4 transition-all duration-200`} />
            </button>

            {/* Pattern style */}
            <div className="absolute inset-0" style={item.style} />

            {/* Badge */}
            {item.badge && (
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                <Badge
                  variant="secondary"
                  className="gap-1 text-xs bg-background/80 backdrop-blur-sm border-border/50 px-2 py-1"
                >
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-600" />
                  <span>{item.badge}</span>
                </Badge>
              </div>
            )}

            {/* Mobile: Simple preview and copy buttons */}
            <div className="sm:hidden absolute bottom-2 left-2 right-2 z-10 flex justify-center gap-2 px-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("clicked....", item.id);
                  setActivePattern(item.id);
                  document.getElementById("trigger-preview-scroll")?.click();
                }}
                className="flex-1 bg-white/95 hover:bg-white text-black border-0 text-xs h-8"
              >
                <Eye className="h-3 w-3 mr-1" />
                {activePattern === item.id ? "Hide" : "Preview"}
              </Button>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  copy("code", "pattern_id");
                }}
                className={`flex-1 border-0 text-xs h-8 ${
                  isCopied("pattern_id")
                    ? "bg-gray-700 hover:bg-gray-800 text-white"
                    : "bg-gray-900/90 hover:bg-gray-900 text-white"
                }`}
                disabled={isCopied("pattern_id")}
              >
                {isCopied("pattern_id") ? (
                  <>
                    <Check className="h-3 w-3 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            {/* Desktop: Hover overlay */}
            <div className="hidden sm:flex absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-4 drop-shadow-lg">
                  {item.name}
                </h3>
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full xs:w-auto">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("clicked....", item.id);
                      setActivePattern(item.id);
                      document
                        .getElementById("trigger-preview-scroll")
                        ?.click();
                    }}
                    className="cursor-pointer shadow-xl backdrop-blur-md bg-white/95 hover:bg-white text-black border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    {activePattern === item.id ? "Hide" : "Preview"}
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      copy("code", "id");
                    }}
                    className={`cursor-pointer shadow-xl backdrop-blur-md gap-1 border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto ${
                      isCopied("id")
                        ? "bg-gray-700 hover:bg-gray-800 text-white border border-gray-500"
                        : "bg-gray-900/90 hover:bg-gray-900 text-white"
                    }`}
                    disabled={isCopied("id")}
                  >
                    {isCopied("id") ? (
                      <>
                        <Check className="h-3 w-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
