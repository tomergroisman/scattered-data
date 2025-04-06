import type { Route } from "./+types/home";
import { MeaninglessComponentName } from "~/pages/TheThing";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Scattered Data" }];
}

export default function Home() {
  return <MeaninglessComponentName />;
}
