# NeighborNurture — Community Garden Website

A single-page marketing site for the NeighborNurture community garden: events, news, membership steps, benefits, testimonials, and a sign-up form.

Originally designed in [TeleportHQ](https://teleporthq.io) and migrated to a modern **Vite + React 18** stack.

## Tech stack

- [Vite 5](https://vitejs.dev/) — dev server and build tool
- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/) — routing (`/` and a 404 catch-all)
- Plain CSS with design tokens (CSS custom properties), Google Fonts (Lora + Playfair Display)

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
community-garden/
├── index.html              # Vite entry HTML (fonts, meta)
├── vite.config.js
├── public/
│   └── robots.txt
└── src/
    ├── main.jsx            # React 18 entry point
    ├── App.jsx             # Routes
    ├── style.css           # Reset + design tokens + all section styles
    ├── components/
    │   ├── Navigation.jsx  # Sticky header, mobile menu, hide-on-scroll
    │   └── Footer.jsx      # Links, newsletter form, scroll-reveal
    └── views/
        ├── Home.jsx        # Hero, events, news, join steps, benefits, voices, contact
        └── NotFound.jsx    # 404 page
```

## Migration notes (from the TeleportHQ export)

- **CRA + CRACO → Vite**, React 17 → 18, react-router v5 → v6, `react-helmet` removed (titles set via `document.title`).
- Injected `<script>` blocks (`dangerous-html`) converted to proper React hooks (`useEffect` + state) with cleanup: mobile menu, header hide-on-scroll, hero parallax, scroll-reveal animations, and form feedback.
- Broken `href="Homepage"` links fixed to real routes/anchors; `name="true"` form field fixed to `name="name"`.
- TeleportHQ branding badge, canonical URLs, `llms.txt`, and unused boilerplate CSS/deps (including a stray `next` dependency) removed.
- Unused font imports removed (only Lora and Playfair Display are used).
- Added `prefers-reduced-motion` support and a "back home" link on the 404 page.

## Known gaps / next steps

- **Forms are not wired to a backend.** The newsletter and membership forms show simulated success states. Point them at a real endpoint (e.g. [Formspree](https://formspree.io), Netlify Forms, or your own API) when ready.
- The "Pay & Join Securely" button is a placeholder — no payment integration exists yet.
- Social and legal links (`href="#"`) are placeholders.
- Images are hot-linked from Pexels; consider downloading them into `public/` for reliability.

## Deployment

The site is static after `npm run build`. Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages. For GitHub Pages under a sub-path, set `base` in `vite.config.js` accordingly.
