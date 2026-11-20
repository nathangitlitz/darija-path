const config = window.DARIJA_CONFIG || {};
export const configured = Boolean(config.accountsEnabled !== false && config.supabaseUrl && config.supabaseKey);
export const empty = () => ({completed:[],bookmarks:[],reviews:{},drafts:{},days:[],xp:0,arabic:false,answers:{},checkpoints:{}});
function read(key, fallback) {try{return JSON.parse(localStorage.getItem(key)) || fallback}catch{return fallback}}
let session = read('darija-session',null);
export let state = {...empty(),...read(session ? `darija-${session.user.id}` : 'darija-guest',empty())};
let queue = Promise.resolve();
let cloudReady = !session;
let revision = 0;
export function user(){return session?.user}
export function localSave(){localStorage.setItem(session?`darija-${session.user.id}`:'darija-guest',JSON.stringify(state))}
async function request(path,method='GET',body,token){const r=await fetch(config.supabaseUrl+path,{method,headers:{apikey:config.supabaseKey,'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`} : {}),Prefer:'resolution=merge-duplicates'},body:body?JSON.stringify(body):undefined});const data=await r.text();let result;try{result=JSON.parse(data)}catch{result=data}if(!r.ok)throw new Error(result.msg||result.message||result.error_description||'Unable to connect. Please try again.');return result}
async function token(){if(!session) return null;if(session.expires_at*1000<Date.now()+60000){session=await request('/auth/v1/token?grant_type=refresh_token','POST',{refresh_token:session.refresh_token});localStorage.setItem('darija-session',JSON.stringify(session))}return session.access_token}
export function save(){revision++;localSave();if(!session)return Promise.resolve();if(!cloudReady)return Promise.reject(new Error('Cloud progress has not loaded. Reload and try again before syncing.'));const snapshot=JSON.parse(JSON.stringify(state));const id=session.user.id;queue=queue.catch(()=>{}).then(async()=>{if(user()?.id!==id)return;await request('/rest/v1/learner_state','POST',{user_id:id,data:snapshot,updated_at:new Date().toISOString()},await token())});return queue}
export async function signIn(email,password){session=await request('/auth/v1/token?grant_type=password','POST',{email,password});localStorage.setItem('darija-session',JSON.stringify(session));state={...empty(),...read(`darija-${session.user.id}`,empty())};cloudReady=false;await load()}
export async function signUp(email,password){return request('/auth/v1/signup','POST',{email,password})}
export async function resetPassword(email){return request('/auth/v1/recover','POST',{email})}
export async function updatePassword(password){return request('/auth/v1/user','PUT',{password},await token())}
export async function signOut(){await queue.catch(()=>{});try{await request('/auth/v1/logout','POST',{},await token())}finally{session=null;cloudReady=true;localStorage.removeItem('darija-session');state={...empty(),...read('darija-guest',empty())}}}
export async function load(){if(!session||!configured)return;const loadRevision=revision;const owner=session.user.id;const rows=await request(`/rest/v1/learner_state?user_id=eq.${session.user.id}&select=data`,'GET',undefined,await token());if(user()?.id!==owner)return;if(revision!==loadRevision)throw new Error('Progress changed while loading. Reload to sync safely.');if(rows[0])state={...empty(),...rows[0].data};cloudReady=true;localSave()}
export async function importGuest(){const guest=read('darija-guest',empty());state.completed=[...new Set([...state.completed,...guest.completed])];state.bookmarks=[...new Set([...state.bookmarks,...guest.bookmarks])];state.drafts={...guest.drafts,...state.drafts};await save()}
export function captureRecovery(){try{const hash=new URLSearchParams(location.hash.slice(1));if(!hash.get('access_token'))return false;const access_token=hash.get('access_token');const payload=JSON.parse(atob(access_token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));session={access_token,refresh_token:hash.get('refresh_token'),expires_at:payload.exp,user:{id:payload.sub,email:payload.email}};localStorage.setItem('darija-session',JSON.stringify(session));history.replaceState(null,'',location.pathname+'#/account');cloudReady=false;return hash.get('type')==='recovery'}catch{history.replaceState(null,'',location.pathname+'#/account');return false}}
export function activity(points=0){const day=new Date().toLocaleDateString('en-CA');state.days=[...new Set([...state.days,day])];state.xp+=points}
