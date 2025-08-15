"use client";
import { Button } from "@/components/ui/button";
import { Download, Puzzle } from "lucide-react";
import { useTemplateStore } from "@/providers/template-store-provider";
import { CardTitle } from "@/components/ui/card";
import { exportPatterns } from "../../_libs";
import { toast } from "sonner";
import { insertPattern } from "../../_actions/create";
import { useTransition } from "react";

export default function DownloadPublish() {
  const { patterns } = useTemplateStore((state) => state);
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex items-center justify-between">
      <CardTitle className="text-2xl">
        🎉 Your Patterns ({patterns.length})
      </CardTitle>
      <div className="flex gap-2">
        <Button
          onClick={() => exportPatterns(patterns)}
          size="lg"
          variant={"secondary"}
        >
          <Download className="w-4 h-4 mr-2" />
          Download All
        </Button>
        <Button
          disabled={pending}
          onClick={() =>
            startTransition(async () => {
              try {
                await insertPattern(patterns);
                toast.success("Patterns created successfully");
              } catch (err: any) {
                toast.error(err.message);
              }
            })
          }
          size="lg"
        >
          <Puzzle className="w-4 h-4 mr-2" />
          Request for Publish
        </Button>
      </div>
    </div>
  );
}
