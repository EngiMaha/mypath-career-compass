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

## Run locally

Just open `index.html` in a browser — no server required.
