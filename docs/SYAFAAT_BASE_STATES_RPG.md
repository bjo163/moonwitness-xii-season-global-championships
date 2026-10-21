# SYAFAAT BASE STATES — RPG CHARACTER MODEL
Version: 1.0
Status: Active product concept / implementation contract
Scope: MOONWITNESS XII Syafaat experience

## 1. Core definition
Every human participant can have a personal Base State profile inspired by the meanings and ethical lessons people draw from the 99 Asmaul Husna. The profile is a reflective RPG-like model of human capacities, habits, choices, and learning—not a claim that humans possess divine attributes themselves.

The system describes **human practice inspired by meanings**, not Allah, divine rank, faith validity, sin, reward, salvation, or whether Syafaat/prayer has been accepted.

## 2. Character profile
A profile consists of 99 named reflection dimensions. Each dimension stores:
- canonical name and transliteration;
- a carefully reviewed plain-language meaning;
- a human-scale interpretation / practice prompt;
- current progress state;
- optional user-chosen evidence or reflection;
- last updated date and provenance.

Do not automatically assign a person's character, belief, or morality from their religion, identity, demographic data, or one action. No profile is public by default. Participation is voluntary and anonymous/local-first unless the user explicitly opts into a future account-backed feature.

## 3. Base state lifecycle
Each dimension uses a non-judgmental progression:
- **UNEXPLORED** — no reflection recorded;
- **DISCOVERED** — the meaning and prompt have been viewed;
- **PRACTICING** — the user chose a concrete practice;
- **REFLECTED** — the user recorded a reflection after trying it;
- **SUSTAINING** — the user reports a repeated practice over time;
- **REVISIT** — user wants to reconsider or repair a practice.

These are progress states, not spiritual grades. Users may move backward, pause, reset, or leave a dimension unassessed. Never label a human as inherently bad, inferior, unbelieving, or spiritually lower based on these states.

## 4. RPG-like presentation
- Show a 99-dimension profile / constellation or card grid.
- Group dimensions into useful learning clusters (for example: care, justice, knowledge, patience, provision, protection, forgiveness, and reflection). Clusters are an interface aid, not a claim that the divine names fit into a universally agreed taxonomy.
- XP may represent completed learning actions only; it must not represent divine favor, iman, pahala, sin, or guaranteed outcomes.
- Achievements recognize voluntary actions and learning milestones, not human worth.
- No leaderboards for piety, no ranking of people, no pay-to-progress, no streak punishment.
- Explain every metric and let the user disable gamification.

## 5. Human-scale examples
- Ar-Rahman / Ar-Rahim → practice compassion: listen, assist, reduce avoidable harm.
- Al-'Adl → practice fairness: consider affected people and apply a consistent process.
- Al-'Alim → practice learning: consult reliable sources and acknowledge uncertainty.
- As-Sabur → practice patience: pause, regulate a response, and continue responsibly.
- Al-Ghafur / Al-'Afuww → practice repair and forgiveness where safe and appropriate; forgiveness never requires remaining in an unsafe situation.
- Ar-Razzaq → practice gratitude and responsible stewardship; never imply that poverty proves a moral failure.
These are educational reflections, not literal equivalences between human behavior and divine attributes.

## 6. Syafaat separation rules
Keep four things distinct:
1. **Base States** — user's optional self-reflection profile.
2. **Missions/actions** — practical steps a user chooses to try.
3. **Evidence/progress** — user-reported or externally verified evidence, explicitly labeled by source.
4. **Syafaat/theological claims** — never inferred by the software. The system cannot determine divine acceptance, salvation, reward, or unseen realities.

## 7. Data integrity
- Keep the 99-name list in a reviewed canonical source file; do not invent, silently reorder, or claim universal agreement on transliteration/translation.
- Record source references and review metadata for name meanings.
- Do not treat missing evidence as failure.
- Do not infer completion from merely opening a page.
- If a user enters sensitive religious or personal reflections, minimize collection, provide deletion/export controls when persisted, and never expose private notes by default.
- No database/account is required for the first version; local or session state may be used until an explicit privacy and persistence design is approved.

## 8. Acceptance criteria
- Every dimension has a reviewed name, meaning, safe human-scale prompt, and source provenance.
- Default state is UNEXPLORED, not zero worth or low spirituality.
- State transitions are user-controlled and reversible.
- Every XP/badge is explicitly tied to a learning or action event.
- No score or UI text claims to measure iman, divine favor, sin, pahala, Syafaat acceptance, or a person's ultimate spiritual status.
- UI explains that the model is a voluntary reflection tool and can be skipped.
- Automated tests cover 99 unique entries, allowed states, reversible transitions, and prohibited spiritual-ranking labels.
