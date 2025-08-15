import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { colorPalettes } from "../../_constants";
import Palette from "./palette";

export default function ChooseColors() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl">
          🎨 Step 2: Choose Your Colors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colorPalettes.map((palette, i) => (
            <Palette palette={palette} key={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
