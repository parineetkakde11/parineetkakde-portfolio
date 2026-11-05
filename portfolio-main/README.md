# Parineet Kakde — Portfolio (React + Vite)

React conversion of the Retro Arcade / Neo-Brutalist design in `design-reference/code.html`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
npm run lint
```

## Routes

| Route           | Content                                                            |
| --------------- | ------------------------------------------------------------------ |
| `/`             | Hero, Player Profile (About), stage-select links                   |
| `/projects`     | Featured AI Voice Sales system, project cards, Technical Arsenal   |
| `/achievements` | Trophy Room, status, certificates (auto), contact + form           |
| anything else   | 404 "Game Over" page                                               |

## Where to edit content

- `src/data/socialLinks.js`: email, GitHub, LinkedIn
- `src/data/profile.js`: hero chips, bio, stat sheet
- `src/data/projects.js`: projects (set `repoUrl` per project when repos are public)
- `src/data/skills.js`: skills
- `src/data/achievements.js`: trophies, plus a GSSoC template (add only once verified)
- `src/assets/resume/`: drop your resume PDF here (auto-detected)
- `src/assets/certificates/`: drop certificate images/PDFs here (auto-detected)

## Contact form delivery

The form calls `sendContactMessage()` in `src/services/contactService.js`.
Pick the provider with env vars (see `.env.example`):

- **mailto** (default): opens the visitor's email app with name, email and message pre-filled.
- **Formspree**: create a form at formspree.io, then set
  `VITE_CONTACT_PROVIDER=formspree` and `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/<id>`.
- **Your FastAPI backend**: set `VITE_CONTACT_PROVIDER=api` and `VITE_CONTACT_API_URL=https://api.example.com/contact`.
  The site POSTs JSON `{ "name", "email", "message" }`. Enable CORS for your site's domain and keep SMTP or API secrets on the server.
- **EmailJS**: add `@emailjs/browser` and call `emailjs.send(...)` inside `sendContactMessage`. EmailJS keys are public keys, but restrict the allowed domains in their dashboard.

Never put secret keys in `VITE_*` variables, because they are bundled into the browser.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com, choose **Add New → Project** and import the repo. The Vite preset is detected automatically (`vercel.json` is included).
3. (Optional) Set `VITE_SITE_URL` (e.g. your custom domain) and the contact env vars under **Settings → Environment Variables**.
4. Deploy. `vercel.json` rewrites all routes to `index.html`, so `/projects` and `/achievements` work on refresh.

`robots.txt` and `sitemap.xml` are generated at build time. The sitemap uses `VITE_SITE_URL`, or Vercel's production URL if that is not set.
