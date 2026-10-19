# Minimal Editorial Developer Portfolio

A dark, minimalist, editorial developer portfolio built for a second-year B.Tech Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning.

Inspired by cinematic editorial design: deep forest-green surfaces (`#101713`, `#151D18`), near-black background (`#080B09`), subtle ambient purple/indigo lighting (`#8270C9`), refined typography, and restrained interactive effects.

---

## ✦ Features

- **Interactive Dark Wavy Structure** (`WavyBackground.jsx`): Real-time 60fps HTML5 Canvas background with multi-frequency sinusoidal bezier waves that displace, tilt, and undulate dynamically following your mouse cursor movement.
- **Interactive Middle-Left Photocard**: Prominently positioned on the middle-left of the Hero section, equipped with Framer Motion spring physics (`whileHover={{ y: -8, scale: 1.03 }}`) and an electric blue luminous frame that glows intensely on cursor hover. Ready for photo attachment via `avatarUrl` in `src/data/portfolio.js` (with a stylized dark tech monogram fallback if left unattached).
- **Elevated & Zoomed Framer Motion Cards with Blue Glowing Frames**:
  - Skills capability cards, Project showcases, Education degree & pillar cards, and Contact cards all feature smooth spring elevation (`whileHover={{ y: -8, scale: 1.02 }}`) and electric blue frame glows (`hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]`).
- **Single-Page Editorial Flow**:
  1. **Navigation**: Monogram logo with blue hover luminescence, refined typography, section tracking, discreet contact action, and mobile drawer.
  2. **Hero Section**: Middle-left interactive photocard, headline *"Curious by nature. Building with purpose."*, dual CTAs with hover zoom, live status indicator, and scroll hint.
  3. **About Me**: Dual-column narrative on web technologies, databases, APIs, and AI/ML paired with an elevated Academic Profile spec card.
  4. **Technical Skills & Creative Thinking**: 4 structured groups with blue glowing frame hover transitions without fake progress bars.
  5. **Featured Projects**:
     - *Nexus ERP* (Student Management System) with a rich custom CSS dashboard mockup.
     - *Weather Application* with real-time UI preview and meteorological metrics.
     - *AI Explorations* (In Development) with an abstract neural network topology preview.
  6. **Academic Foundations**: B.Tech CSE (AI & ML) second-year coursework pillars with interactive elevated cards.
  7. **Learning Journey**: Authentic chronological milestone timeline with hover elevation.
  8. **Contact**: Direct email (with copy-to-clipboard feedback), GitHub, and LinkedIn profile links with electric blue glowing frames.
  9. **Footer**: Tagline, social links, dynamic year, and smooth back-to-top button.
- **Centralized Configuration**: All personal info, avatar, skills, projects, and links live in `src/data/portfolio.js`.
- **Zero Runtime Dependencies**: No backend, no database, no API keys, no paid assets.
- **Production Ready**: Fully responsive, accessible, respects `prefers-reduced-motion`, and passes `oxlint` with 0 warnings / 0 errors.

---

## ✦ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build is emitted to `dist/`.

---

## ✦ How to Customize Your Personal Details & Attach Your Photo

All your personal details, photo, and links are configured in:
📁 `src/data/portfolio.js`

| Field | Current Placeholder | Description |
| :--- | :--- | :--- |
| `avatarUrl` | `""` | **Attach your photo**: Place an image (e.g. `profile.jpg`) in the `public/` directory and set `avatarUrl: "/profile.jpg"`, or use any image URL |
| `name` | `"[YOUR FULL NAME]"` | Your full display name |
| `initials` | `"YN"` | 2-letter monogram in Navbar and Photocard fallback |
| `institution` | `"[Your University / College Name]"` | Your college or university name |
| `academicYear`| `"Second Year (2024 – 2028)"` | Your batch / expected graduation |
| `email` | `"your.email@example.com"` | Your contact email (triggers mailto and copy) |
| `github` | `"https://github.com/[your-username]"` | Your GitHub profile link |
| `linkedin` | `"https://linkedin.com/in/[your-username]"` | Your LinkedIn profile link |
| Project Links | `github: ""`, `live: ""` | Source and demo links for projects (displays placeholder if empty) |

---

## ✦ Deployment to Vercel

This portfolio is fully configured for zero-configuration deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.
