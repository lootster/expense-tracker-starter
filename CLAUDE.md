# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

No routing, no state management library, no backend — all state is in-memory via `useState`.

**Component structure:**

- `App.jsx` — holds `transactions` state and seed data; passes it down to children
- `Summary.jsx` — receives `transactions`, computes `totalIncome`/`totalExpenses`/`balance` internally
- `TransactionForm.jsx` — owns its own form state; calls `onAdd(transaction)` prop on submit
- `TransactionList.jsx` — owns filter state (`filterType`, `filterCategory`); receives `transactions` and renders the filtered table

**Known issue (intentional, part of the course):**
- "Freelance Work" is seeded as `type: "expense"` but `category: "salary"` — inconsistent data
