"use client";
import { copyToClipboard } from "@/app/_libs";
import { Button } from "@/components/ui/button";
import { PatternSchema } from "@/models/pattern.schema";
import { Copy } from "lucide-react";

type Props = {
  pattern: PatternSchema;
};
export default function CardButtons({ pattern }: Props) {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => copyToClipboard(pattern.code)}
        className="flex-1"
      >
        <Copy className="w-3 h-3 mr-1" />
        Copy Code
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => copyToClipboard(JSON.stringify(pattern, null, 2))}
        className="flex-1"
      >
        <Copy className="w-3 h-3 mr-1" />
        Copy JSON
      </Button>
    </>
  );
}
