# Certificates

Drop certificate images (`.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`) or `.pdf` files here.

They appear automatically in the **Certificates** panel on the `/achievements` page.
The title shown is derived from the file name, so name files descriptively, e.g.
`inno-hack-2-0-winner.png` → "INNO HACK 2 0 WINNER".

To set a custom title / issuer / year, add an entry to `certificateDetails`
in `src/data/achievements.js` keyed by the file name.

While this folder has no certificates the panel is hidden in production and shows a
clearly-marked placeholder only in development (`npm run dev`).
