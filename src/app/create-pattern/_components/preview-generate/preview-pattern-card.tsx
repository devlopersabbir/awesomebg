import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PatternSchema } from "@/models/pattern.schema";
import CardButtons from "./card-buttons";

type Props = {
  pattern: PatternSchema;
};
export default function PreviewPatternCard({ pattern }: Props) {
  return (
    <Card key={pattern.id} className="relative">
      <CardContent className="p-4">
        <div className="w-full h-20 rounded-lg mb-3" style={pattern.style} />
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold">{pattern.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">
              {pattern.category}
            </p>
            {pattern.badge && (
              <Badge variant="secondary" className="mt-1">
                {pattern.badge}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <CardButtons pattern={pattern} />
        </div>
      </CardContent>
    </Card>
  );
}
