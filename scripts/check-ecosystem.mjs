import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ecosystemSystems,ecosystemLifecycle,ecosystemRules} from '../src/data/ecosystemRegistry.js';
import {relatedConcepts} from '../src/data/relatedConceptCatalog.js';

const allowedStatuses = new Set(['planned','proposed','partially-covered','in-development','validated','operational','blocked']);
assert.ok(ecosystemSystems.length >= 10, 'Canonical ecosystem registry must cover the core systems');
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
for (const c of relatedConcepts) assert.ok(c.id && c.title && c.type && c.status && c.scope && c.nextAction && c.boundary, 'Related concept record is incomplete: ' + (c.id || 'unknown'));
assert.ok(ecosystemLifecycle.length >= 7, 'Lifecycle must describe progression from captured concept to operation');
assert.ok(ecosystemRules.length >= 5, 'Cross-system safety rules must be present');
const page = readFileSync('src/pages-ui/Ecosystem.tsx','utf8');
const architecture = readFileSync('docs/MOONWITNESS-XII-INTEGRATED-SYSTEMS-ARCHITECTURE.md','utf8');
assert.ok(page.includes('Next.js App Router') && !page.includes('React + Vite'), 'Ecosystem UI must reflect the actual platform');
assert.ok(!ecosystemRules.some(rule => /React \\+ Vite/i.test(rule)), 'Ecosystem rules must not describe the retired Vite platform');
assert.ok(page.includes('s.acceptanceCriteria') && page.includes('s.sourceProvenance') && page.includes('s.decisionRole'), 'Ecosystem UI must expose governance metadata');
assert.ok(ecosystemSystems.every(s => /^\d{4}-\d{2}-\d{2}$/.test(s.reviewedAt)), 'Each system needs a review date');
assert.ok(architecture.includes('Next.js App Router') && !architecture.includes('Public XII remains React + Vite'), 'Architecture must reflect the actual platform');
console.log('Ecosystem integrity PASS: ' + ecosystemSystems.length + ' canonical systems, ' + relatedConcepts.length + ' related concepts, valid IDs/dependencies/lifecycle fields, and no operational claims without evidence.');
