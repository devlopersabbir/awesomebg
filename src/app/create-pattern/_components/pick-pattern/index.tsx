import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SelectedPattern from "./selected-pattern";
import { patternTemplates } from "../../_constants";

export default function PickPattern() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl">🎨 Step 1: Pick Your Pattern</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {patternTemplates.map((template, i) => (
            <SelectedPattern template={template} key={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
