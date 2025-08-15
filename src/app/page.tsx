import Pattern from "@/models/patterns";
import HomePage from "./_components/home-page";

export default async function Home() {
  const data = await Pattern.find({
    publish: true,
  }).lean();

  return <HomePage patterns={JSON.parse(JSON.stringify(data))} />;
}
