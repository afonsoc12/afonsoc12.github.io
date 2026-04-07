# Repo Context

This repository is a personal site built with Astro + Tailwind.

## Purpose

- Present Afonso's profile, experience, projects, and contact links.
- Keep the site static and deployable to GitHub Pages.

## Tech Stack

- Astro (static site)
- Tailwind CSS
- TypeScript

## Main Structure

- `src/pages/index.astro`: single-page entrypoint
- `src/components/`: section components (hero, about, experience, projects, contact, sidebar)
- `src/layouts/Base.astro`: shared page layout
- `.planning/`: project plans, requirements, roadmap, and state tracking, to be used with get-shit-done

## Local Commands

- `npm run dev` - start local dev server
- `npm run build` - build production site
- `npm run preview` - preview production build
- `npm run ci:check` - Runs linting and formatting checks
- `npm run ci:fix` - Auto-fixes lint and formatting issues

## Changelog

- Always add entries under `## [Unreleased]` in `CHANGELOG.md`
- Follow [Keep a Changelog](https://keepachangelog.com) spec: use `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security` subsections
- Try to keep changes succint and to the point. If they are related, prefer a single entry
- Never write directly to a versioned section; releases auto-promote Unreleased
