import {services,firstVisits,courses} from '@/data/wellness';
const allowed=new Set([...services.map(x=>x.name),...firstVisits.map(x=>x.name),...courses.map(x=>x.name),'아직 잘 모르겠어요','리애토 라이프 리셋 4060','Liaeto Wellness Membership','기관·단체 출강']);
function ready(){return !!(process.env.SUPABASE_URL&&process.env.SUPABASE_SERVICE_ROLE_KEY&&process.env.PRIVACY_RETENTION&&process.env.CONSULTATION_ENABLED==='true');}
export function GET(){return Response.json({enabled:ready(),retention:process.env.PRIVACY_RETENTION||''},{headers:{'Cache-Control':'no-store'}});}
export async function POST(request:Request){
 if(!ready())return Response.json({error:'온라인 접수 연결 준비 중입니다. 전화로 문의해 주세요.'},{status:503});
 const origin=request.headers.get('origin');if(!origin||origin!==new URL(request.url).origin)return Response.json({error:'요청 출처를 확인할 수 없습니다.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>16000)return Response.json({error:'문의 내용이 너무 깁니다.'},{status:413});
 let d:Record<string,unknown>;try{const text=await request.text();if(text.length>12000)throw new Error();d=JSON.parse(text);}catch{return Response.json({error:'입력 형식을 확인해 주세요.'},{status:400});}
 const str=(key:string)=>typeof d[key]==='string'?(d[key] as string).trim():'';
 const name=str('name'),phone=str('phone'),type=str('type'),program=str('program'),message=str('message'),date=str('date');
 if(!name||name.length>60||!/^[0-9+()\- ]{9,20}$/.test(phone)||phone.replace(/\D/g,'').length<9||!['프로그램 상담','교육 문의','기관·단체 출강','기타 문의'].includes(type)||!allowed.has(program)||!message||message.length>3000||d.consent!=='yes'||(date&&!/^\d{4}-\d{2}-\d{2}$/.test(date)))return Response.json({error:'필수 입력과 개인정보 동의를 확인해 주세요.'},{status:400});
 try{const receipt=crypto.randomUUID();const r=await fetch(process.env.SUPABASE_URL!.replace(/\/$/,'')+'/rest/v1/consultation_requests',{method:'POST',headers:{apikey:process.env.SUPABASE_SERVICE_ROLE_KEY!,Authorization:'Bearer '+process.env.SUPABASE_SERVICE_ROLE_KEY!,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({id:receipt,name,phone,inquiry_type:type,program,preferred_date:date||null,message,consent:true,privacy_version:process.env.PRIVACY_VERSION||'operator-confirmed'}),signal:AbortSignal.timeout(12000)});if(!r.ok)throw new Error();return Response.json({receipt},{status:201});}catch{return Response.json({error:'접수 결과를 확인하지 못했습니다. 전화로 문의해 주세요.'},{status:502});}
}

