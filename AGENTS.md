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

Implemented sections include:

- Home with a typography-only hero and an oversized two-line greeting that scrambles on entry, refresh, and hover;
- Resume with an embedded PDF viewer and PDF/DOCX download menu;
- Personal Projects featuring Neural Edge AI and AI skills/tools (Planorama and Forklore);
- Rankings with seven categories, three picks each, and pixel curtain transitions;
- Contact with the owner's supplied GitHub/LinkedIn links and a copyable public email.

The first visual implementation is complete. Rankings contain the owner’s supplied
picks and locally stored artwork, including Why We Sleep as the third book. Each populated
pick has a category-specific notes dialog with clearly marked placeholder text. The original PDF
and DOCX resume files are supplied, with the PDF embedded and both downloadable.
Planorama's repository link remains unpublished; Forklore is labeled in development.
Do not invent personal content, project capabilities, or resume details.

## Technology

- Next.js with the App Router
- React and TypeScript
- npm for dependency management
- ESLint for static analysis
- Vercel for preview and production deployments

Prefer built-in Next.js and browser capabilities before adding dependencies.
Do not add a database, CMS, authentication, analytics, or third-party service
unless a concrete requirement calls for it.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home and introduction |
| `/resume` | Original PDF viewer and available PDF/DOCX downloads |
| `/projects` | Neural Edge AI and AI skills/tools |
| `/rankings` | Books, Video Games, Movies, TV Shows, Anime, Animated Films, and Animated Shows |
| `/contact` | GitHub, LinkedIn, and email |

Navigation order is Home → Resume → Personal Projects → Rankings → Contact.
The reserved `hobbies` and `favorites` directories have no pages and are not
public routes; personal interests are currently represented by Rankings.

## Repository Structure

```text
README.md            Public GitHub profile introduction
DEVELOPMENT.md       Local setup, content updates, checks, and deployment
public/
  fonts/             Self-hosted DM Sans and Space Grotesk, with OFL licenses
  resume/            Original resume.pdf and resume.docx supplied by the owner
  images/rankings/   Optimized covers/posters and source records
  images/projects/   Owner-supplied Neural Edge AI background artwork
src/
  app/               Shared layout, global styles, home, and favicon
    contact/         Contact page and client-side email copy control
    projects/        Projects page
    rankings/        Rankings page and client-side selection/transition logic
    resume/          Resume page and client-side download control
    favorites/       Reserved; no public route
    hobbies/         Reserved; no public route
  components/        Shared navigation and scramble text
  content/site.ts    Typed profile, navigation, projects, and rankings
```

Keep section-specific components close to their route. Move a component into
`src/components` only when it is reused or is part of the shared site shell.
Keep content separate from presentation so personal details can be updated
without restructuring page components.

## Content and Animation

- Update personal content in `src/content/site.ts`. A null ranking pick renders a
  “Still deciding” state. Each category has exactly three ordered slots.
  Supplied picks have a title, optional factual note, and local artwork with alt
  text and source metadata. Do not invent personal reasons for rankings.
- Each category defines a `notesPrompt` with a link label and placeholder sections.
  Books uses “Review” as its notes button label.
  Add `notes: [{ heading, body }]` to an individual pick to supply its real notes.
  Optional `notesLabel` overrides the category button label (used for each anime).
  Video Games uses “Press X to Expand” and accepts X while the displayed selection
  is settled. The shortcut ignores typing, modifiers, repeats, and open dialogs.
  Dialogs use native `<dialog>` for focus containment, Escape dismissal, and focus
  return; a close button and backdrop click also dismiss them. Artwork-source
  links are hidden from the UI; source records remain in the repository.
- The Last of Us Parts I & II and Arcane Seasons 1 & 2 each share one ranked slot
  with two covers. JoJo uses Stardust Crusaders/Jotaro artwork. Anime’s third pick
  is Orb: On the Movements of the Earth. Movies are Perfect Days, Joker (2019),
  and Interstellar; Animated Films are Your Name, Coraline, and Kiki’s Delivery
  Service. Animated Shows ends with Love, Death & Robots. Zen and Breaking Bad
  use owner-selected artwork.
- Neural Edge AI uses the owner-supplied brand image as its project-card background,
  fitted without cropping so its embedded wordmark and tagline remain visible.
- Ranking artwork uses `next/image`, preserves poster proportions, and reveals
  beneath the pixel curtain after image decoding. Sources are recorded in
  `public/images/rankings/sources.json`. Keep attribution when replacing assets.
- Add the original resume to `public/resume/resume.pdf` and optionally
  `public/resume/resume.docx`. File availability is detected during rendering;
  rebuild/redeploy after changing files for production. DOCX is downloadable;
  only PDF is embedded. No document conversion service is used.
- Download success means the file was fetched and handed to the browser; browsers
  do not expose whether the user finished saving it. Failed requests show a retry
  message. Unavailable files are not offered.
- The header displays the owner’s name without a monogram. The home hero uses
  typography only: the pixel graphic, experiment labels, and caption are removed.
  The greeting occupies the full hero width with responsive type and spacing;
  its scramble is the home page’s main animation.
- The Contact email row is a button that copies the address using the Clipboard
  API, with a copy icon, a temporary success message/checkmark, and an error
  message if copying fails. It never launches a mail app.
- Main navigation uses real Next.js links and a sliding active indicator. Routes
  render on the server; browser interactions use small client components.
- Animations use CSS, requestAnimationFrame, and the Web Animations API. No Motion
  dependency or paid example source is used. Respect reduced-motion preferences.
- The greeting scramble reserves the original text dimensions to avoid layout shifts.
  The former welcome/scroll strip is removed; project artwork uses two offset name cards.
- Ranking categories follow the route-table order above and use category IDs for colors.
  Pixel curtains inherit three matching shades from the displayed category: green
  for Books, blue for Video Games, plum for Movies, teal for TV Shows, violet for
  Anime, gold for Animated Films, and terracotta for Animated Shows. Category
  changes blend the curtain palette as the covered content changes.
- Rankings support arrow/Home/End keyboard navigation and cancel stale animation
  work during rapid selection or unmount.
- Fonts are served locally with their licenses; no remote font runtime is needed.

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
as review environments and `main` as the production branch for the public site.
The selected hosting model connects Vercel to the GitHub repository
`gansaikhanshur/gansaikhanshur` for automatic deployments. Setup instructions
are in `DEVELOPMENT.md`; keep local `.vercel/` configuration out of Git.
GitHub Pages is not configured.
