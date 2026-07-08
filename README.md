# MyPath · website

An interactive, bilingual (Arabic/English) AI-style career compass for tech graduates in Saudi Arabia. It turns HRDF's official *Guide to Supported Professional Certifications (Telecom & IT, 2025 — 2nd edition)* into a living tool.

**Live site:** enabled via GitHub Pages once this repo is pushed (see below).

## What it does

- **Path quiz** — 5 quick questions map a graduate's interests to the closest of 10 tech career tracks.
- **Direct picker** — or jump straight to a track if you already know your field.
- **Staged roadmap** — Foundation → Specialization → Mastery, populated with real certifications, real HRDF reimbursement caps, skills gained, and official provider registration links.
- **Free courses hub** — curated free/official learning paths from IBM, Microsoft, Cisco, AWS, Google, Salesforce, HubSpot, freeCodeCamp, Unity, Huawei, and Meta.
- **CV coach** — upload a real PDF or Word (.docx) CV; it's parsed entirely client-side (no server, no external libraries) and scored against ATS-style heuristics, with a target-field-aware feedback checklist.
- **Full searchable catalog** — every certification from the official guide, filterable by field.

## Tech notes

- Single self-contained `index.html` — no build step, no dependencies, no external network calls (font/CDN-free), so it runs anywhere static files are served, including GitHub Pages.
- DOCX text extraction: a small hand-written ZIP local-file-header reader + the browser's native `DecompressionStream('deflate-raw')`.
- PDF text extraction: best-effort — decompresses `FlateDecode` streams via `DecompressionStream('deflate')` and parses `Tj`/`TJ` text-showing operators. Works well for simple/Latin-encoded PDFs; falls back to a clear "please upload the Word version" message for PDFs with complex embedded/subsetted fonts (common in some Arabic-designed CVs).

## Source & disclaimers

Certification names, providers, and HRDF reimbursement caps are sourced from *"Guide to Supported Professional Certifications in the Telecom & IT Sector," 2nd edition, 2025* (TVTC × HRDF/Hadaf). Provider/course links point to each organization's general official page, not necessarily a direct link to one specific exam — verify the exact certification on the provider's site. This is a demonstration prototype: CV analysis uses rule-based heuristics and automated text extraction, not a trained AI model.

## Admin dashboard & analytics

`admin.html` is a private, login-gated dashboard showing anonymous visit stats (total views, a 14-day chart, device breakdown, top pages, recent visits). It is **not linked from the site nav** and its URL doesn't need to be secret — the real protection is that the database only returns data to a signed-in user (see below), not to the public `anon` role used by regular visitors.

**Stack:** [Supabase](https://supabase.com) (free tier) — Postgres + Auth + auto-REST API, called directly from the static frontend via `@supabase/supabase-js` (CDN script tag). No custom backend server.

**Privacy:** page views are logged with only: page path, referring site's hostname, a coarse device category (desktop/tablet/mobile), and a random ID stored in `sessionStorage` (cleared when the tab closes). No IP addresses, no cookies, no personal data are ever stored.

### One-time setup (do this once)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase dashboard, go to **SQL Editor → New query**, paste the full contents of [`supabase/schema.sql`](supabase/schema.sql), and run it. This creates the `page_views` table and the Row Level Security policies (public can only *insert* a row; only a signed-in user can *read* them).
3. Go to **Authentication → Users → Add user** and create your own admin login (your email + a password you choose). This is the only account that will ever be able to see the stats.
4. Go to **Project Settings → API** and copy the **Project URL** and the **`anon` `public`** key (never the `service_role` secret key — that one must never be exposed in frontend code).
5. Paste those two values into `assets/supabase-config.js`, replacing the placeholders.
6. Push those changes. Visit `admin.html` on the live site and log in with the account you created in step 3.

## Run locally

Just open `index.html` in a browser — no server required.
