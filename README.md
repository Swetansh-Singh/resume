# Swetansh Singh — Minimalist Animated Resume

A fast, minimalist personal portfolio and interactive resume website built with **Astro 5**, **Tailwind CSS v4**, **GSAP**, and **Lenis**.

## ✨ Features

- **Minimalist Aesthetic:** Dark-only near-monochrome color system (`#080808`), hairline borders, film grain texture, and subtle ambient glow effects.
- **Micro-Interactions & Animations:**
  - GSAP character-staggered hero entrance
  - ScrollTrigger scroll-driven section reveals
  - Scrubbed timeline indicator for career & milestones
  - Mouse-following ambient glow and subtle 3D card perspective tilt
  - Magnetic pull on primary buttons
  - Smooth inertial momentum scrolling with Lenis (automatically disabled for users with `prefers-reduced-motion`)
- **Automated GitHub Integration:**
  - Build-time repo fetching from GitHub (`Swetansh-Singh`)
  - Offline fallback cache (`src/data/github-cache.json`) for bulletproof CI/CD builds
  - Dynamic language filter buttons
  - Custom highlight overrides in `src/data/projects.config.ts`
- **Zero Client Bloat:** Astro static generation produces clean HTML with zero unnecessary framework overhead.
- **PDF Resume Download:** Built-in downloadable resume button linked directly to `public/resume.pdf`.

## 📁 Directory Structure

```
resume/
├── public/
│   └── resume.pdf             # Downloadable resume file
├── src/
│   ├── components/            # Astro components
│   │   ├── Nav.astro          # Sticky navbar with status pill
│   │   ├── Hero.astro         # Typographic hero & interactive terminal
│   │   ├── About.astro        # Narrative bio & engineering pillars
│   │   ├── Experience.astro   # Timeline & academic background
│   │   ├── Projects.astro     # GitHub project showcase & filters
│   │   ├── ProjectCard.astro  # 3D interactive tilt cards
│   │   ├── Skills.astro       # Categorized skills & marquee ticker
│   │   ├── Contact.astro      # Email copy toast & social links
│   │   └── Footer.astro       # Minimalist footer
│   ├── data/
│   │   ├── resume.ts          # Single source of truth for bio, experience, skills
│   │   ├── projects.config.ts # GitHub project overrides & curation
│   │   └── github-cache.json  # Offline build cache
│   ├── layouts/
│   │   └── Base.astro         # HTML head, SEO, grain & scripts
│   ├── lib/
│   │   ├── github.ts          # GitHub REST client & normalization
│   │   └── languageColors.ts  # GitHub badge color palette
│   ├── scripts/
│   │   ├── animations.ts      # GSAP & ScrollTrigger controller
│   │   ├── smoothScroll.ts    # Lenis smooth scroll
│   │   └── cursor.ts          # Magnetic & glow handlers
│   └── styles/
│       └── global.css         # Tailwind v4, fonts, and dark tokens
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
npm run build
```
Static output will be placed in the `dist/` directory, ready to deploy.

## 📄 Updating Content from Your PDF
1. Replace `public/resume.pdf` with your actual resume PDF.
2. Update `src/data/resume.ts` with your specific dates, achievements, or contact details.
3. Repositories will automatically synchronize from `https://github.com/Swetansh-Singh` on every build.

