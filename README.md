# Mall of America — Interactive Sales Deck

## Overview
A cinematic, browser-based interactive sales deck for Mall of America, built as a pitch tool for retail tenants, corporate sponsors, and event partners.

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS (utility styling + responsive)
- Framer Motion (all animations)
- Lucide React (icons)
- Google Fonts: Playfair Display + Inter

## Setup
```
npm install
npm run dev
```

## Design Decisions
- Gold/black palette for luxury positioning aligned with premium tenant expectations
- Component-per-section architecture for easy expansion and A/B testing of sections
- IntersectionObserver-based animations (via Framer Motion `useInView`) to avoid jank on scroll
- CSS gradient placeholders designed to look premium, not placeholder-like

## AI Tools Used
- Claude (Anthropic) — prompt engineering, copy, content strategy
- Lovable — React component generation and layout scaffolding

## Expandability
Each section is a self-contained component under `src/components/moa/`. New modules
(e.g. a venue page, a brand case study) can be added by creating a new component and
inserting a nav link — no rewrites needed.
