// Productivity safeguards
guards.innerHTML=GUARDS.map(g=>`<div class="card"><h3>${g[0]}</h3><p class="mute">${g[1]}</p></div>`).join('');
update();
