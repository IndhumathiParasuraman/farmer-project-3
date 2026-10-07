// Ranks the three saving options by rupees saved for the current crops
function drawLevers(){
  const b=base_();
  const opts=[
   ['Switch to drip irrigation',b.w-totals(IRR.Drip,1,1).w,'w','Targets the largest water use.'],
   ['Use soil-test based split fertilizer',b.f-totals(1,FERT['Soil-test based, split doses'],1).f,'f','Applies only what the soil lacks.'],
   ['Share or hire machinery',(b.m-totals(1,1,0.8).m),'m','Avoids idle tractor ownership.']].map(o=>{
     const labourSaved=o[2]==='m'?b.l-totals(1,1,0.8).l:0;
     return {name:o[0],note:o[3],qty:o[1],k:o[2],rs:o[1]*COST[o[2]]+labourSaved*COST.l}}).sort((a,b)=>b.rs-a.rs);
  levers.innerHTML=opts.map((o,i)=>`<div class="card"><span class="rank">#${i+1}</span><h3>${o.name}</h3>
   <p class="big">${rupee(o.rs)}</p><p class="mute">saves ${fmt(o.qty)} ${UNITS[o.k]} per season. ${o.note}</p></div>`).join('');
}
