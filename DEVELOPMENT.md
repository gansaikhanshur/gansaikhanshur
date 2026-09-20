# Personal Website Development

A Next.js App Router personal website for Gansaikhan Shur. The site uses React,
strict TypeScript, plain CSS, and native browser animations. No animation package,
CMS, database, or external runtime service is required.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build     # Production build
npm run start     # Serve the production build
```

## Pages

Navigation order: Home → Resume → Personal Projects → Rankings → Contact.

| Route | Content |
| --- | --- |
| `/` | Typography-only hero, greeting scramble on entry/refresh/hover, and section links |
| `/resume` | Embedded original PDF and PDF/DOCX download dropdown |
| `/projects` | Neural Edge AI, Planorama, and Forklore |
| `/rankings` | Seven categories with three ranked slots and pixel transitions |
| `/contact` | GitHub/LinkedIn links and a copy-to-clipboard email button |

`/hobbies` and `/favorites` are reserved directories, not implemented routes.

## Updating Content

Edit `src/content/site.ts` for profile links, project copy, and rankings.
Category order is Books, Video Games, Movies, TV Shows, Anime, Animated Films,
and Animated Shows. Each ranking category has a typed tuple of three picks.
All supplied rankings are populated, including Why We Sleep as the third book.
Null entries show “Still deciding.” Each pick has a title, optional note, and an
`artwork` array containing `{ src, alt, sourceUrl }` for each image. Notes should
be supplied by the owner or factual labels, not invented opinions.

Each category has a `notesPrompt` defining its popup link label and placeholder
sections. A pick’s optional `notesLabel` overrides its category’s label; each
anime has its own label. Video Games supports clicking “Press X to Expand” or
pressing X while its selection is settled. Typing, modifier shortcuts, repeated
keys, and open dialogs do not trigger the shortcut. To replace the placeholder for one item, add
`notes: [{ heading: "Your heading", body: "Your text" }]` to that pick. The
notes popup supports a close button, Escape, backdrop dismissal, contained
keyboard focus, and returning focus to its trigger. Do not invent quotes or
personal opinions.

Cover/poster images are stored in `public/images/rankings/`, served through
`next/image`, and displayed without cropping. Source links and original image
URLs are recorded in `sources.json` alongside the assets. The Last of Us Parts
I & II and Arcane Seasons 1 & 2 each share an entry with two covers. JoJo artwork
is Stardust Crusaders. Movies are Perfect Days, Joker (2019), and Interstellar.
Animated Films are Your Name, Coraline, and Kiki’s Delivery Service; Animated
Shows ends with Love, Death & Robots. Orb: On the Movements of the Earth is the
third anime pick. Zen uses the owner-selected ThriftBooks cover, and Breaking
Bad uses the supplied eBay poster. Source records remain in the repository;
visitor-facing artwork source links are replaced by the personal-notes popups. The pixel curtain waits for
the new image to decode before revealing it. Curtain tiles use three CSS color
variables inherited from the displayed category, matching the panel palette.
Changing categories blends these shades at the content swap; changing ranks
within a category keeps its palette. Reduced motion disables the transition.

Neural Edge AI’s project-card background is the owner-supplied brand image,
optimized at `public/images/projects/neural-edge.webp` and displayed without
cropping its embedded text.

The contact details are supplied by the owner. The email row copies the address
with the browser Clipboard API instead of opening a mail app. Its copy icon
changes to a checkmark with “Email copied!” for 2.5 seconds after success;
failure displays a message and leaves the address available for manual copying. Planorama has no active repository
link yet; add its URL after it is published. Forklore is still in development.

### Resume

The owner’s original files are included at:

- `public/resume/resume.pdf` — original document displayed in the viewer
- `public/resume/resume.docx` — Word download

The resume page offers only formats present on disk. Without either file the
page shows an empty state and a disabled download button. With DOCX only it offers
the download and explains that a PDF preview is not yet available. With PDF it
embeds the original and provides an “Open PDF” link for browsers that cannot
render embedded PDFs. Rebuild and redeploy after adding or replacing files.

The Download label changes to Downloaded after fetching the file and handing it
to the browser. This confirms initiation, not that the visitor completed saving.
Failed fetches show a retry message. Both files are byte-for-byte copies of the
owner’s originals; the PDF is a one-page document.

## Design and Accessibility

The design uses charcoal backgrounds, blue accents, DM Sans, and Space Grotesk.
The home hero is typography-only: a large, responsive two-line greeting, short
introduction, and project/resume links. The former pixel graphic and its labels
have been removed; category-colored pixel transitions remain in Rankings.
Fonts and their SIL Open Font Licenses are stored in `public/fonts` and served
locally. The favicon is `src/app/icon.svg`; the header uses only the owner’s name.

Pages and content default to Server Components. Client components implement the
active navigation indicator, text scramble, ranking selection/pixel curtain, and
download dropdown. They use native browser animation APIs, with reduced-motion
support and keyboard focus states. Category tabs support arrow, Home, and End
keys; downloads support Tab, Enter, Escape, and outside-click dismissal.

Before completing changes, run all three checks above and review changed pages
at narrow and wide viewport sizes. Check fast ranking selections and reduced
motion when editing transitions. Keep `AGENTS.md` and `CLAUDE.md` byte-identical.

## Deployment

The site is deployed at [gansaikhanshur.vercel.app](https://gansaikhanshur.vercel.app)
in the Vercel project `gansaikhan-shurs-projects/gansaikhanshur`. The selected
hosting setup connects it to `gansaikhanshur/gansaikhanshur` on GitHub, with
`main` as the production branch and other branches used for previews.

The initial deployment was made through the CLI. The GitHub connection still
requires repository access in the Vercel GitHub app; automatic deployments are
not active until that connection succeeds. To deploy production manually from
`main`, run `vercel deploy --prod --yes` after the quality checks pass.

To connect through the dashboard, import the repository at
[vercel.com/new](https://vercel.com/new), select the Next.js framework preset,
use the repository root, and keep the default build/output settings. No
environment variables or `vercel.json` are needed.

Alternatively, from an authenticated Vercel CLI:

```bash
vercel login
vercel link
vercel git connect https://github.com/gansaikhanshur/gansaikhanshur.git
vercel --target=preview # Explicit preview of the current branch
```

The Vercel GitHub integration may require installing/authorizing the Vercel
GitHub app for this repository. Once connected, pushes create deployments and
merges to `main` update production. Verify the preview before merging the PR.
The local `.vercel/` directory is ignored and must not be committed.

GitHub Pages is an alternative static host, but this app currently uses the
standard Next.js build and image optimization. Pages would require a static
export, compatible image handling, and asset/base-path adjustments; it is not
the configured deployment target.
