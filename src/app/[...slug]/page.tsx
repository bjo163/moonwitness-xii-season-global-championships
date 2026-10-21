import { notFound, redirect } from "next/navigation";
import Characters from "../../pages-ui/Characters.tsx";
import Champions from "../../pages-ui/Champions.tsx";
import CommandCenter from "../../pages-ui/CommandCenter.tsx";
import Ecosystem from "../../pages-ui/Ecosystem.tsx";
import Grand from "../../pages-ui/Grand.tsx";
import Paradise from "../../pages-ui/Paradise.tsx";
import Patch033 from "../../pages-ui/Patch033.tsx";
import Research from "../../pages-ui/Research.tsx";
import { StoryArchive, StoryDetail } from "../../pages-ui/Stories.tsx";
import Syafaat from "../../pages-ui/Syafaat.tsx";
import Workspace from "../../pages-ui/Workspace.tsx";

type RouteProps = { params: Promise<{ slug?: string[] }> };
export default async function RoutedPage({ params }: RouteProps) {
  const { slug = [] } = await params;
  const path = slug.join("/");
  if (path === "paradise.html") redirect("/paradise");
  if (path === "syafaat-status.html") redirect("/syafaat-status");
  if (path === "characters") return <Characters />;
  if (path === "champions") return <Champions />;
  if (path === "command-center") return <CommandCenter />;
  if (path === "ecosystem") return <Ecosystem />;
  if (path === "grand-plan") return <Grand />;
  if (path === "paradise") return <Paradise />;
  if (path === "research") return <Research />;
  if (path === "workspace") return <Workspace />;
  if (path === "syafaat-status") return <Syafaat />;
  if (path === "syafaat-status/033") return <Patch033 />;
  if (path === "stories") return <StoryArchive />;
  if (path.startsWith("stories/")) return <StoryDetail />;
  notFound();
}
