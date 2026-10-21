import assert from 'node:assert/strict';
import { calculateSyafaatMetrics } from '../src/data/syafaatMetrics.js';

const empty = calculateSyafaatMetrics();
assert.equal(empty.submissions.totalUnique, 0);
assert.equal(empty.submissions.approvalRate.percent, null);
assert.equal(empty.submissions.approvalRate.status, 'not_applicable');
assert.equal(empty.patches.implementationRate.percent, null);
assert.equal(empty.patches.verifiedSuccessRate.percent, null);

const metrics = calculateSyafaatMetrics({
  submissions: [
    { id: 'S-1', status: 'approved' },
    { id: 'S-2', status: 'rejected' },
    { id: 'S-3', status: 'pending' },
    { id: 'S-1', status: 'rejected' },
    { title: 'missing ID', status: 'approved' },
  ],
  patches: [
    { id: 'P-1', status: 'approved' },
    { id: 'P-2', status: 'implemented_pending_verification' },
    { id: 'P-3', status: 'verified_success' },
    { id: 'P-4', status: 'verified_failure' },
    { id: 'P-4', status: 'verified_success' },
    { id: 'P-5', status: 'draft' },
  ],
});

assert.equal(metrics.submissions.totalUnique, 3);
assert.equal(metrics.submissions.duplicateIdRecords, 1);
assert.equal(metrics.submissions.invalidRecords, 1);
assert.equal(metrics.submissions.decided, 2);
assert.equal(metrics.submissions.approvalRate.percent, 50);
assert.equal(metrics.patches.totalUnique, 5);
assert.equal(metrics.patches.duplicateIdRecords, 1);
assert.equal(metrics.patches.eligibleForImplementation, 4);
assert.equal(metrics.patches.implemented, 3);
assert.equal(metrics.patches.implementationRate.percent, 75);
assert.equal(metrics.patches.evaluated, 2);
assert.equal(metrics.patches.verifiedSuccess, 1);
assert.equal(metrics.patches.verifiedSuccessRate.percent, 50);

console.log('SYAFAAT metrics checks PASS: unique IDs, denominators, pending exclusion, duplicate handling, and N/A rates.');
