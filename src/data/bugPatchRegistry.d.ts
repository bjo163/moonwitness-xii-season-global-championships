import type { BugSubmission, ReportedApproval } from "../types";

export type PatchRecordStatus =
  | "registered"
  | "recovered_draft"
  | "number_conflict"
  | "proposed"
  | "user_selected_draft"
  | "user_submitted_in_chat";

export interface PatchCandidate {
  id: string;
  title: string;
  scope: string;
  summary: string;
  benefit: string;
  references: string;
  recordStatus: PatchRecordStatus;
  note: string;
  reviewNeeded: string;
  provenance: string;
  origin?: string;
  reportedApproval?: ReportedApproval;
  approvalStatus?: string;
  evidenceStatus?: string;
  externalSubmission?: string;
  conflictingCandidate?: { title: string; summary: string };
  [key: string]: unknown;
}

export interface DisplacedPatchConcept {
  archiveId: string;
  title: string;
  formerSlot: string;
  summary: string;
}

export const registryEntries: Array<PatchCandidate & Partial<BugSubmission>>;
export const registryStatusLabels: Record<PatchRecordStatus, string>;
export const registrySummary: {
  total: number;
  target: number;
  registered: number;
  recovered: number;
  conflicted: number;
  proposed: number;
  selected: number;
  submittedInChat: number;
  verifiedApprovals: number;
};
export const registryNote: string;
export const displacedPatchConcepts: DisplacedPatchConcept[];
export const selectedPatch: unknown;
