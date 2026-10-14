export type EvidenceStatus='documented'|'personal_testimony'|'submitted_in_chat'|'externally_verified'|'unverified';
export type ApprovalStatus='not_verified'|'approved_with_evidence'|'rejected_with_evidence';
export interface Champion{ id:number; name:string; faith:string; award:string; gift:string; video?:string }
export interface SelfAuraLevel{ id:number; name:string; mission:string; reward:string }
export interface BugSubmission{ id:string; title:string; summary:string; evidenceStatus:EvidenceStatus; approvalStatus:ApprovalStatus; sourceUrl?:string; reviewedAt?:string }
export interface WitnessReport{ id:string; topic:string; type:'testimony'|'research'|'proposal'; evidenceStatus:EvidenceStatus; writtenAt?:string; description:string }
export interface PlannedEvent{ id:string; title:string; type:'comedy'|'service'|'recovery'|'research'; state:'concept'|'scheduled'|'completed'; startsAt?:string }
