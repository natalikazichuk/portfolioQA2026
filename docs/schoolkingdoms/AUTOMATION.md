# SchoolKingdoms — Test Automation

A permanent automated test suite that runs on **every pull request** in GitHub Actions. It also runs locally with one command, `npm run check`. Code: [`schoolkingdoms/tools/qa`](https://github.com/natalikazichuk/schoolkingdoms/tree/main/tools/qa).

**Stack:** Node.js · Playwright (Chromium) · `node:test` · `node:assert` · GitHub Actions
**Approach:** test pyramid: fast static checks → unit tests of pure logic → browser smoke → e2e flows with stubbed backend.

## Test levels

| Level | Tool | What it checks | Catches |
|---|---|---|---|
| **Static audit** | `static-audit.mjs` (Node, no browser) | JS syntax in every page and script, CSS brace balance, broken local `src`/`href`, the same shared file included with different `?v=N`, `<html lang>` / `<title>` / viewport | Typos that break a whole page, stale cache-busting versions, missing files |
| **Unit** | `node:test` (13 suites, server + analytics) | Battle skills, shop stock, trades, avatar queue, learning analytics (`sk-insights.js`): mastery %, trends, topic statuses, "most common mistakes" | Wrong numbers in game rules and in the learning report |
| **Smoke** | `site-smoke.mjs` (Playwright) | Opens every HTML page as a guest (**132/132 pass**); collects uncaught JS errors and local 4xx/5xx files | A page that crashes on load, a missing script or style |
| **E2E flows** | `flows-e2e.mjs` (Playwright) | 7 user scenarios with known data (below) | Logic that renders without errors but shows the wrong result |
| **Demo smoke** | `demo-smoke.mjs` | Builds the public demo and opens every page | The public demo breaking after a change in the main app |

## E2E scenarios (logged-in user, no server needed)

The real backend client (`firebase-config.js`) is replaced in the browser with a **stub `window.SK`** returning known heroes, tests and progress. Each scenario then asserts what the page *calculated and displayed*, not just that it loaded.

1. **Test attempt log**: score, wrong answers, restarts are recorded per attempt.
2. **Hero rating**: "Learning" vs "Arena" leaderboards, "Family" / "Friends" tabs; parent-assigned tasks do **not** add rating stars (no farming).
3. **"My abilities"**: superpowers, what to level up, the next recommended step.
4. **Parent dashboard**: counters, recommendation, the "➕ Assign" action.
5. **Skills radar chart**: subject levels, cards, cover images and image fallbacks.
6. **Radar split by grade**: switcher, own grade first, other grades only if attempted.
7. **Preschool reward popup**: shows exactly the reward configured in the admin panel (coins, item, stat). The "already claimed" lock is set only after a successful grant. Edge cases: no reward configured, user is not a Hero.

## How I verify the tests themselves: mutation checks

A green test is only useful if it turns red when the code is wrong. For each new test I **deliberately break the code under test** and confirm the test fails:

| Mutation | Expected | Result |
|---|---|---|
| Reward requested for the wrong page (`href` → `x.html`) | Scenario 7 fails | ✅ caught |
| Popup not cleared between two openings | Scenario 7 fails | ✅ caught |
| "Passed" tests without a score counted as 55% instead of 100% | Unit test fails | ✅ caught |

## Bugs found by the suite / while writing it

- **Stale popup content**: reopening the reward popup kept the coins and item from the previous time. Found by scenario 7 (case "no reward configured").
- **Radar showed preschool at 55%** although every activity was completed. Pages, videos and trainers only store a "passed" flag, and the analytics counted a flag as the pass threshold. Fixed to 100%, with a unit test for levelled tests (flag only → 100%, 3 of 4 levels → 75%).
- **Duplicate reward risk on merge**: two branches implemented the same popup differently. The e2e test was rewritten for the merged version, so the reward is granted once.

## CI

Three parallel jobs on every push and PR:
```
audit   : static audit
server  : unit tests (node:test)
smoke   : Playwright smoke ──► e2e flows ──► demo build + smoke
```
Every PR must be green before merge. A failing check blocks the PR, and the fix ships in the same PR (no skipped or disabled tests).
