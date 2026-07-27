# Portfolio guide — how everything works

This document explains the React portfolio end to end: GitHub projects, contact form, environment variables, and deployment (Vercel + GitHub Pages).

---

## 1. Project structure (mental map)

```
portfolio-react/
├── src/
│   ├── App.jsx                 # Page shell: Navbar → sections → Footer
│   ├── config/site.js          # Email, GitHub username, Formspree id (from .env)
│   ├── services/github.js      # Calls GitHub public API
│   ├── hooks/                  # useGitHubProjects, useGitHubProfile
│   ├── data/                   # Skills, education, projectEnhancements
│   └── components/             # Hero, About, Skills, Projects, etc.
├── public/resume.pdf           # You add this — Hero “Download Resume”
├── .env                        # Your secrets (not committed)
├── .env.example                # Template to copy
├── vercel.json                 # SPA routing on Vercel
└── .github/workflows/          # Auto-deploy to GitHub Pages
```

**Flow when someone opens your site**

1. React loads `App.jsx` and renders all sections on one page.
2. **Projects** calls GitHub’s API for `@Sishir101` and builds cards from your public repos.
3. **About** loads your GitHub profile to show a real **public repo count**.
4. **Contact** posts to Formspree (if configured) or falls back to opening the user’s email app.

---

## 2. GitHub projects (live data)

### What we did

- `src/services/github.js` requests:
  - `GET https://api.github.com/users/Sishir101/repos` — list of repositories
  - Maps each repo to title, description, GitHub link, live demo (`homepage`), stars, tags
- `src/hooks/useGitHubProjects.js` runs that on page load and merges:
  - **GitHub repos** (automatic)
  - **supplementalProjects** in `src/data/projectEnhancements.js` (manual — for private or WIP work)

### Your GitHub today

Public repo found: **[sishir-portfolio](https://github.com/Sishir101/sishir-portfolio)**  
Live demo field on GitHub: **https://sishir-portfolio.vercel.app**

When you push more public repos, they **appear automatically** — no code change required.

### Customize a repo card

Edit `src/data/projectEnhancements.js`:

```js
export const projectEnhancements = {
  "your-repo-name": {
    title: "Nice display title",
    description: "Longer blurb for recruiters.",
    tags: ["React", "Node.js"],
    demo: "https://your-demo.vercel.app",
    gradient: "from-cyan-500/40 to-blue-600/40",
  },
};
```

The key must match the **GitHub repository name** exactly.

### Add projects not on GitHub yet

Use `supplementalProjects` in the same file. Set `github: null` until the repo is public, then add the URL.

### Rate limits

GitHub allows **60 requests/hour per IP** for unauthenticated API use. That is plenty for a portfolio. If you ever need more, you can add a serverless proxy with a token later.

---

## 3. Contact form (Formspree)

### Why Formspree?

Browsers cannot send email by themselves. Formspree is a small backend that:

1. Receives `POST` from your form
2. Emails you (and optionally stores submissions)

No Node server required on your side.

### Setup (one time, ~5 minutes)

1. Go to [https://formspree.io](https://formspree.io) and sign up (free tier is enough to start).
2. **New form** → set notification email to `sanbadsishirranjan772@gmail.com`.
3. Copy the form id from the endpoint `https://formspree.io/f/xyzabc` → id is `xyzabc`.
4. In the project root, create `.env`:

   ```env
   VITE_FORMSPREE_FORM_ID=xyzabc
   VITE_GITHUB_USERNAME=Sishir101
   VITE_BASE_PATH=/
   ```

5. Restart dev server: `npm run dev`.

### How the code works

- `src/config/site.js` reads `import.meta.env.VITE_FORMSPREE_FORM_ID` (Vite injects env at **build time**).
- `Contact.jsx` sends JSON to `https://formspree.io/f/{id}`.
- If the id is missing, submit uses **mailto** fallback so the site still works locally.

### Production env vars

| Platform       | Where to set |
|----------------|--------------|
| **Vercel**     | Project → Settings → Environment Variables |
| **GitHub Pages** | Repo → Settings → Secrets → `VITE_FORMSPREE_FORM_ID` (used in Actions workflow) |

After changing env on Vercel, ** redeploy** (Deployments → Redeploy).

---

## 4. Environment variables (Vite rules)

Only variables prefixed with `VITE_` are exposed to the browser.

| Variable | Purpose |
|----------|---------|
| `VITE_GITHUB_USERNAME` | Whose repos to show (default: Sishir101) |
| `VITE_FORMSPREE_FORM_ID` | Contact form backend |
| `VITE_BASE_PATH` | Asset paths — `/` for Vercel, `/sishir-portfolio/` for GitHub project Pages |

Copy `.env.example` → `.env` and fill in values. **Never commit `.env`.**

---

## 5. Deployment

You already have **https://sishir-portfolio.vercel.app** (older HTML site). This React app can replace it on the same Vercel project once you push this code to GitHub and connect the repo.

### Option A — Vercel (recommended)

**Why:** Zero config for Vite, custom domain, env vars in UI, `base: /`.

1. Push this folder to GitHub (see section 6).
2. [vercel.com](https://vercel.com) → **Add New Project** → import `Sishir101/sishir-portfolio` (or a new repo).
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
4. Environment variables:
   - `VITE_GITHUB_USERNAME` = `Sishir101`
   - `VITE_FORMSPREE_FORM_ID` = your Formspree id
   - `VITE_BASE_PATH` = `/` (or leave unset)
5. Deploy. Update GitHub repo **About → Website** to the new Vercel URL if it changed.

`vercel.json` rewrites all routes to `index.html` so refresh on deep links works (single-page app).

### Option B — GitHub Pages

**Why:** Free hosting on `https://sishir101.github.io/sishir-portfolio/`.

Already added: `.github/workflows/deploy-pages.yml`

1. Push code to GitHub on branch **`main`**.
2. Repo **Settings → Pages → Build and deployment**:
   - Source: **GitHub Actions** (not “Deploy from branch”).
3. Optional: **Settings → Secrets → Actions** → `VITE_FORMSPREE_FORM_ID`.
4. Every push to `main` runs `npm ci`, builds with `VITE_BASE_PATH=/sishir-portfolio/`, publishes `dist`.

GitHub Pages needs the subpath base path so JS/CSS load correctly — handled in `vite.config.js`.

You can use **both** Vercel (primary) and GitHub Pages (backup) if you want.

---

## 6. Push this code to GitHub (first time)

This folder is not a git repo yet. From `portfolio-react`:

```powershell
git init
git add .
git commit -m "React portfolio with GitHub projects, Formspree, deploy configs"
git branch -M main
git remote add origin https://github.com/Sishir101/sishir-portfolio.git
git pull origin main --allow-unrelated-histories
# resolve conflicts if any, then:
git push -u origin main
```

If you prefer a **new** repo (e.g. `portfolio-react`), create it on GitHub first and use that URL as `origin`. Update `VITE_BASE_PATH` in the Pages workflow to `/portfolio-react/` if you use Pages on a project site.

---

## 7. Resume download

Place your PDF at:

`public/resume.pdf`

Vite copies `public/` to the site root, so the Hero link `/resume.pdf` works everywhere.

---

## 8. Local development

```powershell
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```powershell
npm run build    # production build → dist/
npm run preview  # serve dist locally
```

---

## 9. Quick checklist before sharing with recruiters

- [ ] `.env` with Formspree id; test contact form on deployed site
- [ ] `public/resume.pdf` added
- [ ] `projectEnhancements` / `supplementalProjects` updated with real projects
- [ ] Education text in `src/data/education.js` accurate
- [ ] GitHub repos public (or listed in supplemental)
- [ ] Vercel or GitHub Pages live URL in LinkedIn / resume

---

## 10. Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank page on GitHub Pages | Set `VITE_BASE_PATH=/repo-name/` in workflow; enable Pages → GitHub Actions |
| Projects empty | Repos must be **public**; check browser Network tab for GitHub API |
| Form never arrives | Confirm Formspree id; check spam; verify env var on host and redeploy |
| Old site on Vercel | Redeploy after push; confirm correct GitHub repo connected |

If you want help wiring a custom domain (e.g. `sishirsanbad.dev`) on Vercel, say the domain and registrar and we can step through DNS.
