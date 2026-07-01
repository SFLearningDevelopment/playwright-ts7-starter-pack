# Playwright + TypeScript 7 — Exercise ("Starter Pack")

This repository is **intentionally broken**. It is the hands-on exercise for the
**SF Certified TypeScript 7 for Playwright** course. Your job: get the CI pipeline
to pass — green across the board — by finding and fixing the problems yourself.

The working answer key is the reference repo **`playwright-ts7-starter`**. Try to
fix each issue before you peek.

## How to do the exercise

1. Push this repository to your own GitHub (or fork it), and open the **Actions** tab.
2. The **CI** workflow will run and **fail**. Read the failing step's log carefully.
3. Fix the problem, commit, and let CI run again.
4. Repeat. There is **more than one** problem — each fix reveals the next.
5. You are done when the CI run is fully **green**.

You can also run it locally:

```bash
npm install
npx playwright install chromium
npm test
```

## Hints (only if you're stuck)

There are three problems, and they surface in this order:

1. **Check the install command.** The very first CI step (installing dependencies)
   fails before anything else runs. What does that command require that this repo
   doesn't have?
2. **Check that `tsc` resolves.** Once install works, the type-check step fails —
   it ends up running the *wrong* program. Which compiler does this project actually
   provide, and what is its command called on preview builds? (Revisit Module 1.)
3. **Check the navigation.** Once the type-check passes, the browser tests run — and
   some time out while trying to type into the app. The test that only checks the
   empty list passes; the ones that add a todo fail. How does the page object navigate
   to the app, and does it wait for the page to be ready? (The demo is a hash-routed
   single-page app.)

## What this teaches

The three problems map to real lessons from the course:

- Infrastructure matters (the install command / lockfile).
- The native TypeScript 7 compiler's binary name (Module 1's `tsc` vs `tsgo` point).
- **The type-check gate cannot catch runtime or navigation bugs — only running the
  tests can.** This is the most important lesson: types passing is necessary, not
  sufficient.

## Layout

```
playwright-ts7-starter-pack/
├─ package.json               # scripts run the type-check gate + tests
├─ playwright.config.ts       # points at the TodoMVC demo
├─ tsconfig.json              # root config
├─ tests/
│  ├─ tsconfig.json           # governs the type-check gate
│  ├─ pages/TodoPage.ts       # typed page object
│  ├─ fixtures.ts             # typed custom fixture
│  └─ todo.spec.ts            # spec using the fixture + page object
└─ .github/workflows/ci.yml   # the CI pipeline you must get green
```
