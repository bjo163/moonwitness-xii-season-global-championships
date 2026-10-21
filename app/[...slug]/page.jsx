import { notFound, redirect } from "next/navigation";
import Characters from "../../src/pages/Characters.jsx";
import Champions from "../../src/pages/Champions.jsx";
import CommandCenter from "../../src/pages/CommandCenter.jsx";
import Grand from "../../src/pages/Grand.jsx";
import Paradise from "../../src/pages/Paradise.jsx";
import Patch033 from "../../src/pages/Patch033.jsx";
import Research from "../../src/pages/Research.jsx";
import { StoryArchive, StoryDetail } from "../../src/pages/Stories.jsx";
import Syafaat from "../../src/pages/Syafaat.jsx";
import Workspace from "../../src/pages/Workspace.jsx";

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
