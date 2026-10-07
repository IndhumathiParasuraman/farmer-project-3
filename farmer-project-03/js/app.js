// Tab switching and shared helpers
document.querySelectorAll('#nav button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#nav button,section').forEach(e=>e.classList.remove('on'));
  b.classList.add('on');document.getElementById(b.dataset.t).classList.add('on');
});
const fmt=n=>Math.round(n).toLocaleString('en-IN');
const rupee=n=>'₹'+fmt(n);
function fill(sel,obj){Object.keys(obj).forEach(k=>sel.add(new Option(k,obj[k])))}
