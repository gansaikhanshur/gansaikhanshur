# Project Guide

## Documentation Maintenance

`AGENTS.md` and `CLAUDE.md` are the repository's canonical instructions for AI
assistants and must remain byte-for-byte identical.

Before completing any repository change, review and update both files so they
accurately describe the current project. This includes changes to scope,
routes, files, dependencies, commands, conventions, architecture, deployment,
or implementation status. Never update only one of the two files, and never
leave documentation synchronization for a later change.

## Purpose

This repository is a personal website. It will introduce the site owner and
present their professional work and personal interests in one place.

Planned content includes:

- an About section with a short biography and contact or social links;
- a Resume section with experience, education, skills, and an optional
  downloadable resume;
- a Hobbies section;
- a Projects section with selected work, descriptions, links, and technologies;
- a Favorites section for categories such as movies, shows, games, books,
  music, and other interests.

The repository is currently an initial scaffold. Do not treat the blank page as
a finished design, and do not invent biographical details or personal content.

## Technology

- Next.js with the App Router
- React and TypeScript
- npm for dependency management
- ESLint for static analysis
- Vercel for preview and production deployments

Prefer built-in Next.js and browser capabilities before adding dependencies.
Do not add a database, CMS, authentication, analytics, or third-party service
unless a concrete requirement calls for it.

## Planned Routes

| Route | Purpose |
| --- | --- |
| `/` | Home and About |
| `/resume` | Experience, education, skills, and resume download |
| `/hobbies` | Hobbies and personal interests |
| `/projects` | Selected projects and project links |
| `/favorites` | Favorite movies, shows, games, books, music, and similar lists |

Route directories are reserved in `src/app`. Add a `page.tsx` only when that
section is implemented.

## Repository Structure

```text
README.md           Public GitHub profile introduction
DEVELOPMENT.md      Local setup, commands, and deployment notes
public/              Static assets and, later, a downloadable resume
src/
  app/               App Router layouts, pages, metadata, and global styles
    favorites/       Reserved for the Favorites page
    hobbies/         Reserved for the Hobbies page
    projects/        Reserved for the Projects page
    resume/          Reserved for the Resume page
  components/        Reusable UI components
  content/           Typed, local content or content-loading modules
```

Keep section-specific components close to their route. Move a component into
`src/components` only when it is reused or is part of the shared site shell.
Keep content separate from presentation so personal details can be updated
without restructuring page components.

## Implementation Rules

- Use TypeScript in strict mode. Avoid `any`; model content with explicit types.
- Default to React Server Components. Add `"use client"` only for components
  that require browser APIs, state, or event handlers.
- Use semantic HTML, visible keyboard focus, meaningful alternative text, and
  sufficient color contrast. All core navigation must work without a mouse.
- Build responsive layouts mobile-first and avoid fixed dimensions that cause
  horizontal scrolling.
- Use `next/link` for internal navigation and `next/image` for content images
  when its optimization is appropriate.
- Keep metadata accurate for every public route. Never leave starter text such
  as "Create Next App" in titles or descriptions.
- Do not commit secrets or private contact data. Store local secrets in
  `.env.local`; document any required public variable names in `.env.example`.
- Do not fabricate resume entries, project claims, links, favorites, or other
  personal facts. Use clearly marked placeholders only when explicitly asked.
- Avoid premature abstractions and dependencies. Prefer small components with
  clear ownership over a broad design system during the first implementation.

## Quality Checks

Before considering a change complete, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Also verify changed pages at narrow and wide viewport sizes when UI exists.
Keep `README.md` concise and appropriate for the public GitHub profile. Update
`DEVELOPMENT.md` when the route map, tooling, deployment model, setup steps, or
content source changes.

## Vercel

The project should remain compatible with Vercel's standard Next.js build. Do
not add `vercel.json` unless non-default routing, headers, redirects, cron jobs,
or other platform configuration is actually needed. Treat preview deployments
as review environments and the production branch as the public site.
