/* Anonymous page-view tracker.
   No IP address, no cookies, no personal data — only: page path, referring
   site (hostname only), a coarse device category, and a random per-tab
   session id stored in sessionStorage (cleared when the browser tab closes).
   Requires assets/supabase-config.js and the Supabase CDN script to load
   first; fails silently (never breaks the page) if either is missing. */
(function(){
  "use strict";
  if (typeof SUPABASE_URL === "undefined" || !SUPABASE_URL || SUPABASE_URL.indexOf("YOUR_") === 0) return;
  if (typeof supabase === "undefined") return;

  try{
    var client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    var sid = sessionStorage.getItem("mp_sid");
    if(!sid){
      sid = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : (Date.now()+"-"+Math.random().toString(16).slice(2));
      sessionStorage.setItem("mp_sid", sid);
    }
    var ua = navigator.userAgent || "";
    var device = /iPad|Tablet/i.test(ua) ? "tablet" : (/Mobi|Android|iPhone/i.test(ua) ? "mobile" : "desktop");
    var path = (location.pathname.split("/").pop() || "index.html");
    var referrer = null;
    if(document.referrer){
      try{ referrer = new URL(document.referrer).hostname; }catch(e){ referrer = null; }
    }
    client.from("page_views").insert({ path: path, referrer: referrer, device: device, session_id: sid })
      .then(function(){}).catch(function(){});
  }catch(e){ /* analytics must never break the site */ }
})();
