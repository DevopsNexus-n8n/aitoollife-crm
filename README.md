# aitoollife CRM

A CRM for clinics and wellness businesses.

**Status:** starter app. All screens use sample data from `src/lib/sample-data.ts`.
Nothing is saved, and there is no WhatsApp, AI, or database connection yet.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The root URL redirects to `/dashboard`.

## Checks

```bash
npm run lint
npm run build
```

## Screens

| Route | Purpose |
| --- | --- |
| `/dashboard` | Today's schedule, follow-ups to do now, new leads this week |
| `/leads` | Lead list with status filter |
| `/customers` | Customer list with visits and spend |
| `/appointments` | Today's appointments and what is coming up |
| `/follow-ups` | Overdue, due today, and upcoming follow-ups |
| `/settings` | Clinic details, team, connections |

## Project layout

```
src/
  app/            Routes (one folder per screen) and the shared layout
  components/     Sidebar, top bar, tables, badges
  lib/            Sample data and small helpers
```

## Not built yet

WhatsApp integration, AI features, database, authentication, deployment.
