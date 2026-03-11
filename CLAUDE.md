# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm start        # Start production server
pnpm prettier     # Format all files
pnpm test         # Check formatting (runs prettier:check)
```

There are no unit tests — `pnpm test` only checks Prettier formatting.

## Environment Variables

Required (see `.env.example`):
- `SHOPIFY_STORE_DOMAIN` — e.g. `store.myshopify.com`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SHOPIFY_REVALIDATION_SECRET`
- `SITE_NAME`
- `COMPANY_NAME`

## Architecture

This is **Boksmat**, a Norwegian bookstore storefront built on the [Next.js Commerce](https://github.com/vercel/commerce) template. It uses the Next.js App Router with React Server Components and Shopify as the headless commerce backend.

### Directory Structure

- `app/` — Next.js App Router routes
  - `page.tsx` — Homepage (ThreeItemGrid + Carousel)
  - `product/[handle]/` — Product detail pages
  - `search/` and `search/[collection]/` — Search and collection browsing
  - `[page]/` — CMS-driven pages fetched from Shopify
  - `maintenance/` — Maintenance mode page (currently active)
  - `api/revalidate/` — Webhook endpoint for Shopify-triggered cache revalidation
- `components/` — UI components
  - `cart/` — Cart modal, context, add/remove/edit actions
  - `layout/` — Navbar, footer, search
  - `grid/` — Product grid layouts
  - `product/` — Gallery, description, variant selector
- `lib/shopify/` — All Shopify GraphQL API calls, mutations, and type definitions
- `lib/constants.ts` — Sort options, cache tags, `HIDDEN_PRODUCT_TAG`
- `lib/utils.ts` — `baseUrl`, `createUrl`, `ensureStartsWith`, `validateEnvironmentVariables`
- `proxy.ts` — Middleware logic for maintenance mode (imported by `middleware.ts` if present)

### Key Patterns

**Shopify data layer**: All data fetching goes through `lib/shopify/index.ts`, which wraps Shopify's Storefront GraphQL API. Functions like `getProduct`, `getCollection`, `getCart` etc. are called from Server Components.

**Caching**: Uses Next.js experimental cache APIs (`unstable_cacheLife`, `unstable_cacheTag` from `next/cache`). Cache tags are defined in `lib/constants.ts` under `TAGS`. Shopify webhooks hit `/api/revalidate` to trigger `revalidateTag`.

**Cart**: Managed client-side via React context (`components/cart/cart-context.tsx`). The cart Promise is initiated in the root layout and passed down without awaiting, enabling streaming.

**Maintenance mode**: `proxy.ts` contains the middleware function with `isInMaintenanceMode = true` (currently hardcoded on). To disable, set it to `false`. This file needs to be re-exported from a `middleware.ts` at the project root to take effect.

**Experimental Next.js features in use**: PPR (Partial Pre-Rendering), `inlineCss`, `useCache`.

### Styling

Tailwind CSS v4 with custom brand colors (`brand-cream`, `brand-paper`, `brand-green`). UI language is Norwegian (`lang="nb"`). Icons from `@heroicons/react`, accessible components from `@headlessui/react`.
