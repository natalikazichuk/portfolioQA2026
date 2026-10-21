# QA Natali Kazichuk

Interactive QA Portfolio by Natali.

## Concept
QA NK is a portfolio that demonstrates QA skills through an interactive product experience: Bug Hunt, QA Quest, case studies, API testing, AI/LLM evaluation, and QA documentation.

## Current projects
- VeteranJobPortal — primary QA case study ([docs](docs/vjp/README.md): test plan, user stories, test cases, RTM)
- Navkolo — business SaaS, registration/login checklist, user scenarios, API checks ([case study](docs/navkolo/README.md))
- Guru99 Bank — training project: New Customer form test cases, Jira bug reports, requirements checklist ([docs](docs/guru99/README.md))
- Snake Eye — web/data project
- SchoolKingdoms — educational platform ([case study](docs/schoolkingdoms/README.md): bug report SK-BUG-143, [test automation](docs/schoolkingdoms/AUTOMATION.md): Playwright e2e + CI)

## Roadmap
- [ ] Portfolio shell
- [ ] Project case studies
- [ ] Bug Hunt
- [ ] Bug Museum
- [ ] QA Lab
- [ ] AI Lab
- [ ] Recruiter Mode
- [ ] Responsive/mobile QA
- [ ] Deployment

## Stack
React + Vite, JavaScript, CSS, JSON data.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
```bash
npm run build   # output in dist/
```
Publish `dist/` (e.g. GitHub Actions or the `gh-pages` branch). Navigation uses URL hashes (`#recruiter`), so direct links work on static hosting.

## Content
Edit `src/data/profile.json` (summary, highlights, tools, CV/GitHub/email links). Contact buttons stay hidden until their URL is set.
