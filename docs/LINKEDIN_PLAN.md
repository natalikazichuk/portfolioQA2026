# План: портфоліо в LinkedIn

> Статус: **відкладено до завершення правок UI.**
> Повертаємось до цього плану, коли всі пункти з «0. Передумови» виконані.

## 0. Передумови (перед тим як щось додавати в LinkedIn)
- [ ] Правки UI портфоліо завершені й злиті в `main`
- [ ] Сайт відкривається: https://natalikazichuk.github.io/portfolioQA2026/ (десктоп і телефон)
- [ ] Шрифт Space Grotesk у назвах проєктів перевірено в браузері
- [ ] Опубліковано демо SchoolKingdoms (`schoolkingdoms-demo`), посилання в картці проєкту оновлено
- [ ] У демо SchoolKingdoms додано тести списком (по одному відкритому з предмета)
- [ ] Перевірено всі посилання «Open project» і на документацію (не 404)
- [ ] Старий репозиторій `portfolio-QA` заархівовано (Settings → Archive)

## 1. Візуальні матеріали
- [ ] Скриншот головної сторінки портфоліо 1200×627 (обкладинка для Featured)
- [ ] Обкладинки 1200×627 для проєктів: VJP, Navkolo, Guru99, SchoolKingdoms
- [ ] Фото профілю та банер профілю (банер можна в стилі портфоліо: темний фон, «QA Engineer»)

## 2. Шапка профілю
- [ ] **Headline:**
  ```
  QA Engineer · Manual & API Testing · Test Design · Bug Reporting | Postman · DevTools · Jira
  ```
- [ ] **Contact info → Website:** посилання на портфоліо (тип «Portfolio»)
- [ ] **Open to work:** QA Engineer / Manual QA / QA Tester (за бажанням — видно лише рекрутерам)

## 3. About
- [ ] Вставити текст:
  ```
  I test products from the user's side and the system's side: manual and API testing, clear bug reports, test documentation from user stories to traceability matrices.

  Before QA I worked in banking, B2B sales and retail. That is where I learned zero-error paperwork, comparing expected vs actual, and explaining complex things in plain words, which I now use in every bug report.

  Portfolio → natalikazichuk.github.io/portfolioQA2026
  ```

## 4. Featured
Profile → Add profile section → Recommended → Add featured → Add a link
- [ ] Портфоліо: https://natalikazichuk.github.io/portfolioQA2026/
- [ ] QA-документація VJP: https://github.com/natalikazichuk/portfolioQA2026/tree/main/docs/vjp
- [ ] Демо SchoolKingdoms (після публікації)

## 5. Experience
- [ ] Додати позицію **QA Engineer · Freelance** (Remote)
- [ ] Попередні роботи — без зайвих дат і деталей (дати не підкреслюємо)

## 6. Projects
Profile → Add profile section → Recommended → Add projects. Дати не заповнюємо, «Associated with» → QA Engineer · Freelance.

- [ ] **QA Portfolio — interactive case studies**
  > Personal QA portfolio built as a product: case studies, test documentation, bug reports and a 60-second Recruiter Mode. The site itself is tested with its own test plan and test cases.
  > Skills: Manual Testing · Test Planning · Documentation

- [ ] **VeteranJobsPortal — job platform for veterans**
  > End-to-end QA for a web platform with three roles (Guest, Veteran, Recruiter). Wrote the test plan, 24 user stories with acceptance criteria, 69 test scenarios, 40 test cases, smoke and UAT suites, and a traceability matrix with 24/24 stories covered. Found a High-severity bug: applications created by a guest were not visible to the recruiter. Verified the fix.
  > Skills: Test Design · Requirements Traceability · Regression Testing · Role-Based Access Testing

- [ ] **Navkolo — business SaaS (accounting & trade)**
  > Exploratory and functional testing of a live SaaS product without a specification: rebuilt the requirements, wrote the registration and login checklist, tested the user flows and the registration API (Postman, DevTools). Reported 9 defects, 2 of them High. One example: registration succeeded with a mismatched password confirmation.
  > Skills: Exploratory Testing · API Testing · Postman · Chrome DevTools

- [ ] **Guru99 Bank — banking web app**
  > 30 test cases for the "New Customer" form (17 pass / 13 fail), bug reports in Jira, retesting on v2.0. Key find: creating a valid customer exposed a raw database error with the DB user name.
  > Skills: Test Cases · Jira · Boundary & Negative Testing

- [ ] **SchoolKingdoms — gamified learning platform**
  > Testing of a platform for kids with roles, tests, trainers and mini-games. Built a public demo version with a Chromium smoke test (39/39 pages pass) that also caught missing assets in the full app. Built a permanent test suite in GitHub Actions: static audit, unit tests, Playwright smoke and 7 e2e user flows with a stubbed backend, verified by mutation checks.
  > Skills: Smoke Testing · Playwright · E2E Testing · Test Automation · CI/CD · UI Testing

- [ ] Snake Eye — додати, коли проєкт буде готовий

## 7. Skills
- [ ] Топ-3 (закріплені): Manual Testing · API Testing · Test Design
- [ ] Далі: Bug Reporting · Exploratory Testing · Regression Testing · Postman · Chrome DevTools · Jira · Playwright · SQL · Test Documentation

## 8. Пост-анонс
- [ ] Текст поста (підготувати після UI-правок, коли будуть фінальні скриншоти)
- [ ] Скриншот або коротке відео (GIF) портфоліо
- [ ] Посилання на портфоліо в першому коментарі (LinkedIn гірше показує пости з лінком у тексті)
- [ ] Хештеги: #QA #SoftwareTesting #ManualTesting #QAEngineer #OpenToWork

## 9. Фінальна перевірка
- [ ] Переглянути профіль у режимі «View as» (як бачать інші)
- [ ] Відкрити всі посилання з телефона
- [ ] Перевірити, що в профілі немає зайвих дат, які видають вік
