export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    ok: true,
    service: "moonwitness-xii",
    framework: "nextjs-app-router",
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    orm: "prisma",
  });
}
