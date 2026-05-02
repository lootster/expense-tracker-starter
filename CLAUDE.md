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

This is a single-file React app (`src/App.jsx`) with no routing, no state management library, and no backend — all state is in-memory via `useState`. There are no separate component files yet.

**Known issues (intentional, part of the course):**
- `amount` is stored as a string in transaction state, causing string concatenation instead of numeric addition in `totalIncome`/`totalExpenses` calculations
- "Freelance Work" is seeded as `type: "expense"` but `category: "salary"` — inconsistent data
- UI styling is minimal and unpolished
