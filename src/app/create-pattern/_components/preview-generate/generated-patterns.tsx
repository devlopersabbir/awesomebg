"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import DownloadPublish from "./download-publish";
import { useTemplateStore } from "@/providers/template-store-provider";
import PreviewPatternCard from "./preview-pattern-card";

export default function GeneratedPatterns() {
  const { patterns } = useTemplateStore((state) => state);
  return (
    patterns.length && (
      <Card>
        <CardHeader>
          <DownloadPublish />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patterns.map((pattern, i) => (
              <PreviewPatternCard pattern={pattern} key={i} />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  );
}
