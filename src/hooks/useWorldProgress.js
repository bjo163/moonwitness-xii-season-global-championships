import {useEffect,useState} from 'react';
import {WORKSPACE_EVENT} from '../utils/workspaceBackup.js';
const KEY='moonwitness-xii-world-progress-v4';
const LEGACY='moonwitness-xii-self-aura-v3';
const sanitize=value=>[...new Set((Array.isArray(value)?value:[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=100))].sort((a,b)=>a-b);
export function loadWorldProgress(){
 if(typeof window==='undefined')return [];
 try{
  const stored=window.localStorage.getItem(KEY);
  if(stored!==null)return sanitize(JSON.parse(stored));
  return sanitize(JSON.parse(window.localStorage.getItem(LEGACY)||'[]'));
 }catch{return [];}
}
export function useWorldProgress(){
 const[completed,setCompleted]=useState(loadWorldProgress);
 useEffect(()=>{try{window.localStorage.setItem(KEY,JSON.stringify(sanitize(completed)));window.localStorage.setItem(LEGACY,JSON.stringify(sanitize(completed).filter(n=>n<=33)));}catch{}},[completed]);
 useEffect(()=>{const update=e=>{if(e.key===KEY||e.key===LEGACY)setCompleted(loadWorldProgress());};window.addEventListener('storage',update);window.addEventListener(WORKSPACE_EVENT,update);return()=>{window.removeEventListener('storage',update);window.removeEventListener(WORKSPACE_EVENT,update);};},[]);
 const toggle=id=>{if(!Number.isInteger(id)||id<1||id>100)return;setCompleted(prev=>prev.includes(id)?prev.filter(n=>n!==id):sanitize([...prev,id]));};
 const reset=()=>setCompleted([]);
 return {completed,toggle,reset,setCompleted};
}
export function exportWorldProgress(completed){
 const blob=new Blob([JSON.stringify({version:4,module:'MOONWITNESS WORLD',completed:sanitize(completed),kind:'local_personal_progress',exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='moonwitness-world-progress.json';a.click();URL.revokeObjectURL(url);
}
