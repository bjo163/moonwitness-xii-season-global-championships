import { prisma } from "../../../src/lib/prisma.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return Response.json(
      { ok: false, code: "DATABASE_NOT_CONFIGURED", message: "Configure DATABASE_URL and run the documented Prisma migration before enabling database-backed registry reads." },
      { status: 503 }
    );
  }

  try {
    const entries = await prisma.registryEntry.findMany({ orderBy: { slot: "asc" } });
    return Response.json({ ok: true, count: entries.length, entries }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json(
      { ok: false, code: "DATABASE_UNAVAILABLE", message: "Registry storage is not ready. Check database connectivity and applied migrations." },
      { status: 503 }
    );
  }
}
