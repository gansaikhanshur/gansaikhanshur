# Personal Website

The initial scaffold for a personal website containing an introduction, resume,
hobbies, projects, and favorites such as movies, shows, and games.

The repository intentionally contains only the project foundation. The visual
design and personal content have not been implemented yet.

## Stack

- Next.js (App Router)
- React
- TypeScript
- ESLint
- Vercel for hosting

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

```bash
npm run dev        # Run the local development server
npm run lint       # Check code quality
npm run typecheck  # Check TypeScript types
npm run build      # Create a production build
npm run start      # Serve the production build
```

## Planned Sections

- Home / About
- Resume
- Hobbies
- Projects
- Favorites

Project conventions and implementation guidance are documented in
[`AGENTS.md`](./AGENTS.md).

## Deployment

Import the Git repository into Vercel. Vercel detects Next.js automatically, so
the default build settings are sufficient unless the project later gains
environment variables or other infrastructure requirements.
