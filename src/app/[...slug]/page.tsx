import { notFound, redirect } from "next/navigation";
import Characters from "../../pages-ui/Characters.jsx";
import Champions from "../../pages-ui/Champions.jsx";
import CommandCenter from "../../pages-ui/CommandCenter.jsx";
import Ecosystem from "../../pages-ui/Ecosystem.jsx";
import Grand from "../../pages-ui/Grand.jsx";
import Paradise from "../../pages-ui/Paradise.jsx";
import Patch033 from "../../pages-ui/Patch033.jsx";
import Research from "../../pages-ui/Research.jsx";
import { StoryArchive, StoryDetail } from "../../pages-ui/Stories.jsx";
import Syafaat from "../../pages-ui/Syafaat.jsx";
import Workspace from "../../pages-ui/Workspace.jsx";

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
