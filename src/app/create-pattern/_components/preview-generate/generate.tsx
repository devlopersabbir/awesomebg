import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import CreatePattern from "./create-pattern";

export default function Generate() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">🚀 Step 3: Generate!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CreatePattern />
      </CardContent>
    </Card>
  );
}
