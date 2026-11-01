const PAGES=[['index.html','🏠','Home'],['blog.html','📜','Blog'],['forum.html','✉️','Ask']];
const $=s=>document.querySelector(s);
if($('#nav'))$('#nav').outerHTML='<nav>'+PAGES.map(p=>`<a href="${p[0]}"><span class="ico">${p[1]}</span> ${p[2]}</a>`).join('')+'</nav>';
if($('#foot'))$('#foot').innerHTML='<small>Fan project · not affiliated with PokéPath TD</small> <a class="egg" href="secret.html">●</a>';
const posts=$('#posts');
if(posts){const n=+posts.dataset.limit||POSTS.length;
 posts.innerHTML=POSTS.slice(0,n).map(p=>`<article class="post"><span class="ico">${p.icon}</span> <span class="tag">${p.tag}</span> <small>${p.date}</small><h2>${p.title}</h2><p>${p.body}</p></article>`).join('')}
const qa=$('#qa');
if(qa)qa.innerHTML=QA.map(x=>`<div class="qa"><p>❓ ${x.q}</p><p>💬 ${x.a}</p><small>${x.date}</small></div>`).join('');
// Konami code -> secret page
const K=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let i=0;
addEventListener('keydown',e=>{i=e.key===K[i]?i+1:0;if(i===K.length)location.href='secret.html'});
const form=$('#unlock');
if(form)form.onsubmit=e=>{e.preventDefault();const c=$('#code').value.trim().toLowerCase();
 const s=SECRETS.find(x=>x.code===c);
 $('#out').innerHTML=s?'🔓 '+new TextDecoder().decode(Uint8Array.from(atob(s.text),ch=>ch.charCodeAt(0))):'🔒 Nothing happens.'};
console.log('%cpsst... ↑↑↓↓←→←→BA','font-size:14px');
