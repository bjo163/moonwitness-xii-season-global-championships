import { notFound, redirect } from "next/navigation";
import Characters from "../../pages/Characters.jsx";
import Champions from "../../pages/Champions.jsx";
import CommandCenter from "../../pages/CommandCenter.jsx";
import Grand from "../../pages/Grand.jsx";
import Paradise from "../../pages/Paradise.jsx";
import Patch033 from "../../pages/Patch033.jsx";
import Research from "../../pages/Research.jsx";
import { StoryArchive, StoryDetail } from "../../pages/Stories.jsx";
import Syafaat from "../../pages/Syafaat.jsx";
import Workspace from "../../pages/Workspace.jsx";

export default async function RoutedPage({ params }) {
  const { slug = [] } = await params;
  const path = slug.join("/");
  if (path === "paradise.html") redirect("/paradise");
  if (path === "syafaat-status.html") redirect("/syafaat-status");
  if (path === "characters") return <Characters />;
  if (path === "champions") return <Champions />;
  if (path === "command-center") return <CommandCenter />;
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
