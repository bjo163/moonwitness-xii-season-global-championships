CREATE TABLE "registry_entries" (
  "id" TEXT NOT NULL,
  "slot" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "scope" TEXT NOT NULL,
  "summary" TEXT NOT NULL,
  "benefit" TEXT,
  "references" TEXT,
  "recordStatus" TEXT NOT NULL DEFAULT 'editorial_proposal',
  "provenance" TEXT NOT NULL,
  "sourceText" TEXT,
  "reviewNeeded" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "registry_entries_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "registry_entries_slot_key" ON "registry_entries"("slot");
CREATE INDEX "registry_entries_recordStatus_idx" ON "registry_entries"("recordStatus");

CREATE TABLE "character_profiles" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "biography" TEXT NOT NULL,
  "visualBrief" TEXT NOT NULL,
  "accentColor" TEXT NOT NULL DEFAULT '#82e4d1',
  "canonStatus" TEXT NOT NULL DEFAULT 'fictional_symbolic',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "character_profiles_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "character_profiles_slug_key" ON "character_profiles"("slug");

CREATE TABLE "champion_records" (
  "id" TEXT NOT NULL,
  "sourceKey" TEXT NOT NULL,
  "displayName" TEXT NOT NULL,
  "tradition" TEXT NOT NULL,
  "symbolicAward" TEXT NOT NULL,
  "gift" TEXT NOT NULL,
  "sourceUrl" TEXT,
  "reviewStatus" TEXT NOT NULL DEFAULT 'pending_independent_review',
  "reviewNote" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "champion_records_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "champion_records_sourceKey_key" ON "champion_records"("sourceKey");
CREATE INDEX "champion_records_reviewStatus_idx" ON "champion_records"("reviewStatus");
CREATE INDEX "champion_records_tradition_idx" ON "champion_records"("tradition");

CREATE TABLE "poster_assets" (
  "id" TEXT NOT NULL,
  "assetKey" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "storageUrl" TEXT,
  "altText" TEXT,
  "provenance" TEXT,
  "sha256" TEXT,
  "reviewState" TEXT NOT NULL DEFAULT 'unverified',
  "reviewedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "poster_assets_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "poster_assets_assetKey_key" ON "poster_assets"("assetKey");
CREATE INDEX "poster_assets_reviewState_idx" ON "poster_assets"("reviewState");

CREATE TABLE "workspace_records" (
  "id" TEXT NOT NULL,
  "workspaceId" TEXT NOT NULL,
  "recordType" TEXT NOT NULL,
  "payload" JSONB NOT NULL,
  "version" INTEGER NOT NULL DEFAULT 1,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "workspace_records_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "workspace_records_workspaceId_recordType_key" ON "workspace_records"("workspaceId", "recordType");
CREATE INDEX "workspace_records_workspaceId_idx" ON "workspace_records"("workspaceId");

CREATE TABLE "audit_events" (
  "id" TEXT NOT NULL,
  "entityType" TEXT NOT NULL,
  "entityId" TEXT NOT NULL,
  "action" TEXT NOT NULL,
  "actorLabel" TEXT NOT NULL DEFAULT 'system',
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "audit_events_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "audit_events_entityType_entityId_idx" ON "audit_events"("entityType", "entityId");
CREATE INDEX "audit_events_createdAt_idx" ON "audit_events"("createdAt");
