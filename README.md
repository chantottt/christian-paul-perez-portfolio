# Christian Paul Perez — Software Testing Portfolio

A responsive editorial portfolio built with React, strict TypeScript, Vite, Tailwind CSS v4, Motion for React, and Lucide icons. The warm light theme is the default; either theme is saved on the visitor's device.

## Run locally

Use Node.js 22.12+ (or a supported newer LTS release) and npm.

```sh
npm ci
npm run dev
```

Open the Local URL Vite prints. The current preview uses http://127.0.0.1:5173/.

## Production and checks

```sh
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. The site requires no backend, database, API keys, or runtime environment variables.

Browser tests cover navigation, category filters, skill filters, theme persistence, reduced motion, mobile navigation, dialog focus trapping / Escape / focus restoration, screenshot gallery navigation, contribution accuracy, and overflow at 320, 375, 768, 1024, 1440, and 1920 pixels.

```sh
npx playwright install chromium
npm test
```

Tests create an HTML report in `playwright-report/` and screenshots in `test-results/`. These outputs are ignored by Git.

## Architecture

- `src/data/portfolio.ts`: centralized personal information, links, skills, and typed project content.
- `src/types/portfolio.ts`: project, category, and skill types.
- `src/components/layout/`: sticky desktop / mobile navigation and footer.
- `src/components/sections/`: hero, about, skills, projects, project experience, and contact.
- `src/components/projects/`: case-study layouts, screenshot previews, and an accessible native dialog with image viewer.
- `src/components/ui/`: section heading, reveal animations, and theme toggle.
- `src/hooks/`: theme persistence, active-section tracking, and verification of resume assets.
- `src/styles/index.css`: Tailwind v4 import, theme tokens, and responsive component styles.
- `tests/`: Playwright interaction and responsive checks.

Tailwind uses the official v4 Vite integration: `@tailwindcss/vite` in `vite.config.ts` and `@import "tailwindcss"` in the stylesheet.

Project details use the native HTML `dialog` element: background content is inert, keyboard focus stays inside, Escape dismisses it, and focus returns to the opening button. Screenshot thumbnails change the main image; a full-screen viewer supports arrow keys and Escape. Motion and CSS respect `prefers-reduced-motion`.

## Update your information

Edit `src/data/portfolio.ts`. Empty fields deliberately prevent missing information from appearing as fake links.

Your supplied portrait, GitHub profile, email address, phone number, project screenshots, and resume are configured. Update them here when they change. The introduction presents Christian as an aspiring software test engineer, while each project keeps its actual academic role and contribution scope.

Optional additions:

- Resume updates: the supplied resume is available at `public/resume.pdf` and its download button is enabled. Replace this file when your resume changes. The button appears only after the file is verified; HTML fallback responses are rejected.
- Portrait updates: replace `public/profile/christian-paul-perez.jpg` with a new photo and keep `profileImagePath` current.
- Verified project repository / public demo URLs: add `githubUrl` and `liveUrl` to a project's data object. Localhost links are not public demos.
- Real project screenshots: store them in `public/projects/` and add `{ src: '/projects/file.webp', alt: 'Meaningful description' }` entries to `screenshots`. MantunTamu is the featured QA case study and includes three screenshots. PeakPickle includes six; FindIT includes three; Ma! Ano Ulam? includes four mobile screenshots shown as complete phone screens. The case-study gallery has thumbnails and a full-screen viewer with an original-image link. Projects without screenshots use fallback artwork.
- An accurate availability statement, if desired.

MantunTamu and Ma! Ano Ulam? list the overall project technologies separately from Christian's QA contributions. FindIT does not attribute its PHP backend or API implementation to Christian. All experience is presented as academic project experience.

## Deploy to GitHub Pages

Live site: **https://chantottt.github.io/christian-paul-perez-portfolio/**

Repository: **https://github.com/chantottt/christian-paul-perez-portfolio**

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. GitHub Pages is configured to use GitHub Actions. Vite's base path and all local image, favicon, and resume URLs are set for this repository path during the Pages build.

To publish future changes from this folder:

```sh
git add .
git commit -m "Update portfolio"
git push
```

No runtime environment variables or backend are needed. The `GITHUB_PAGES=true` variable is set by the workflow only while building. If the repository is renamed, update the base path in `vite.config.ts`, this section, and the URL above. Navigation uses URL fragments, so no SPA rewrite is needed. `vercel.json` remains available for a separate Vercel deployment.
