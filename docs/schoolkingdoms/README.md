# SchoolKingdoms — QA Case Study

**Product:** [SchoolKingdoms](https://natalikazichuk.github.io/schoolkingdoms/): a gamified learning platform for primary school. Tests and trainers grow the child's Hero stats, items and arena battles. [Public demo](https://natalikazichuk.github.io/schoolkingdoms-demo/) (grade 1, no sign-up).
**Role:** QA + product owner · **Stack under test:** static web (GitHub Pages) · Firebase Auth + Firestore · admin panel
**Environment:** Web (desktop + mobile), Chrome / Safari · main @ prod

## Test automation
Permanent suite in CI on every PR: static audit, unit tests, Playwright smoke of every page, 7 e2e flows with a stubbed backend, mutation checks of the tests themselves → [AUTOMATION.md](AUTOMATION.md)

## Defects
| ID | Title | Severity | Status |
|---|---|---|---|
| [SK-BUG-143](SK-BUG-143.md) | Admin labels a per-level stat reward as one-time ("Fixed per record"), so the editor disagrees with the test cover and "Hero base stats" | Minor | Fixed |

Source bug reports in Ukrainian live in the product repository: [`schoolkingdoms/docs`](https://github.com/natalikazichuk/schoolkingdoms/tree/main/docs).
