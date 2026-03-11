# Musée du 9e RIMa - Guide Phygital

## Overview

This is a Progressive Web App (PWA) serving as an immersive digital museum guide for the 9e Régiment d'Infanterie de Marine (9th Marine Infantry Regiment). The app allows museum visitors to scan QR codes to navigate to detailed historical content pages, explore interactive timelines, maps, quizzes, and glossaries across the regiment's history spanning Asia (Tonkin/China), Algeria, French Guiana, and regimental traditions.

The app is primarily in French, with some English translation support. It's designed mobile-first for visitors walking through a physical museum space.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (React SPA)
- **Framework:** React with TypeScript, built with Vite
- **Routing:** Wouter (lightweight client-side router) — routes defined in `client/src/App.tsx`
- **State Management:** React Context (`client/src/lib/context.tsx`) for app-wide settings (language, theme, font size, accessibility modes); TanStack React Query for server state
- **UI Components:** shadcn/ui (new-york style) with Radix UI primitives, located in `client/src/components/ui/`
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin), with custom theme colors for each historical era (tonkin, algerie, guyane, traditions) defined in `client/src/index.css`
- **Typography:** Playfair Display (serif, for headings) + Montserrat (sans, for body) — loaded via Google Fonts
- **Animations:** Framer Motion for page transitions and scroll effects
- **Maps:** React-Leaflet with Leaflet.js for interactive historical maps (`client/src/components/GlobalMapChronology.tsx`), styled with sepia CSS filters
- **Icons:** Lucide React

### Content Architecture
- Historical content is stored as TypeScript data files, not in a database:
  - `client/src/lib/data.ts` — Main museum sections structure (Tonkin, Algérie, Guyane, Traditions) with subsections
  - `client/src/lib/asia-data.ts` — Detailed Tonkin/Asia content (timeline, glossary, quiz, gallery)
  - `client/src/lib/china-1900-data.ts` — China 1900 expedition content
  - `client/src/lib/algerie-palestro-data.ts` — Palestro ambush 1956 content (timeline, blocs, map markers, glossary, quiz)
  - `client/src/lib/algerie-contre-insurrection-data.ts` — Contre-insurrection 1956-1959 content (timeline, blocs, glossary, quiz)
  - `client/src/lib/algerie-kj25-data.ts` — Operation KJ 25 content (timeline, blocs, glossary, quiz)
  - `client/src/lib/algerie-commandos-data.ts` — Commandos de chasse content (timeline, blocs, glossary, quiz)
  - `client/src/lib/algerie-disparition-data.ts` — Disparition 1960-1962 content (timeline, blocs, glossary, quiz)
- Each content page has multiple reading modes: "Essential (5 min)", "Full Visit (20-30 min)", "Archives (deep reading)"
- Pages feature: interactive timelines, accordion sections, image galleries with placeholders, glossaries, mini-quizzes

### Key Pages
- **Home** (`/`) — Vertical timeline with era sections, immersive scroll
- **Scan** (`/scan`) — QR code scanner (currently simulated) that redirects to content by ID
- **Detail** (`/detail/:id`) — Generic detail page for subsections
- **Asia/Tonkin** (`/asie/naissance-du-9-tonkin`) — Detailed Tonkin origins page
- **Asia/China 1900** (`/asie/chine-1900-expedition`) — China expedition page
- **Asia/Tourmente** (`/asie/tourmente-1940`) — WWII Tonkin page (1940-1946)
- **Algérie/Renaissance** (`/algerie/renaissance`) — Algeria Kabylie 1956 page with interactive map
- **Algérie/Palestro** (`/algerie/palestro`) — Palestro ambush (18 May 1956) page with timeline, content blocs, map, glossary, and quiz
- **Algérie/Contre-insurrection** (`/algerie/contre-insurrection`) — Counter-insurgency & politics (1956-1959): SAS, Constantine Plan, Challe Plan, autodetermination
- **Algérie/KJ 25** (`/algerie/kj25`) — Operation KJ 25 (23 Dec 1957): cordon & search along Tizi Ouzou–Bouira axis
- **Algérie/Commandos de chasse** (`/algerie/commandos-chasse`) — Hunting commandos (1958-1962): origin, organization, missions, legacy
- **Algérie/Disparition** (`/algerie/disparition`) — End of the war (1960-1962): Challe Plan decline, autodetermination, Évian accords, independence
- **AI Assistant** (`/ai-assistant`) — Chat-style assistant (currently client-side simulation using museum data)

### Backend (Express)
- **Runtime:** Node.js with Express, using tsx for TypeScript execution
- **Structure:** Minimal — `server/index.ts` (entry), `server/routes.ts` (API routes, currently empty), `server/storage.ts` (in-memory storage interface, currently empty)
- **Static Serving:** In production, serves built Vite output from `dist/public`; in development, uses Vite dev server middleware (`server/vite.ts`)
- **Build:** Custom build script (`script/build.ts`) using esbuild for server + Vite for client

### Database
- **ORM:** Drizzle ORM configured for PostgreSQL (`drizzle.config.ts`)
- **Schema:** Currently empty (`shared/schema.ts` exports nothing)
- **Connection:** Expects `DATABASE_URL` environment variable for PostgreSQL
- **Migrations:** Output to `./migrations` directory
- **Note:** The database is provisioned but not yet used — all content is in static TypeScript files. Future features (visitor analytics, user progress, admin content management) may use it.

### Project Structure
```
client/               # Frontend React app
  src/
    components/       # Shared components (layout, maps, artwork cards)
      ui/             # shadcn/ui components
    hooks/            # Custom React hooks
    lib/              # Data files, utilities, context, query client
    pages/            # Page components (Home, Detail, Scan, AI, etc.)
      asia/           # Asia-specific content pages
  public/             # Static assets
  index.html          # HTML entry point
server/               # Express backend
  index.ts            # Server entry point
  routes.ts           # API route registration
  storage.ts          # Storage interface
  static.ts           # Production static file serving
  vite.ts             # Dev server Vite integration
shared/               # Shared types/schema between client and server
  schema.ts           # Drizzle schema (currently empty)
attached_assets/      # Reference documents / prompts (not served)
```

### Accessibility Features
- Language toggle (French/English)
- Theme toggle (Light/Dark/High Contrast)
- Font size adjustment (Normal/Large/XL)
- Dyslexia-friendly mode
- Kids mode

## External Dependencies

### Core Services
- **PostgreSQL** — Database (configured via `DATABASE_URL` env var, provisioned but schema currently empty)
- **OpenStreetMap** — Map tiles for Leaflet interactive maps (free, no API key needed)
- **Google Fonts** — Playfair Display and Montserrat typography (loaded via CDN)

### Key NPM Packages
- **react-leaflet / leaflet** — Interactive map rendering with colonial-style sepia filtering
- **framer-motion** — Page animations and scroll effects
- **wouter** — Lightweight client-side routing
- **@tanstack/react-query** — Server state management
- **drizzle-orm / drizzle-kit** — PostgreSQL ORM and migration tooling
- **connect-pg-simple** — PostgreSQL session store (available but not yet used)
- **embla-carousel-react** — Image carousels
- **react-day-picker** — Calendar component
- **recharts** — Chart rendering
- **zod / drizzle-zod** — Schema validation
- **shadcn/ui ecosystem** — Radix UI primitives, class-variance-authority, clsx, tailwind-merge

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — Dev error overlay
- **@replit/vite-plugin-cartographer** — Dev tooling (dev only)
- **@replit/vite-plugin-dev-banner** — Dev banner (dev only)
- **vite-plugin-meta-images** — Custom plugin for OpenGraph image meta tags using Replit deployment URLs