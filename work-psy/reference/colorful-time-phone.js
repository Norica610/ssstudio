/*EDITMODE-BEGIN*/const TWEAKS={homeVariant:"A",resultVariant:"A",testVariant:"scenario",textSize:100}/*EDITMODE-END*/;

// ============ NAV ============
let cur='s-splash';
function goTo(id){const o=document.getElementById(cur),n=document.getElementById(id);if(!n||id===cur)return;o.classList.remove('active');o.classList.add('exit-left');setTimeout(()=>o.classList.remove('exit-left'),400);n.classList.add('active');cur=id;n.scrollTop=0;updateStageInfo(id);updateFlowMap(id)}
function jumpTo(id){goTo(id)}

const STAGE={
  's-splash':['Splash','The moment of arrival — four colour characters greet you instead of a logo lockup.'],
  's-ob1':['Onboarding · 1/3','Introduce the core idea: personality leads with a colour.'],
  's-ob2':['Onboarding · 2/3','Explain that opposites complement — the social hook.'],
  's-ob3':['Onboarding · 3/3','Reframe retirement as the Third Age.'],
  's-ti':['Test intro','Set expectations: 5 short stories, 2 mins.'],
  's-test':['Scenario test','A small illustrated scene with four responses. Less reading, more feeling.'],
  's-result':['Your colour energy · 8 sub-types','Primary + secondary colour, position on the wheel, mix meter, and complement.'],
  's-act':['Activities · discovery','Real places & events — care homes, community orgs, volunteer roles — matched by colour and location.'],
  's-venue':['Venue detail','A care home or community org, with community-mix colour profile + regular activities.'],
  's-event':['Event · RSVP','Single event detail showing who’s going (by colour) and accessibility info.'],
  's-partners':['Partners & network','Age Scotland, Volunteer Scotland, U3A, Wing Hong — the verified network behind matches.'],
  's-home':['Home','Daily check-in + nearby workshops + complement nudge.'],
  's-journal':['Journal','Your month in colour — a calendar of moods and notes.'],
  's-profile':['You','Profile + stats + resources.']
};
function updateStageInfo(id){const t=document.getElementById('stageTitle'),s=document.getElementById('stageSub');if(!t||!s)return;const x=STAGE[id]||['',''];t.textContent=x[0];s.textContent=x[1]}
function updateFlowMap(id){document.querySelectorAll('.node').forEach(n=>n.classList.remove('current'));const n=document.getElementById('n-'+id.replace('s-',''));if(n)n.classList.add('current')}
// in embed mode (no side panel), silently skip

// ============ TEST DATA ============
const SCENES=[
  {q:"Saturday morning at the community café — what's your natural move?",
   bg:"linear-gradient(180deg,#FFE8C4 0%,#FFF5E4 100%)",
   scene:`<div class="scene-box" style="height:150px;background:#FFF;border:1.5px solid rgba(15,29,58,.08);border-radius:20px;position:relative;overflow:hidden">
     <svg viewBox="0 0 300 140" style="position:absolute;inset:0;width:100%;height:100%">
       <rect x="0" y="110" width="300" height="30" fill="#F5E8D3"/>
       <ellipse cx="60" cy="112" rx="28" ry="5" fill="#E8D9B8"/>
       <ellipse cx="150" cy="112" rx="32" ry="5" fill="#E8D9B8"/>
       <ellipse cx="240" cy="112" rx="28" ry="5" fill="#E8D9B8"/>
       <g transform="translate(155,40)"><path d="M-3 0 q-2 -8 3 -10 q6 -1 6 6 q2 0 1 4 l-1 5 z" fill="none" stroke="rgba(15,29,58,.35)" stroke-width="1.5" stroke-linecap="round"/></g>
       <g transform="translate(58,40)"><path d="M-2 0 q-3 -6 2 -9 q5 -1 5 5 q2 1 0 4 l-1 4 z" fill="none" stroke="rgba(15,29,58,.3)" stroke-width="1.3" stroke-linecap="round"/></g>
     </svg>
     <img src="app-assets/char-yellow.png" style="position:absolute;bottom:22px;left:30px;width:58px">
     <img src="app-assets/char-red.png" style="position:absolute;bottom:22px;left:122px;width:62px">
     <img src="app-assets/char-blue.png" style="position:absolute;bottom:22px;right:22px;width:54px">
     <span class="scene-cap">// saturday · the café is buzzing</span>
   </div>`,
   opts:[{t:"Rearrange the tables so everyone can see each other",c:"fire"},{t:"Wave someone over and get chatting straight away",c:"sun"},{t:"Find the quietest corner with a friend",c:"earth"},{t:"Take a seat and watch how the morning unfolds",c:"cool"}]},
  {q:"Your neighbour mentions a trip to the botanical garden. You:",
   bg:"linear-gradient(180deg,#D9EED0 0%,#FFF5E4 100%)",
   scene:`<div class="scene-box" style="height:150px;background:linear-gradient(180deg,#EAF5E0,#FFF);border:1.5px solid rgba(15,29,58,.08);border-radius:20px;position:relative;overflow:hidden">
     <svg viewBox="0 0 300 140" style="position:absolute;inset:0;width:100%;height:100%">
       <circle cx="240" cy="40" r="18" fill="#FFD429" opacity=".7"/>
       <path d="M0 120 Q 80 100, 160 118 T 300 110 L 300 140 L 0 140 Z" fill="#D9EED0"/>
       <g stroke="#2FA84A" stroke-width="2" stroke-linecap="round" fill="none" opacity=".5">
         <path d="M40 118 Q 42 100, 40 90"/><path d="M40 100 q-6 -4 -8 -10"/><path d="M40 100 q6 -4 8 -10"/>
         <path d="M260 118 Q 262 100, 260 88"/><path d="M260 98 q-6 -4 -8 -10"/>
       </g>
       <rect x="130" y="60" width="6" height="50" fill="#2A3A5C"/>
       <rect x="164" y="60" width="6" height="50" fill="#2A3A5C"/>
       <path d="M120 60 Q 150 40, 180 60" stroke="#2A3A5C" stroke-width="3" fill="none"/>
     </svg>
     <img src="app-assets/char-green.png" style="position:absolute;bottom:18px;left:50px;width:60px">
     <img src="app-assets/char-yellow.png" style="position:absolute;bottom:18px;right:60px;width:58px">
     <span class="scene-cap">// the garden gate · a morning out</span>
   </div>`,
   opts:[{t:"Organise a group — pick the day, sort the bus",c:"fire"},{t:"Yes! And let's bring a picnic, music, the lot",c:"sun"},{t:"Just us two sounds lovely — nice and gentle",c:"earth"},{t:"Look up the layout and plan a good route",c:"cool"}]},
  {q:"A friend shares something difficult. You reach for:",
   bg:"linear-gradient(180deg,#F7D9D4 0%,#FFF5E4 100%)",
   scene:`<div class="scene-box" style="height:150px;background:linear-gradient(180deg,#FBECE8,#FFF);border:1.5px solid rgba(15,29,58,.08);border-radius:20px;position:relative;overflow:hidden">
     <svg viewBox="0 0 300 140" style="position:absolute;inset:0;width:100%;height:100%">
       <rect x="60" y="95" width="180" height="10" rx="3" fill="#8B6F47"/>
       <rect x="72" y="105" width="6" height="22" fill="#8B6F47"/>
       <rect x="222" y="105" width="6" height="22" fill="#8B6F47"/>
       <path d="M130 90 q2 -12 -1 -18" stroke="rgba(15,29,58,.3)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
       <circle cx="130" cy="92" r="4" fill="#FFF" stroke="#C4A484" stroke-width="1.5"/>
       <circle cx="170" cy="92" r="4" fill="#FFF" stroke="#C4A484" stroke-width="1.5"/>
       <path d="M168 90 q2 -10 -1 -16" stroke="rgba(15,29,58,.3)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
     </svg>
     <img src="app-assets/char-blue.png" style="position:absolute;bottom:35px;left:50px;width:64px">
     <img src="app-assets/char-green.png" style="position:absolute;bottom:35px;right:50px;width:64px;transform:scaleX(-1)">
     <span class="scene-cap">// on the bench · a hard conversation</span>
   </div>`,
   opts:[{t:"Practical advice — here's what I'd do",c:"fire"},{t:"A story to lift the mood — warmth first",c:"sun"},{t:"Quiet presence — I just listen",c:"earth"},{t:"A careful question to understand more",c:"cool"}]},
  {q:"You've got an afternoon to yourself. Your ideal?",
   bg:"linear-gradient(180deg,#DAEFFB 0%,#FFF5E4 100%)",
   scene:`<div class="scene-box" style="height:150px;background:linear-gradient(180deg,#E8F2FA,#FFF);border:1.5px solid rgba(15,29,58,.08);border-radius:20px;position:relative;overflow:hidden">
     <svg viewBox="0 0 300 140" style="position:absolute;inset:0;width:100%;height:100%">
       <!-- window frame -->
       <rect x="20" y="15" width="110" height="105" rx="6" fill="#EAF2F9" stroke="#2A3A5C" stroke-width="2.5"/>
       <line x1="75" y1="15" x2="75" y2="120" stroke="#2A3A5C" stroke-width="2"/>
       <line x1="20" y1="67" x2="130" y2="67" stroke="#2A3A5C" stroke-width="2"/>
       <!-- sky + hill seen through -->
       <circle cx="105" cy="38" r="9" fill="#FFD429" opacity=".6"/>
       <path d="M22 90 Q 50 75, 75 85 Q 100 72, 128 82 L 128 118 L 22 118 Z" fill="#A8D22A" opacity=".4"/>
       <!-- teapot on table right -->
       <rect x="170" y="105" width="115" height="6" fill="#C4A484"/>
       <g transform="translate(215,80)">
         <path d="M0 25 q0 -20 20 -20 q20 0 20 20 q-20 10 -40 0 z" fill="#FF6B4A" stroke="#0F1D3A" stroke-width="2"/>
         <path d="M38 14 q10 -2 10 8" fill="none" stroke="#0F1D3A" stroke-width="2" stroke-linecap="round"/>
         <path d="M2 14 q-6 -2 -8 6" fill="none" stroke="#0F1D3A" stroke-width="2" stroke-linecap="round"/>
         <rect x="14" y="-2" width="12" height="4" rx="1.5" fill="#0F1D3A"/>
         <path d="M20 -8 q-4 -6 0 -12 M20 -8 q4 -6 0 -12" stroke="rgba(15,29,58,.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
       </g>
     </svg>
     <img src="app-assets/char-blue.png" style="position:absolute;bottom:30px;left:140px;width:58px">
     <span class="scene-cap">// the afternoon · quiet at home</span>
   </div>`,
   opts:[{t:"A brisk walk and a small project ticked off",c:"fire"},{t:"Call a friend and see where it leads",c:"sun"},{t:"Potter in the garden, cook something slow",c:"earth"},{t:"A good book and a quiet cup of tea",c:"cool"}]},
  {q:"At the end of the year, you feel happiest when:",
   bg:"linear-gradient(180deg,#FFE8C4 0%,#FFF5E4 100%)",
   scene:`<div class="scene-box" style="height:150px;background:linear-gradient(180deg,#FFEFD4,#FFF);border:1.5px solid rgba(15,29,58,.08);border-radius:20px;position:relative;overflow:hidden">
     <svg viewBox="0 0 300 140" style="position:absolute;inset:0;width:100%;height:100%">
       <ellipse cx="150" cy="108" rx="130" ry="14" fill="#E8D9B8"/>
       <rect x="146" y="70" width="8" height="30" fill="#FFD429"/>
       <path d="M150 60 q-6 4 -2 10 q2 -4 6 -2 q-2 -6 -4 -8" fill="#FF6B4A"/>
       <circle cx="150" cy="56" r="3" fill="#FFD429" opacity=".8"/>
     </svg>
     <img src="app-assets/char-red.png" style="position:absolute;bottom:22px;left:14px;width:52px">
     <img src="app-assets/char-yellow.png" style="position:absolute;bottom:22px;left:78px;width:52px">
     <img src="app-assets/char-green.png" style="position:absolute;bottom:22px;right:78px;width:52px">
     <img src="app-assets/char-blue.png" style="position:absolute;bottom:22px;right:14px;width:52px">
     <span class="scene-cap">// the whole year · around the table</span>
   </div>`,
   opts:[{t:"I've achieved something I set my mind to",c:"fire"},{t:"I've made new friends along the way",c:"sun"},{t:"My people feel loved and cared for",c:"earth"},{t:"I've learned something I didn't know before",c:"cool"}]}
];
const CD={
  fire:{name:"Fiery Red",type:"Director · Motivator",hex:"#ED1C24",soft:"#FFE8E5",emoji:"🔥",img:"app-assets/char-red.png",
    desc:"You lead with drive. You're decisive, action-oriented, and you bring direction wherever you go. In your Third Age, you thrive when you've got goals to pursue and people to lead — so pick a few.",
    traits:["Determined","Direct","Competitive","Goal-oriented"],
    acts:[["Go to a show","Theatre · Citizens Theatre"],["Hiking group","Outdoor · Campsie Fells"],["Gardening","Allotment · Queen's Park"],["Solo travel","This year · Spain?"],["Cooking classes","Learn · Indian cooking"],["Community leadership","Volunteer · Wing Hong"]],
    complement:{name:"Earth Green · Supporter",hex:"#2FA84A",img:"app-assets/char-green.png",note:"Find a Green friend — they'll keep you grounded."}},
  sun:{name:"Sunshine Yellow",type:"Inspirer · Motivator",hex:"#FFD429",soft:"#FFF4CC",emoji:"☀️",img:"app-assets/char-yellow.png",
    desc:"You lead with warmth. Sociable, optimistic, creative — you light up a room. In your Third Age, you'll flourish surrounded by people and new experiences. Say yes more.",
    traits:["Sociable","Optimistic","Creative","Persuasive"],
    acts:[["Learn an instrument","Music · ukulele?"],["Handwork","Craft · knit & stitch"],["Choir","Sing · Glasgow Chorus"],["Chess & card games","Play · U3A games"],["Dance classes","Move · line dance"],["Art workshops","Paint · Garnethill"]],
    complement:{name:"Cool Blue · Observer",hex:"#1E9BE8",img:"app-assets/char-blue.png",note:"Find a Blue friend — they'll help you slow down and think."}},
  earth:{name:"Earth Green",type:"Supporter · Helper",hex:"#2FA84A",soft:"#E1F0D9",emoji:"🌿",img:"app-assets/char-green.png",
    desc:"You lead with care. Supportive, patient, loyal — you're the glue that holds people together. In your Third Age, you find deepest meaning through relationships and community.",
    traits:["Empathetic","Patient","Loyal","Supportive"],
    acts:[["Picnic club","Outdoor · Kelvingrove"],["Gentle jogging","Move · parkrun"],["Meditation","Quiet · morning sits"],["Volunteer","Give · Wing Hong"],["Community garden","Grow · Garnethill"],["Book club","Read · novels group"]],
    complement:{name:"Fiery Red · Director",hex:"#ED1C24",img:"app-assets/char-red.png",note:"Find a Red friend — they'll nudge you into action."}},
  cool:{name:"Cool Blue",type:"Observer · Reformer",hex:"#1E9BE8",soft:"#DAEFFB",emoji:"💧",img:"app-assets/char-blue.png",
    desc:"You lead with thought. Analytical, precise, reflective — you see the patterns others miss. In your Third Age, you'll thrive exploring ideas deeply, at your own pace.",
    traits:["Analytical","Precise","Reflective","Independent"],
    acts:[["Fishing","Quiet · Loch Lomond"],["Jigsaw puzzles","Solve · 1000-piece"],["Reading party","Share · U3A"],["Senior university","Study · Glasgow"],["Photography","Capture · walks"],["Museum visits","Look · Kelvingrove"]],
    complement:{name:"Sunshine Yellow · Inspirer",hex:"#FFD429",img:"app-assets/char-yellow.png",note:"Find a Yellow friend — they'll brighten your week."}}
};
let qi=0,sc={fire:0,sun:0,earth:0,cool:0};
function startTest(){qi=0;sc={fire:0,sun:0,earth:0,cool:0};goTo('s-test');renderScene()}
function renderScene(){
  const s=SCENES[qi];
  document.getElementById('tR').textContent=`0${qi+1} / 0${SCENES.length}`;
  let pr='';for(let i=0;i<SCENES.length;i++){pr+=`<div class="h-1.5 rounded-full flex-1 transition-all" style="background:${i<=qi?'#0F1D3A':'rgba(15,29,58,.08)'}"></div>`}
  document.getElementById('tP').innerHTML=pr;
  document.querySelector('#s-test > div').style.background=s.bg;
  document.getElementById('tScene').innerHTML=s.scene;
  document.getElementById('tQ').textContent=s.q;
  const cBg={fire:'#FFE8E5',sun:'#FFF4CC',earth:'#E1F0D9',cool:'#DAEFFB'};
  const cImg={fire:'app-assets/char-red.png',sun:'app-assets/char-yellow.png',earth:'app-assets/char-green.png',cool:'app-assets/char-blue.png'};
  let h='';s.opts.forEach((o,i)=>{
    h+=`<div class="card-opt" onclick="pickScene('${o.c}',this)"><div style="display:flex;gap:8px;align-items:center;margin-bottom:8px"><div style="width:38px;height:38px;border-radius:14px;background:${cBg[o.c]};display:flex;align-items:center;justify-content:center"><img src="${cImg[o.c]}" style="width:28px"></div></div><p class="text-[.82rem] text-ink font-medium leading-snug">${o.t}</p></div>`;
  });
  document.getElementById('tC').innerHTML=h;
}
function pickScene(c,el){sc[c]++;el.classList.add('sel-most');document.querySelectorAll('#tC .card-opt').forEach(o=>o.style.pointerEvents='none');setTimeout(()=>{qi++;if(qi>=SCENES.length)showResult();else renderScene()},400)}

function showResult(){
  const sorted=Object.entries(sc).sort((a,b)=>b[1]-a[1]);
  const w=sorted[0][0], sec=sorted[1][0];
  const r=CD[w];
  const total=sorted.reduce((s,e)=>s+e[1],0)||1;
  // Sub-type map (primary → secondary)
  const SUB={
    fire:{sun:{label:'Red-Orange · Motivator',tag:'Driven & outgoing',char:'app-assets/char-orange.png',colour:'#FF8A1F'},cool:{label:'Red-Purple · Reformer',tag:'Driven & principled',char:'app-assets/char-purple.png',colour:'#C215C2'},earth:{label:'Fiery Red · Director',tag:'Pure drive',char:'app-assets/char-red.png',colour:'#ED1C24'}},
    sun:{fire:{label:'Yellow-Orange · Motivator',tag:'Warm & bold',char:'app-assets/char-orange.png',colour:'#FF8A1F'},earth:{label:'Yellow-Lime · Helper',tag:'Warm & giving',char:'app-assets/char-lime.png',colour:'#A8D22A'},cool:{label:'Sunshine Yellow · Inspirer',tag:'Pure warmth',char:'app-assets/char-yellow.png',colour:'#FFD429'}},
    earth:{sun:{label:'Green-Lime · Helper',tag:'Caring & cheerful',char:'app-assets/char-lime.png',colour:'#A8D22A'},cool:{label:'Green-Teal · Coordinator',tag:'Caring & thoughtful',char:'app-assets/char-teal.png',colour:'#1EB5A6'},fire:{label:'Earth Green · Supporter',tag:'Pure care',char:'app-assets/char-green.png',colour:'#2FA84A'}},
    cool:{earth:{label:'Blue-Teal · Coordinator',tag:'Thoughtful & caring',char:'app-assets/char-teal.png',colour:'#1EB5A6'},fire:{label:'Blue-Purple · Reformer',tag:'Thoughtful & bold',char:'app-assets/char-purple.png',colour:'#C215C2'},sun:{label:'Cool Blue · Observer',tag:'Pure reflection',char:'app-assets/char-blue.png',colour:'#1E9BE8'}}
  };
  const sub=SUB[w][sec]||SUB[w][Object.keys(SUB[w])[0]];
  // BLOB
  document.getElementById('rBlob').setAttribute('fill',r.hex);
  // primary + secondary char
  document.getElementById('rChar').innerHTML=`<img src="${r.img}" class="char a-brth" style="width:150px;z-index:2"><img src="${sub.char}" class="char a-float" style="width:84px;margin-left:-28px;margin-bottom:8px;z-index:1;animation-delay:.4s">`;
  document.getElementById('rName').textContent=r.name;
  document.getElementById('rName').style.color=r.hex;
  document.getElementById('rType').textContent=r.type.toUpperCase();
  document.getElementById('rSubTitle').innerHTML=`tilting toward <span style="color:${sub.colour};font-weight:600;font-style:normal">${sub.label}</span> — <span class="text-ink/50">${sub.tag}</span>`;
  // wheel — red@top, yellow@right, green@bottom, blue@left
  // each primary centered on its cardinal; sub-types sit on the arc toward the neighbour
  // angle in SVG terms: 0=right(=yellow), 90=down(=green), 180=left(=blue), 270=up(=red)
  const primaryAngle={fire:270,sun:0,earth:90,cool:180};
  // for each (primary,secondary), place dot halfway along the arc toward that neighbour
  const neighbourAngle={
    fire:{sun:315,cool:225,earth:270},      // red→yellow = upper-right; red→blue = upper-left; pure = top
    sun:{fire:315,earth:45,cool:0},         // yellow→red = upper-right; yellow→green = lower-right; pure = right
    earth:{sun:45,cool:135,fire:90},        // green→yellow = lower-right; green→blue = lower-left; pure = bottom
    cool:{earth:135,fire:225,sun:180}       // blue→green = lower-left; blue→red = upper-left; pure = left
  };
  const ang=neighbourAngle[w]&&neighbourAngle[w][sec]!==undefined?neighbourAngle[w][sec]:primaryAngle[w];
  const rad=ang*Math.PI/180, cx=85,cy=85,pr=54;
  const px=cx+Math.cos(rad)*pr, py=cy+Math.sin(rad)*pr;
  document.getElementById('rWheel').innerHTML=`<svg viewBox="0 0 170 170" style="width:170px;height:170px">
    <!-- red quadrant centered at top (angles 225-315 around cx,cy) -->
    <path d="M85,85 L25,25 A85,85 0 0,1 145,25 Z" fill="#ED1C24" opacity=".55"/>
    <path d="M85,85 L145,25 A85,85 0 0,1 145,145 Z" fill="#FFD429" opacity=".55"/>
    <path d="M85,85 L145,145 A85,85 0 0,1 25,145 Z" fill="#2FA84A" opacity=".55"/>
    <path d="M85,85 L25,145 A85,85 0 0,1 25,25 Z" fill="#1E9BE8" opacity=".55"/>
    <circle cx="85" cy="85" r="28" fill="#FFF5E4"/>
    <text x="85" y="14" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="rgba(15,29,58,.55)" font-weight="700">RED</text>
    <text x="162" y="89" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="rgba(15,29,58,.55)" font-weight="700">YEL</text>
    <text x="85" y="164" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="rgba(15,29,58,.55)" font-weight="700">GRN</text>
    <text x="8" y="89" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="rgba(15,29,58,.55)" font-weight="700">BLU</text>
    <circle cx="${px}" cy="${py}" r="13" fill="#FFF5E4" stroke="${sub.colour}" stroke-width="3"/>
    <circle cx="${px}" cy="${py}" r="6" fill="${sub.colour}"/>
    <text x="85" y="82" text-anchor="middle" font-family="Fraunces" font-size="10" fill="#0F1D3A" font-weight="700">you are</text>
    <text x="85" y="94" text-anchor="middle" font-family="Fraunces" font-size="9" fill="${sub.colour}" font-weight="700">here</text>
  </svg>`;
  document.getElementById('rDesc').textContent=r.desc;
  let tr='';r.traits.forEach(t=>{tr+=`<span class="px-4 py-1.5 rounded-full text-[.72rem] font-bold border border-ink/10" style="background:${r.soft};color:${r.hex}">${t}</span>`});
  document.getElementById('rTraits').innerHTML=tr;
  // mix meter
  const mixOrder=['fire','sun','earth','cool'];
  const mixLabels={fire:'Red · drive',sun:'Yellow · warmth',earth:'Green · care',cool:'Blue · thought'};
  const mixHex={fire:'#ED1C24',sun:'#FFD429',earth:'#2FA84A',cool:'#1E9BE8'};
  let mh='';mixOrder.forEach(k=>{const pct=Math.round(sc[k]/total*100);mh+=`<div><div class="flex justify-between text-[.7rem] mb-1"><span class="text-ink/60 font-bold">${mixLabels[k]}</span><span class="font-mono text-ink/40">${pct}%</span></div><div class="h-2 rounded-full bg-ink/5 overflow-hidden"><div style="width:${pct}%;height:100%;background:${mixHex[k]};border-radius:100px;transition:width .6s"></div></div></div>`});
  document.getElementById('rMix').innerHTML=mh;
  // complement
  document.getElementById('rCompContent').innerHTML=`<img src="${r.complement.img}" style="width:56px;border-radius:16px;background:${r.complement.hex}15;padding:4px"><div class="flex-1"><p class="text-[.9rem] font-bold text-ink leading-tight">${r.complement.name}</p><p class="text-[.78rem] text-inkSoft/55 mt-1 leading-relaxed">${r.complement.note}</p></div>`;
  // propagate
  document.getElementById('hAvatarImg').src=r.img;
  document.getElementById('pChar').src=r.img;
  document.getElementById('pType').textContent=sub.label.toUpperCase();
  document.getElementById('pType').style.color=sub.colour;
  document.getElementById('pBlob').setAttribute('fill',r.hex);
  document.getElementById('aT').innerHTML=`Near you this week`;
  renderActivities(w);
  const dotsEl=document.getElementById('matchDots');
  if(dotsEl){let d='';for(let i=0;i<5;i++){d+=`<span style="display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:3px;background:${i<4?r.hex:'rgba(15,29,58,.12)'}"></span>`}dotsEl.innerHTML=d}
  goTo('s-result');
}

// ============ VENUE / EVENT DATA ============
const EVENTS=[
  {id:'e1',kind:'care',colour:'sun',venue:'Wing Hong Centre',title:'Cantonese choir · beginners',when:'TUE · 2 PM',dist:'0.5 mi',partner:'Age Scotland',going:8,match:87,img:'app-assets/char-yellow.png',tag:'CARE · DAY CENTRE'},
  {id:'e2',kind:'volunteer',colour:'earth',venue:'Glasgow Foodbank',title:'Befriending visits',when:'WED · flexible',dist:'1.1 mi',partner:'Volunteer Scotland',going:12,match:94,img:'app-assets/char-green.png',tag:'VOLUNTEER · 2 HRS/WK'},
  {id:'e3',kind:'learn',colour:'cool',venue:'U3A Glasgow',title:'Reading party — novels',when:'THU · 10 AM',dist:'1.4 mi',partner:'U3A',going:9,match:82,img:'app-assets/char-blue.png',tag:'LEARN · BOOK GROUP'},
  {id:'e4',kind:'care',colour:'earth',venue:'Glenpark Care Home',title:'Open garden day',when:'SAT · 11 AM',dist:'2.0 mi',partner:'Age Scotland',going:15,match:78,img:'app-assets/char-green.png',tag:'CARE · VISIT'},
  {id:'e5',kind:'meet',colour:'sun',venue:'Garnethill Café',title:'Tuesday social',when:'TUE · 3 PM',dist:'0.4 mi',partner:'Luminate',going:6,match:91,img:'app-assets/char-yellow.png',tag:'MEETUP · CASUAL'},
  {id:'e6',kind:'volunteer',colour:'fire',venue:'Paths for All',title:'Lead a walking group',when:'SUN · 10 AM',dist:'0.9 mi',partner:'Volunteer Scotland',going:4,match:74,img:'app-assets/char-red.png',tag:'VOLUNTEER · LEAD'},
  {id:'e7',kind:'community',colour:'earth',venue:'Garnethill Garden',title:'Community planting',when:'WED · 11 AM',dist:'0.5 mi',partner:'Paths for All',going:11,match:86,img:'app-assets/char-green.png',tag:'COMMUNITY · OUTDOOR'},
  {id:'e8',kind:'learn',colour:'cool',venue:'Kelvingrove Museum',title:'Photography walk',when:'FRI · 2 PM',dist:'1.7 mi',partner:'U3A',going:7,match:69,img:'app-assets/char-blue.png',tag:'LEARN · CAMERA'}
];
let currentFilter='all';
function renderActivities(leadColour){
  const colourSoft={fire:'#FFE8E5',sun:'#FFF4CC',earth:'#E1F0D9',cool:'#DAEFFB'};
  const colourHex={fire:'#ED1C24',sun:'#FFD429',earth:'#2FA84A',cool:'#1E9BE8'};
  let list=EVENTS.slice();
  // sort: user's colour first, then match
  if(leadColour)list.sort((a,b)=>(b.colour===leadColour)-(a.colour===leadColour)||b.match-a.match);
  else list.sort((a,b)=>b.match-a.match);
  if(currentFilter!=='all')list=list.filter(e=>e.kind===currentFilter);
  const partnerColor={'Age Scotland':'#ED1C24','Volunteer Scotland':'#2FA84A','U3A':'#1E9BE8','Luminate':'#FFD429','Paths for All':'#2FA84A'};
  let html='';
  list.forEach((e,i)=>{
    const isTop=leadColour&&e.colour===leadColour;
    html+=`<div class="card p-4 mb-3 cursor-pointer" onclick="openVenue('${e.id}')" style="animation:fadeUp .4s ease-out ${i*.04}s both">
      <div class="flex gap-3 items-start">
        <div class="shrink-0 rounded-2xl flex items-center justify-center" style="width:64px;height:64px;background:${colourSoft[e.colour]}"><img src="${e.img}" style="width:46px"></div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <p class="text-[.62rem] font-mono uppercase tracking-widest" style="color:${colourHex[e.colour]}">${e.tag}</p>
            ${isTop?`<span class="px-1.5 py-0.5 rounded text-[.58rem] font-mono font-bold" style="background:#FFF4CC;color:#B88900">${e.match}% MATCH</span>`:`<span class="text-[.62rem] font-mono text-inkSoft/35">${e.match}%</span>`}
          </div>
          <p class="font-bold text-ink text-[.92rem] leading-tight mt-1">${e.title}</p>
          <p class="text-[.75rem] text-inkSoft/50 mt-1">${e.venue} · ${e.dist} · ${e.when}</p>
          <div class="flex items-center gap-2 mt-2.5 flex-wrap">
            <span class="px-2 py-0.5 rounded-full text-[.6rem] font-mono font-bold" style="background:${partnerColor[e.partner]}15;color:${partnerColor[e.partner]}">via ${e.partner}</span>
            <span class="text-[.68rem] text-inkSoft/45">· ${e.going} going</span>
          </div>
        </div>
      </div>
    </div>`;
  });
  if(!list.length)html='<p class="text-center text-sm text-inkSoft/40 py-8">No events in this filter yet.</p>';
  document.getElementById('aL').innerHTML=html;
}
function openVenue(id){goTo('s-venue')}
function rsvpConfirm(){const b=document.getElementById('rsvpBtn');b.classList.add('rsvp-on');b.innerHTML='✓ You\'re going — we\'ll remind you';setTimeout(()=>{b.classList.remove('rsvp-on');b.innerHTML='I\'ll be there →'},2500)}
// chip handler
document.addEventListener('click',ev=>{const c=ev.target.closest('.chip');if(!c)return;document.querySelectorAll('.chip').forEach(x=>x.classList.remove('chip-on'));c.classList.add('chip-on');currentFilter=c.dataset.f;const w=Object.entries(sc).reduce((a,b)=>a[1]>=b[1]?a:b)[0];renderActivities(sc[w]>0?w:null)});
// initial render so activities tab works even before test
setTimeout(()=>renderActivities(null),100);

// ============ MOOD ============
function setMood(c,e){const map={red:'#ED1C24',yellow:'#FFD429',green:'#2FA84A',blue:'#1E9BE8'};const soft={red:'#FFE8E5',yellow:'#FFF4CC',green:'#E1F0D9',blue:'#DAEFFB'};document.querySelectorAll('.mood-btn').forEach(b=>{b.style.background='';b.style.boxShadow=''});const btn=e.currentTarget;btn.style.background=soft[c];btn.style.boxShadow=`inset 0 0 0 2.5px ${map[c]}`;}

// ============ TWEAKS ============
const tweakDefaults={homeVariant:"A",resultVariant:"A",testVariant:"scenario",textSize:100};
let tk={...tweakDefaults,...TWEAKS};
function applyTweaks(){
  const h=document.getElementById('tkHome');
  if(h){
    tk.homeVariant=h.value;
    tk.resultVariant=document.getElementById('tkResult').value;
    tk.testVariant=document.getElementById('tkTest').value;
    tk.textSize=parseInt(document.getElementById('tkSize').value);
    document.getElementById('tsVal').textContent=tk.textSize+'%';
  }
  document.getElementById('phone').style.fontSize=(tk.textSize/100)+'em';
  // Home variants
  const moodCard=document.getElementById('hMoodCard');
  if(moodCard){moodCard.style.display=tk.homeVariant==='B'?'none':''}
  // result layout swap (simple border treatment as visual cue)
  const rc=document.getElementById('s-result');
  if(rc){const card=rc.querySelector('.card');if(card)card.style.background=tk.resultVariant==='B'?'#FFF4CC':'#fff'}
  // post
  try{window.parent.postMessage({type:'__edit_mode_set_keys',edits:{homeVariant:tk.homeVariant,resultVariant:tk.resultVariant,testVariant:tk.testVariant,textSize:tk.textSize}},'*')}catch(e){}
}
// init tweak form values (skip in embed mode when tweak panel absent)
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('tkHome');
  if(h){
    h.value=tk.homeVariant;
    document.getElementById('tkResult').value=tk.resultVariant;
    document.getElementById('tkTest').value=tk.testVariant;
    document.getElementById('tkSize').value=tk.textSize;
    document.getElementById('tsVal').textContent=tk.textSize+'%';
  }
  applyTweaks();
  updateFlowMap(cur);
});

// Edit-mode protocol (no-op in embed)
window.addEventListener('message',e=>{
  if(!e.data)return;
  const tw=document.querySelector('.tweaks');if(!tw)return;
  if(e.data.type==='__activate_edit_mode')tw.classList.add('on');
  if(e.data.type==='__deactivate_edit_mode')tw.classList.remove('on');
});
if(document.querySelector('.tweaks')){try{window.parent.postMessage({type:'__edit_mode_available'},'*')}catch(e){}}