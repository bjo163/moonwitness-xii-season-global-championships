export const reviewStates=['unverified','documented','primary_source_checked','independently_verified'] as const;
export type ReviewState=typeof reviewStates[number];
export type SourceRecord={subjectId:string;sourceUrl:string;sourceKind:'video'|'scripture'|'article'|'transcript';reviewState:ReviewState;reviewerNote:string;reviewedAt?:string};
export function validHttpUrl(s:string){try{return ['https:','http:'].includes(new URL(s).protocol)}catch{return false}}
export function canClaimVerified(s:SourceRecord){return s.reviewState==='independently_verified'&&validHttpUrl(s.sourceUrl)&&Boolean(s.reviewerNote.trim())&&Boolean(s.reviewedAt)}
