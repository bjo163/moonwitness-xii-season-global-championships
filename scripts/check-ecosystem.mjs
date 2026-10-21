import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ecosystemSystems,ecosystemLifecycle,ecosystemRules} from '../src/data/ecosystemRegistry.js';
import {relatedConcepts} from '../src/data/relatedConceptCatalog.js';
import {registryEntries,registrySummary} from '../src/data/bugPatchRegistry.js';

const allowedStatuses = new Set(['planned','proposed','partially-covered','in-development','validated','operational','blocked']);
assert.ok(ecosystemSystems.length >= 10, 'Canonical ecosystem registry must cover the core systems');

// The championship registry is separate from the system index and must stay at exactly 33 slots.
assert.equal(registryEntries.length, 33, 'Master championship register must preserve 33 slots');
assert.deepEqual(registryEntries.map(x => x.id), Array.from({length:33}, (_,i) => String(i+1).padStart(3,'0')), 'Championship IDs must remain unique and sequential');
assert.equal(new Set(registryEntries.map(x => x.id)).size, 33, 'Championship IDs must be unique');
for (const entry of registryEntries) {
  for (const field of ['title','scope','summary','recordStatus','provenance','reviewNeeded']) assert.ok(typeof entry[field] === 'string' && entry[field].trim(), entry.id + ' missing ' + field);
}
assert.equal(registrySummary.total, 33);
assert.equal(registrySummary.verifiedApprovals, 0, 'No approval may be counted without evidence');
const slot014 = registryEntries.find(x => x.id === '014');
assert.equal(slot014.recordStatus, 'number_conflict');
assert.equal(slot014.conflictingCandidate?.title, 'THE WRONG WAY / HELLROAD', '#014 conflict candidate must remain preserved');
const slot033 = registryEntries.find(x => x.id === '033');
assert.equal(slot033.title, 'KOPIHITAM - SIACENG');
assert.equal(slot033.recordStatus, 'user_submitted_in_chat');
assert.equal(slot033.externalSubmission, 'not_evidenced');
assert.equal(slot033.approvalStatus, 'not_verified');
assert.ok(registryEntries.slice(0,8).every(x => x.recordStatus === 'registered'), '#001–#008 provenance must remain chat-reported');
assert.ok(registryEntries.slice(8,13).every(x => x.recordStatus === 'recovered_draft' || x.recordStatus === 'number_conflict'), '#009–#013 must remain recovered drafts unless conflict evidence says otherwise');
assert.ok(registryEntries.slice(14,32).every(x => x.recordStatus === 'proposed'), '#015–#032 must remain editorial proposals unless primary evidence changes status');
const ids = new Set(ecosystemSystems.map(x => x.id));
assert.equal(ids.size, ecosystemSystems.length, 'System IDs must be unique');
for (const s of ecosystemSystems) {
  assert.match(s.id, /^MWX-SYS-\d{3}$/);
  assert.ok(s.title?.trim(), s.id + ' needs a canonical title');
  assert.ok(Array.isArray(s.aliases) && s.aliases.length > 0, s.id + ' needs aliases');
  assert.ok(allowedStatuses.has(s.status), s.id + ' has an unsupported lifecycle status: ' + s.status);
  for (const field of ['domain','purpose','maturity','nextAction','evidence','sourceProvenance','decisionRole','acceptanceCriteria','uncertainty','reviewedAt']) assert.ok(typeof s[field] === 'string' && s[field].trim(), s.id + ' missing ' + field);
  for (const field of ['inputs','outputs','dependsOn','connectsTo','guardrails']) assert.ok(Array.isArray(s[field]), s.id + ' missing array ' + field);
  for (const dependency of s.dependsOn) assert.ok(ids.has(dependency), s.id + ' depends on unknown system ' + dependency);
  for (const target of s.connectsTo) assert.ok(ids.has(target), s.id + ' connects to unknown system ' + target);
  if (s.status === 'operational') assert.match(s.evidence, /verified|measured|production|operational evidence/i, s.id + ' cannot be operational without explicit evidence');
}
assert.equal(new Set(relatedConcepts.map(x => x.id)).size, relatedConcepts.length, 'Related concept IDs must be unique');
for (const c of relatedConcepts) {
  assert.ok(c.id && c.title && c.type && c.status && c.scope && c.nextAction && c.boundary, 'Related concept record is incomplete: ' + (c.id || 'unknown'));
  for (const field of ['sourceProvenance','decisionRole','acceptanceCriteria','uncertainty','reviewedAt']) assert.ok(typeof c[field] === 'string' && c[field].trim(), c.id + ' missing ' + field);
  assert.equal(c.reviewedAt, '2026-10-21', c.id + ' review date missing');
}
assert.ok(ecosystemLifecycle.length >= 7, 'Lifecycle must describe progression from captured concept to operation');
assert.ok(ecosystemRules.length >= 5, 'Cross-system safety rules must be present');
const page = readFileSync('src/pages-ui/Ecosystem.tsx','utf8');
const architecture = readFileSync('docs/MOONWITNESS-XII-INTEGRATED-SYSTEMS-ARCHITECTURE.md','utf8');
assert.ok(page.includes('Next.js App Router') && !page.includes('React + Vite'), 'Ecosystem UI must reflect the actual platform');
assert.ok(!ecosystemRules.some(rule => rule.includes('React + Vite')), 'Ecosystem rules must not describe the retired Vite platform');
assert.ok(page.includes('s.acceptanceCriteria') && page.includes('s.sourceProvenance') && page.includes('s.decisionRole'), 'Ecosystem UI must expose system governance metadata');
assert.ok(page.includes('x.acceptanceCriteria') && page.includes('x.sourceProvenance') && page.includes('x.decisionRole'), 'Ecosystem UI must expose related-concept governance metadata');
const commandCenter = readFileSync('src/pages-ui/CommandCenter.tsx','utf8');
assert.ok(commandCenter.includes('ecosystemSummary') && commandCenter.includes('relatedConcepts') && commandCenter.includes('href=\"/ecosystem\"'), 'Command Center must derive ecosystem health from canonical data');
for (const field of ['planned','partial','inDevelopment','validated','operational','blocked','sourceRecovery']) assert.ok(commandCenter.includes(field), 'Command Center is missing ecosystem status ' + field);
assert.ok(ecosystemSystems.every(s => /^\d{4}-\d{2}-\d{2}$/.test(s.reviewedAt)), 'Each system needs a review date');
assert.ok(architecture.includes('Next.js App Router') && !architecture.includes('Public XII remains React + Vite'), 'Architecture must reflect the actual platform');
console.log('Ecosystem integrity PASS: ' + ecosystemSystems.length + ' canonical systems, ' + relatedConcepts.length + ' related concepts, valid IDs/dependencies/lifecycle fields, and no operational claims without evidence.');


// Cross-system interface contracts: ownership, direction, and safety boundaries.
const interfaceContracts = readFileSync('docs/CROSS_SYSTEM_INTERFACE_CONTRACTS.md','utf8');
for (const required of [
  'Atmosphere OS → Divine Command Center',
  'Divine Command Center → Atmosphere OS',
  'HELIOGRID → ARSY',
  'ARSY → Material Forge',
  'Material Forge → ARSY',
  'Semantic Engine',
  'FURQAN',
  'MIZAN',
  'AMANAH',
  'SHURA',
  '100CENTER',
  'KITAB',
  'SIDRA TREE',
  'no service-to-service transport',
  'not a tamper-proof external ledger'
]) assert.ok(interfaceContracts.includes(required), 'Cross-system interface contract missing invariant: ' + required);
assert.ok(interfaceContracts.includes('sourceSystemId'), 'Shared envelope must preserve source ownership');
assert.ok(interfaceContracts.includes('humanDecisionRequired'), 'Shared envelope must declare human decision gate');


// Master 33-slot evidence audit: all slots must expose source/review metadata.
const slotAudit = readFileSync('docs/MASTER_33_SLOT_EVIDENCE_AUDIT.md','utf8');
assert.ok(slotAudit.includes('FAMILY WITHOUT FEAR vs THE WRONG WAY / HELLROAD'), 'Slot audit must preserve #014 conflict');
assert.ok(slotAudit.includes('KOPIHITAM - SIACENG'), 'Slot audit must preserve #033 canonical title');
assert.ok(slotAudit.includes('MWX-CON-013'), 'SYAFAAT must remain outside the 33-slot registry');
for (const entry of registryEntries) {
  for (const field of ['benefit','references','origin']) assert.ok(typeof entry[field] === 'string' && entry[field].trim(), entry.id + ' missing audit field ' + field);
}
assert.equal(registryEntries.length, 33, 'Slot audit and canonical registry must remain exactly 33 records');
