/* Shared helpers for MyPath — loaded after data.js on every page */
"use strict";

const $ = (sel, root=document)=>root.querySelector(sel);
const $$ = (sel, root=document)=>[...root.querySelectorAll(sel)];
function fmt(n){ return n.toLocaleString("en-US"); }

function providerLinkHTML(provider, colorVar, labelAr){
  const url = PROVIDER_LINKS[provider];
  if(!url) return '<span class="cert-nolink">لا يتوفر رابط رسمي مباشر لهذه الجهة</span>';
  return `<a class="cert-link" style="color:var(--${colorVar||'teal'})" href="${url}" target="_blank" rel="noopener noreferrer">${labelAr} ↗</a>`;
}

/** Renders one certification card. opts: {recommended:boolean, catChip:string|null} */
function certCardHTML(cert, colorVar, opts={}){
  const recommended = !!opts.recommended;
  const catChip = opts.catChip || null;
  return `<div class="cert-card" style="--stage-color:var(--${colorVar})">
    ${catChip ? `<span class="cat-chip">${catChip}</span>` : ''}
    <div class="top-row">
      <div>
        <h4>${cert.n}</h4>
        <span class="en-inline title">${cert.e}</span>
        <div class="provider">${cert.p}</div>
      </div>
      <span class="price-pill">${fmt(cert.c)}<small>﷼ (الحد الأعلى)</small></span>
    </div>
    <p class="desc">${cert.d}</p>
    <div class="skill-chips">${cert.sk.map(s=>`<span class="skill-chip">✓ ${s}</span>`).join("")}</div>
    ${recommended?'<span class="recommended">⭐ اختيارنا لهذه المرحلة</span>':''}
    <div class="cert-foot">${providerLinkHTML(cert.p, colorVar, "التسجيل لدى الجهة")}</div>
  </div>`;
}

function courseCardHTML(c){
  return `<div class="course-card">
    <div class="course-top">
      <span class="course-provider">${c.p}</span>
      <span class="free-badge ${c.free?'free':'paid'}">${c.free? 'مجاني':'مدفوع جزئيًا'}</span>
    </div>
    <h4>${c.n}<span class="en-inline title">${c.e}</span></h4>
    <p class="desc">${c.d}</p>
    <div class="skill-chips">${c.sk.map(s=>`<span class="skill-chip">✓ ${s}</span>`).join("")}</div>
    <a class="cert-link" style="color:var(--violet); margin-top:.3rem;" href="${c.link}" target="_blank" rel="noopener noreferrer">ابدأ التعلم ↗</a>
  </div>`;
}

function tierCerts(certs){
  const sorted = certs.slice().sort((a,b)=>a.c-b.c);
  const n = sorted.length, third = Math.max(1, Math.round(n/3));
  const t1 = sorted.slice(0, third); const t2 = sorted.slice(third, third*2); const t3 = sorted.slice(third*2);
  return [t1, t2.length?t2:sorted.slice(third), t3.length?t3:sorted.slice(-1)];
}

function scrollToId(id){
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth', block:'start'});
}

/* ---------- nav: mobile hamburger + active-link highlight ---------- */
(function(){
  const navToggle = $("#navToggle"), navLinksEl = $("#navLinks");
  if(navToggle && navLinksEl){
    navToggle.addEventListener("click", ()=>{
      const open = navLinksEl.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true":"false");
      navToggle.textContent = open ? "✕" : "☰";
    });
    $$("#navLinks a").forEach(a=> a.addEventListener("click", ()=>{
      navLinksEl.classList.remove("open"); navToggle.setAttribute("aria-expanded","false"); navToggle.textContent = "☰";
    }));
    const page = (location.pathname.split("/").pop() || "index.html");
    $$("#navLinks a, .mobile-quicknav a").forEach(a=>{
      const target = (a.getAttribute("href")||"").split("#")[0] || "index.html";
      if(target === page) a.classList.add("active");
    });
  }
})();

/* ---------- theme toggle ---------- */
const root = document.documentElement;
(function(){
  const themeToggle = $("#themeToggle");
  if(themeToggle){
    themeToggle.addEventListener("click", ()=>{
      const cur = root.getAttribute("data-theme"); const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
      const next = cur === "dark" ? "light" : cur === "light" ? "dark" : (prefersDark ? "light" : "dark");
      root.setAttribute("data-theme", next);
    });
  }
})();

/* ---------- reveal on scroll ---------- */
(function(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("show"); io.unobserve(e.target); } });
  },{threshold:.12});
  $$(".section-head, .choice-card, .budget-card, .course-card, .about-card").forEach(el=>{ el.classList.add("reveal"); io.observe(el); });
})();

/* ---------- hero canvas (only present on index.html) ---------- */
(function(){
  const canvas = $("#heroCanvas");
  if(!canvas) return;
  const ctx = canvas.getContext("2d"); let w,h,dpr;
  function resize(){ dpr = Math.min(2, window.devicePixelRatio||1); w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = w*dpr; canvas.height = h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
  const heroEl = canvas.parentElement;
  function fit(){ canvas.style.height = heroEl.offsetHeight+"px"; resize(); }
  window.addEventListener("resize", fit); fit();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const N = Math.min(46, Math.floor((w*h)/26000));
  const pts = Array.from({length:N}, ()=>({ x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.6+0.6, vy:-(Math.random()*0.18+0.04), vx:(Math.random()-0.5)*0.06, tw:Math.random()*Math.PI*2 }));
  const routeCount = 5;
  const route = Array.from({length:routeCount}, (_,i)=>({ x: (w/(routeCount-1))*i + (Math.random()-0.5)*40, y: h*0.35 + Math.sin(i*1.3)*h*0.14 + (Math.random()-0.5)*20 }));
  function isDark(){ const attr = root.getAttribute("data-theme"); if(attr) return attr==="dark"; return matchMedia("(prefers-color-scheme: dark)").matches; }
  function draw(t){
    ctx.clearRect(0,0,w,h); const dark = isDark();
    const dotColor = dark ? "255,255,255" : "28,35,51"; const lineColor = dark ? "227,168,87" : "184,117,39";
    ctx.strokeStyle = `rgba(${lineColor}, 0.35)`; ctx.lineWidth = 1.4; ctx.beginPath();
    route.forEach((p,i)=>{ i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y); }); ctx.stroke();
    route.forEach((p)=>{ ctx.beginPath(); ctx.arc(p.x,p.y,3.4,0,Math.PI*2); ctx.fillStyle = `rgba(${lineColor}, .8)`; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x,p.y,7,0,Math.PI*2); ctx.strokeStyle = `rgba(${lineColor}, .25)`; ctx.stroke(); });
    pts.forEach(p=>{
      const a = 0.35 + Math.sin((t||0)/900 + p.tw)*0.25;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle = `rgba(${dotColor}, ${Math.max(0.08,a)})`; ctx.fill();
      if(!reduced){ p.y += p.vy; p.x += p.vx; if(p.y < -10){ p.y = h+10; p.x = Math.random()*w; } if(p.x < -10) p.x = w+10; if(p.x > w+10) p.x = -10; }
    });
  }
  if(reduced){ draw(0); } else { function loop(t){ draw(t); requestAnimationFrame(loop); } requestAnimationFrame(loop); }
})();
