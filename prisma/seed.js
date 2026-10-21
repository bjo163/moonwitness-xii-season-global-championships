import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required. Copy .env.example to .env.local and configure a dedicated MoonWitness XII database.");
  }

  await prisma.registryEntry.upsert({
    where: { slot: 33 },
    update: {
      title: "KOPIHITAM - SIACENG",
      scope: "Faith / Action",
      summary: "A user-requested concept about translating faith into constructive action across five human domains.",
      benefit: "A structured prompt for reflection and practical responsibility; the full primary submission text still needs recovery.",
      recordStatus: "recorded_in_chat",
      provenance: "User-provided project conversation, 2026-10-17",
      reviewNeeded: "Recover the original full text and verify any external submission or approval independently.",
    },
    create: {
      slot: 33,
      title: "KOPIHITAM - SIACENG",
      scope: "Faith / Action",
      summary: "A user-requested concept about translating faith into constructive action across five human domains.",
      benefit: "A structured prompt for reflection and practical responsibility; the full primary submission text still needs recovery.",
      references: "Faith to Action; five human domains",
      recordStatus: "recorded_in_chat",
      provenance: "User-provided project conversation, 2026-10-17",
      reviewNeeded: "Recover the original full text and verify any external submission or approval independently.",
    },
  });
}

main()
  .then(() => console.log("Seeded registry slot #033 without asserting external approval."))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
