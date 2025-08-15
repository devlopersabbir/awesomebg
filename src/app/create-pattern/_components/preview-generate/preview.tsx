import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import CurrentPreview from "./current-preview";

export default function Preview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">👀 Live Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <CurrentPreview />
      </CardContent>
    </Card>
  );
}
