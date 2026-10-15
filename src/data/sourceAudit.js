import {champions} from '../data.js';
import {archiveEpisodes} from './storyArchive.js';
export const championSourceRows=champions.map(c=>({
 id:c.id,name:c.name,faith:c.faith,award:c.award,gift:c.gift,
 evidenceUrl:/^https:\/\/[\w.-]+\//.test(c.video||'')?c.video:null,
 evidenceType:c.video?'video_link_listed':'no_link',
 identityReviewed:false,attributionReviewed:false,videoReviewed:false,
 status:'needs_independent_review'
}));
export const storySourceRows=archiveEpisodes.map(e=>({
 slug:e.slug,title:e.title,kind:e.kind,references:e.references,
 originalTranscriptReviewed:false,scriptureContextReviewed:false,
 originalPosterReviewed:false,status:'editorial_summary_only'
}));
// Reference TEXT checks, not validation of the editor's interpretation,
// theological doctrine, or anyone's personal supernatural report.
export const checkedReferenceLinks=[
 {id:'quran-7-46',label:"Al-A'raf 7:46",url:'https://quran.com/araf/46',scope:'Text check: barrier/hijab, people on Al-Araf',note:'Confirmed that the passage mentions a boundary. Interpretive claims remain separate.'},
 {id:'daniel-5-22-23',label:'Daniel 5:22–23',url:'https://www.biblegateway.com/passage/?search=Daniel+5%3A22-23&version=ESV',scope:'Text check: Belshazzar, humility and breath',note:'Text reference checked; this does not verify a modern experience.'}
];
export const evidencePolicy=[
 'A linked video is NOT the same as a verified quotation or affiliation.',
 'A scripture text check validates only the passage and citation, not a novel theological interpretation.',
 'No champion is assigned spiritual rank or confirmed as endorsing this project.',
 'Editorial reconstructions cannot be relabelled verbatim without original manuscript evidence.',
 'No original poster is marked verified unless the exact source file and permission are reviewed.'
];
