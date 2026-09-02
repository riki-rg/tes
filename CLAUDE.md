# CLAUDE.md — landing-page-modern

Project **frontend · React (Vite SPA)** — landing page modern.

## Perintah Penting

```bash
pnpm dev          # dev server http://localhost:5173
pnpm build        # tsc -b + vite build → dist/
pnpm preview      # preview dist
pnpm lint         # biome check .
pnpm lint:fix     # biome check --write .
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest run
pnpm test:watch   # vitest watch
pnpm test:e2e     # playwright test
```

## Struktur Folder

```
src/
  components/ui/   # shadcn-style components (Button, etc)
  lib/utils.ts     # cn() helper (clsx + tailwind-merge)
  test/setup.ts    # vitest setup
  App.tsx          # landing page
  main.tsx
  index.css        # tailwind + design tokens
e2e/               # playwright specs
public/
```

## Konvensi

- **Language:** typescript-strict (`strict: true`, `noUncheckedIndexedAccess`)
- **Styling:** tailwind-shadcn — import dari `@/components/ui/*`, utility `cn()`
- **Alias:** `@/*` → `./src/*` (vite + tsconfig)
- **Lint/Format:** biome (check + format), lint-staged via Husky pre-commit
- **Commits:** conventional (`feat:`, `fix:`, `chore:`) — commitlint enforced
- **Testing:** vitest + jsdom + Testing Library, Playwright untuk E2E
- **Deploy:** cloudflare-pages (static `dist/`). Alternatif: `pnpm build` lalu deploy manual.

## Catatan

- Sumber data: static/mock (frontend only). Jika butuh API, tambah `VITE_API_URL` di `.env.local`
- Extras aktif: Sentry + PostHog (pasang DSN/key via env kalau dipakai)
