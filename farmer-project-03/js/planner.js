// Farm plan: crop rows, resource totals and land check
fill(irr,IRR);fill(fert,FERT);fill(mach,MACH);
let crops=[{crop:'Paddy',acres:5},{crop:'Groundnut',acres:3}];

function drawRows(){
  rows.innerHTML=crops.map((c,i)=>`<div class="row">
   <select data-i="${i}" data-k="crop">${Object.keys(CROPS).map(n=>`<option ${n===c.crop?'selected':''}>${n}</option>`).join('')}</select>
   <input type="number" min="0" step="0.5" value="${c.acres}" data-i="${i}" data-k="acres" style="width:100px" aria-label="Acres">
   <span class="mute">acres</span>
   <button class="btn x" data-del="${i}">Remove</button></div>`).join('');
  rows.querySelectorAll('[data-k]').forEach(e=>e.oninput=()=>{crops[e.dataset.i][e.dataset.k]=e.dataset.k==='acres'?(+e.value||0):e.value;update()});
  rows.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{crops.splice(b.dataset.del,1);drawRows();update()});
}
add.onclick=()=>{crops.push({crop:'Black gram',acres:1});drawRows();update()};

// totals for given multipliers (water, fert, mach); labour stays normal unless machinery is shared
function totals(w,f,m){
  const t={w:0,f:0,l:0,m:0,y:0};
  crops.forEach(c=>{const d=CROPS[c.crop];
    t.w+=d.w*c.acres*w;t.f+=d.f*c.acres*f;t.l+=d.l*c.acres*(m<1?0.92:1);t.m+=d.m*c.acres*m;t.y+=d.y*c.acres});
  return t;
}
const plan_=()=>totals(+irr.value,+fert.value,+mach.value);
const base_=()=>totals(1,1,1);

function update(){
  const used=crops.reduce((s,c)=>s+c.acres,0),usable=+land.value*(1-RESERVE);
  landMsg.className='msg '+(used>usable?'bad':'ok');
  landMsg.textContent=used>usable
   ?`Crops use ${used} acres but only ${usable.toFixed(1)} acres are available after the ${RESERVE*100}% reserve. Reduce acres.`
   :`${used} of ${usable.toFixed(1)} usable acres planted. ${(usable-used).toFixed(1)} acres free.`;
  const b=base_(),p=plan_();let money=0;
  res.innerHTML=['w','f','l','m'].map(k=>{
    const s=b[k]-p[k];money+=s*COST[k];
    const pct=b[k]?Math.round(p[k]/b[k]*100):100;
    return `<tr><td>${NAMES[k]} <span class="mute">(${UNITS[k]})</span></td><td>${fmt(b[k])}</td><td><b>${fmt(p[k])}</b></td>
    <td class="save">${s>0?fmt(s):'–'}</td><td><div class="bar"><i style="width:${pct}%"></i></div></td></tr>`}).join('');
  const cost=['w','f','l','m'].reduce((s,k)=>s+p[k]*COST[k],0);
  sum.innerHTML=`<div class="card"><p class="mute">Expected yield</p><p class="big">${fmt(b.y)} quintal</p><p class="mute">Same as normal practice</p></div>
   <div class="card"><p class="mute">Season input cost</p><p class="big">${rupee(cost)}</p></div>
   <div class="card"><p class="mute">Money saved</p><p class="big">${rupee(money)}</p></div>`;
  drawLevers();
}
[land,irr,fert,mach].forEach(e=>e.oninput=update);
drawRows();
