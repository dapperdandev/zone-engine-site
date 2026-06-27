# Zone Engine site

Marketing site for the Zone Engine heart-rate zone training app. Single landing page
with a screenshot carousel plus a `/privacy` page. Built with Vite + Bootstrap, deployed
to Cloudflare Workers static assets.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build      # outputs to ./dist
npm run preview    # serve the production build locally
```

## Deploy (Cloudflare Workers)

```
npm run deploy     # vite build && wrangler deploy
```

First deploy: `npx wrangler login` to authenticate, then `npm run deploy`. The Worker name
is `zone-engine-site` (see `wrangler.jsonc`); add the `zone-engine.com` custom domain in the
Cloudflare dashboard once the domain is registered.

## Update screenshots

Replace the PNGs in `public/images/` (sourced from `../zone-engine/assets/screenshots/`),
then rebuild.
