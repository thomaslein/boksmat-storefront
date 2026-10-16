# Boksmat – Spec

## Purpose

Boksmat is a web shop where customers in Norway can buy exclusive tinned products, mostly tinned fish from around the world.

## Audience

- Customers in Norway
- UI language is Norwegian (`lang="nb"`), prices in NOK

## Scope

- Browse products and collections, search and sort
- Product pages with images and variants
- Cart and checkout through Shopify
- Content pages (e.g. about, shipping) managed in Shopify

## Technical setup

- Next.js App Router storefront based on the Next.js Commerce template
- Shopify is the headless backend (Storefront GraphQL API); see `CLAUDE.md` for architecture and commands
- Brand colors: `brand-cream`, `brand-paper`, `brand-green`

## Current status

- Maintenance mode is on (`proxy.ts`); all pages redirect to `/maintenance`

## Open questions

- Shipping: Norway only, or other countries later?
- Launch date, and when maintenance mode should be turned off
- Age or alcohol restrictions: none expected, to be confirmed
- Product information to show per item (origin, fish species, weight, ingredients, allergens)
- Payment methods (e.g. Vipps) and shipping providers
