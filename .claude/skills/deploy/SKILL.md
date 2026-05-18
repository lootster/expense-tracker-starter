---
name: deploy
description: Deploy the app to staging. Runs tests, builds the production bundle, then pushes to the staging branch. Use when the user says "deploy", "ship to staging", or "/deploy".
---

# Deploy

Run these steps in order. If any step fails, stop and report the failure — do not proceed to the next step.

## 1. Run tests

```bash
npm test
```

If `package.json` has no `test` script, tell the user tests are not configured and ask whether to skip or abort. Do not silently continue.

## 2. Build the production bundle

```bash
npm run build
```

The output goes to `dist/`. Treat any non-zero exit, build error, or unresolved warning that fails the build as a stop condition.

## 3. Push to staging

Push the current branch to the remote `staging` branch:

```bash
git push origin HEAD:staging
```

If the working tree is dirty, stop and ask the user how to handle the uncommitted changes — do not auto-commit or stash without confirmation.

## Reporting

After a successful deploy, report:
- The commit SHA that was pushed
- The branch that was pushed to
- A reminder that staging is now updated

If any step failed, report which step, the exact error, and do not attempt to continue or roll back without asking.
