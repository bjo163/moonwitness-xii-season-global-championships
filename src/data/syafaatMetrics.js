const DECIDED_SUBMISSION_STATUSES = new Set(['approved', 'rejected']);
const IMPLEMENTATION_ELIGIBLE_STATUSES = new Set([
  'approved',
  'in_implementation',
  'implemented_pending_verification',
  'verified_success',
  'verified_partial',
  'verified_failure',
]);
const IMPLEMENTED_PATCH_STATUSES = new Set([
  'implemented_pending_verification',
  'verified_success',
  'verified_partial',
  'verified_failure',
]);
const EVALUATED_PATCH_STATUSES = new Set([
  'verified_success',
  'verified_partial',
  'verified_failure',
]);

function uniqueById(records = []) {
  const seen = new Set();
  const unique = [];
  for (const record of records) {
    if (!record || typeof record.id !== 'string' || !record.id.trim()) continue;
    if (seen.has(record.id)) continue;
    seen.add(record.id);
    unique.push(record);
  }
  return unique;
}

function rate(numerator, denominator) {
  if (denominator === 0) return { numerator, denominator, percent: null, status: 'not_applicable' };
  return {
    numerator,
    denominator,
    percent: Number(((numerator / denominator) * 100).toFixed(2)),
    status: 'calculated',
  };
}

/**
 * Reproducible administrative metrics only. These outputs are not spiritual scores.
 * Duplicate IDs are counted and only the first occurrence is used in denominators.
 */
export function calculateSyafaatMetrics({ submissions = [], patches = [] } = {}) {
  const validSubmissions = submissions.filter((record) => record && typeof record.id === 'string' && record.id.trim());
  const validPatches = patches.filter((record) => record && typeof record.id === 'string' && record.id.trim());
  const uniqueSubmissions = uniqueById(validSubmissions);
  const uniquePatches = uniqueById(validPatches);

  const decided = uniqueSubmissions.filter((record) => DECIDED_SUBMISSION_STATUSES.has(record.status));
  const approved = decided.filter((record) => record.status === 'approved').length;
  const implementationEligible = uniquePatches.filter((record) => IMPLEMENTATION_ELIGIBLE_STATUSES.has(record.status));
  const implemented = implementationEligible.filter((record) => IMPLEMENTED_PATCH_STATUSES.has(record.status)).length;
  const evaluated = uniquePatches.filter((record) => EVALUATED_PATCH_STATUSES.has(record.status));
  const verifiedSuccess = evaluated.filter((record) => record.status === 'verified_success').length;

  return {
    submissions: {
      totalUnique: uniqueSubmissions.length,
      invalidRecords: submissions.length - validSubmissions.length,
      duplicateIdRecords: validSubmissions.length - uniqueSubmissions.length,
      decided: decided.length,
      approved,
      rejected: decided.filter((record) => record.status === 'rejected').length,
      approvalRate: rate(approved, decided.length),
    },
    patches: {
      totalUnique: uniquePatches.length,
      invalidRecords: patches.length - validPatches.length,
      duplicateIdRecords: validPatches.length - uniquePatches.length,
      eligibleForImplementation: implementationEligible.length,
      implemented,
      implementationRate: rate(implemented, implementationEligible.length),
      evaluated: evaluated.length,
      verifiedSuccess,
      verifiedSuccessRate: rate(verifiedSuccess, evaluated.length),
    },
  };
}
