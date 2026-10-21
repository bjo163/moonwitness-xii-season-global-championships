# Cross-System Interface Contracts — MoonWitness XII

**Review date:** 2026-10-21  
**Branch:** `main`  
**Status:** Interface contract specified and statically checked; no claim of live inter-service integration.  
**Runtime:** Next.js App Router + TypeScript/TSX, static version-controlled data. No database or ORM.

This document resolves ambiguous data ownership and direction between the four interface groups tracked in issue #6. In XII, these are architecture contracts and registry relationships—not running network APIs.

## 1. Shared envelope

Any future exchanged record should use a versioned envelope with these fields:

| Field | Rule |
|---|---|
| `contractId` | Stable contract identifier, e.g. `MWX-IF-ATMOS-001` |
| `schemaVersion` | Explicit semantic version; reject unknown major versions |
| `recordId` | Stable source record identifier |
| `sourceSystemId` | Canonical `MWX-SYS-NNN` owner of the original observation/decision |
| `createdAt` | ISO 8601 timestamp with timezone when the record is time-dependent |
| `sourceRefs` | Evidence/provenance links or explicit empty list |
| `status` | Draft, reviewed, accepted, rejected, stale, or superseded |
| `uncertainty` | Known limitations, confidence basis, and missing fields |
| `humanDecisionRequired` | Boolean for actions that need a human decision |

The envelope is a proposed interface contract. No runtime API or persistent event bus is implied.

## 2. Divine Command Center ↔ Atmosphere OS

### Ownership
- **Atmosphere OS (`MWX-SYS-011`) owns environmental observations:** PM2.5/PM10, units, sensor identity, calibration, measurement time, location granularity, quality flags, weather context, and uncertainty.
- **Divine Command Center (`MWX-SYS-010`) owns care cases and response coordination:** reported need, responsible role, consent/privacy limits, response status, resources, and follow-up.

### Allowed data flow
1. Atmosphere OS → Divine Command Center: `AtmosphereObservation` or `EnvironmentalRiskSnapshot`.
2. Divine Command Center → Atmosphere OS: optional `ObservationRequest` with area, time window, urgency, and purpose; it cannot overwrite sensor measurements or quality flags.
3. Divine Command Center may combine an observation with a case, but must preserve the original source ID and timestamp.

### Validation and failure handling
- Units and timestamp are mandatory for numeric observations.
- Missing calibration or stale data must be labelled; do not convert missing values into zero.
- One sensor or model estimate cannot be presented as a confirmed city-wide condition.
- If no observation is available, report “data unavailable” and use established local emergency/public-health channels where urgent.
- Personal care-case data must not be copied into an environmental dataset.

## 3. HELIOGRID ↔ ARSY ↔ Material Forge

### Ownership
- **HELIOGRID (`MWX-SYS-012`) owns metered energy and operating constraints:** available power/energy, measurement interval, storage state, efficiency basis, safety limits, and alarms.
- **ARSY (`MWX-SYS-013`) owns compute/research workloads:** task identity, requested resources, run logs, reproducible outputs, and compute uncertainty.
- **Material Forge (`MWX-SYS-014`) owns physical experiment records:** protocol version, specimen/device identity, safety approval, measured results, calibration, and readiness assessment.

### Allowed data flow
1. HELIOGRID → ARSY: `EnergyBudgetSnapshot` with units, interval, telemetry freshness, and hard safety limits.
2. ARSY → HELIOGRID: `ComputeLoadForecast` and `WorkloadState`; this is a request/forecast, never a meter reading.
3. ARSY → Material Forge: `ExperimentDesign` or `AnalysisRequest`, including code/procedure version and reproducibility requirements.
4. Material Forge → ARSY: `ExperimentResult` with raw-data references, units, protocol, calibration, and deviations.
5. Material Forge may request a compute task, but must not label simulation as a physical measurement.

### Validation and failure handling
- Never add generated energy, stored energy, and consumed energy as if they were interchangeable quantities. Use a defined energy balance and interval.
- Missing telemetry, expired budgets, or a safety alarm must block automatic workload expansion.
- A compute forecast is not a verified energy measurement.
- Simulated/materials results and measured physical results use different evidence types.
- Physical testing requires a safety protocol and accountable human authorization before execution.

## 4. Semantic Engine → FURQAN → MIZAN → AMANAH → SHURA → 100CENTER → KITAB; SIDRA TREE ↔ registry

| Handoff | Input → output | Gate |
|---|---|---|
| Semantic Engine (`SYS-002`) → FURQAN (`SYS-003`) | Source text → candidate claims, source spans, ambiguity flags | Interpretation stays labelled as a candidate |
| FURQAN → MIZAN (`SYS-004`) | Claims and source bundles → evidence status, context, gaps, contradictions | No fabricated or context-free source |
| MIZAN → AMANAH (`SYS-005`) | Findings → risks, trade-offs, alternatives, affected parties | Scores cannot claim moral or religious certainty |
| AMANAH → SHURA (`SYS-006`) | Action proposal and permissions → accountable role, privacy/consent constraints | Sensitive action requires authorization |
| SHURA → 100CENTER (`SYS-007`) | Options, objections, stakeholder positions → decision package | Dissent and unresolved questions remain visible |
| 100CENTER → KITAB (`SYS-008`) | Decision and rationale → versioned decision/evidence record | Only authorized human decisions are recorded as approved |
| KITAB → SIDRA TREE (`SYS-009`) | Immutable-by-version references → graph links and impact paths | SIDRA TREE indexes canonical records; it does not replace them |
| Registry ↔ SIDRA TREE | Canonical IDs, source links, dependencies → navigable relationships | Registry owns record content; graph owns only relationships/indexing |

### Validation and failure handling
- Every cross-reference must resolve to a stable ID or remain explicitly unresolved.
- Source text, interpretation, personal testimony, scientific hypothesis, religious interpretation, editorial proposal, measured result, and human decision are distinct claim types.
- A decision cannot skip required evidence, risk, consent, or consultation gates simply because a record exists.
- KITAB in the static repository is version-controlled history, not a tamper-proof external ledger.
- SIDRA TREE is a relationship view, not a second database or source of truth.

## 5. Static implementation boundary

These contracts are stored as documentation and checked for required ownership/flow phrases by `scripts/check-ecosystem.mjs`. The current app has no service-to-service transport, database, authentication, sensor ingestion, compute scheduler, or physical-device control. Such capabilities remain future implementations and require separate threat modelling, domain review, and integration tests.

## Acceptance criteria
- [x] Each interface group has explicit ownership and data direction.
- [x] Measurements, forecasts, proposals, decisions, and interpretations are not conflated.
- [x] Failure handling and human gates are specified.
- [x] Static checker asserts the contract document remains present and key invariants remain explicit.
- [ ] Live interface integration tests — not applicable until actual runtime interfaces are implemented.
- [ ] Domain-specific validation and operational pilot — pending accountable reviewers and real evidence.
