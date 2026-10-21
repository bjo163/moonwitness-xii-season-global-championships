export type MetricStatus = "calculated" | "not_applicable";
export interface RateMetric {
  numerator: number;
  denominator: number;
  percent: number | null;
  status: MetricStatus;
}
export interface SyafaatSubmissionRecord {
  id?: unknown;
  status?: string;
}
export interface SyafaatPatchRecord {
  id?: unknown;
  status?: string;
}
export interface SyafaatMetrics {
  submissions: {
    totalUnique: number;
    invalidRecords: number;
    duplicateIdRecords: number;
    decided: number;
    approved: number;
    rejected: number;
    approvalRate: RateMetric;
  };
  patches: {
    totalUnique: number;
    invalidRecords: number;
    duplicateIdRecords: number;
    eligibleForImplementation: number;
    implemented: number;
    implementationRate: RateMetric;
    evaluated: number;
    verifiedSuccess: number;
    verifiedSuccessRate: RateMetric;
  };
}
export function calculateSyafaatMetrics(input?: {
  submissions?: SyafaatSubmissionRecord[];
  patches?: SyafaatPatchRecord[];
}): SyafaatMetrics;
