# Mall of America — Interactive Sales Deck

## Overview

A cinematic, browser-based interactive sales deck for Mall of America, built as a pitch tool for prospective retail tenants, corporate sponsors, and event partners. Designed to replace fragmented manual pitches with a single immersive, self-contained experience.

## Live Demo

[Insert Vercel URL here]

## Tech Stack

- React 18 + TypeScript

- Tailwind CSS

- Framer Motion (animations)

- Lucide React (icons)

- Google Fonts: Playfair Display + Inter

## Setup

npm install

npm run dev

## File Structure

src/components/ — one component per section (fully modular)

src/hooks/ — useScrollActive, useCounterAnimation

## Design Decisions

- Gold (#C9A84C) and black (#0A0A0A) palette for luxury positioning

- Playfair Display for headings — editorial, premium feel

- Component-per-section architecture for easy module expansion

- IntersectionObserver-based animations — no scroll jank

- Styled gradient placeholders instead of blank boxes — intentional, premium look

## AI Tools Used

- Claude (Anthropic) — prompt engineering, copywriting, content strategy

- Lovable — React scaffolding and component generation

- Ideogram.ai — AI-generated imagery (mall interiors, luxury wing, events)

## Sections

Hero → By The Numbers → Retail → Luxury → Dining → Attractions → Events → Venue → Sponsorship → Leasing → Contact

## Expandability

Every section is a self-contained component. New modules can be added by creating a new component file and inserting a nav link — no rewrites needed.
