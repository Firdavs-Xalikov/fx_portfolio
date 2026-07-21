# ⚡ Firdavs Xalikov — Personal Portfolio

[![CI Status](https://github.com/Firdavs-Xalikov/fx_portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Firdavs-Xalikov/fx_portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite 8](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

Production-grade, personal achievement portfolio and software engineering showcase for **Firdavs Xalikov**. Designed with Apple-inspired minimalist dark aesthetics, custom 3D glassmorphic cards, internationalization support (EN/UZ/RU), full keyboard accessibility, and an automated Vitest suite.

🔗 **Live Deployment**: [fx-portfolio-pi.vercel.app](https://fx-portfolio-pi.vercel.app/)

---

## ✨ Features & Architecture

- 🌐 **Tri-Lingual Internationalization (i18n)**: Seamless instant switching between **English**, **Uzbek**, and **Russian**, with fallback mechanisms and HTML `lang` sync.
- 🎨 **Glassmorphic UI Engine**: Custom `GlassCard` component with 3D tilt perspective, dynamic cursor spotlight, and interactive backdrop blur.
- ♿ **Accessibility (a11y) First**: Full keyboard navigation support with high-contrast `:focus-visible` rings, `aria-label` tags on all interactive controls, and a hidden "Skip to main content" link.
- ⚡ **High-Performance Architecture**:
  - Code-split section loading with `React.lazy` and `Suspense`.
  - Next-gen WebP image formats with skeleton loading states to prevent CLS.
  - Smooth animation support with automatic `prefers-reduced-motion` detection.
- 🔍 **Production SEO & Open Graph**: Full metadata, canonical URLs, Twitter Cards, SVG/PNG favicons, `robots.txt`, `sitemap.xml`, and `schema.org/Person` JSON-LD structured data.
- 🧪 **Unit Test Suite**: 100% test coverage for core contexts and section renderers using Vitest and React Testing Library.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) (with Rolldown engine) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Iconography** | [Lucide React](https://lucide.dev/) & Typed Custom SVGs |
| **Testing** | [Vitest 3](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) + [jsdom](https://github.com/jsdom/jsdom) |
| **Linter** | [Oxlint](https://oxc.rs/docs/guide/usage/linter) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Repository Structure

```text
fx_portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow (lint, test, build)
├── public/
│   ├── favicon.svg              # Vector brand favicon
│   ├── robots.txt               # Search engine crawler directives
│   ├── sitemap.xml              # XML Sitemap
│   └── *.webp / *.png           # WebP optimized preview images
├── src/
│   ├── components/
│   │   ├── icons/               # Modular typed SVG icons (GitHub, Telegram, Instagram)
│   │   ├── sections/            # Page sections (Hero, About, Timeline, Skills, Projects, etc.)
│   │   │   └── __tests__/       # Vitest section render tests
│   │   └── ui/                  # Reusable UI primitives (GlassCard, Navbar, CursorGlow)
│   ├── context/
│   │   ├── LanguageContext.tsx   # Tri-lingual i18n provider & state
│   │   └── __tests__/           # Vitest unit tests for language switching & fallbacks
│   ├── data/                    # Strictly typed data modules (projects, timeline, skills)
│   ├── test/
│   │   └── setup.ts             # Global test mocks (matchMedia, IntersectionObserver, canvas)
│   ├── App.tsx                  # Root application component with code-splitting
│   ├── index.css                # Global Design System tokens & Tailwind directives
│   └── main.tsx                 # React DOM entry point
├── index.html                   # HTML template with SEO, OG, Twitter & JSON-LD metadata
├── package.json                 # Project dependencies and script registry
└── vite.config.ts               # Vite & Vitest configuration
```

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js**: v18.0.0 or higher (v22.x recommended)
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Firdavs-Xalikov/fx_portfolio.git

# Navigate into project directory
cd fx_portfolio

# Install dependencies
npm install
```

### Development Server

Start local dev server with HMR:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Testing, Linting & Building

| Command | Description |
|---|---|
| `npm run dev` | Starts Vite development server at `localhost:5173` |
| `npm run test` | Runs complete Vitest test suite (`LanguageContext` & `Sections`) |
| `npm run lint` | Runs Oxlint code quality verification |
| `npm run build` | Compiles TypeScript types (`tsc -b`) and builds production assets |
| `npm run preview` | Previews local production build locally |

Run full validation:

```bash
npm run test && npm run lint && npm run build
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.

---

Designed and engineered by **Firdavs Xalikov**.
