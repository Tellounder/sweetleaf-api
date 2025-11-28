# SweetLeaf API (Fase 1)

Backend service that powers the owner-only CMS for the SweetLeaf React frontend. It exposes Design Content and Publish Status modules while enforcing a simple admin API key guard.

## Stack
- **NestJS** + **TypeScript**
- **Prisma** + **Postgres (Supabase)**
- **Supabase Storage** for hero/header/card imagery

## Local development
```bash
cp .env .env.local # update values
npm install
npm run prisma:generate
npm run prisma:migrate # optional if a DB is already provisioned
npm run start:dev
```

### Useful endpoints
- `GET /api/health` – health probe for Render.
- `GET /api/design/blocks` – public read of CMS blocks (UI fallbacks use this).
- `PUT /api/design/blocks/:blockKey` – upsert CMS block content (requires `x-api-key` header).
- `PATCH /api/publish-status/:blockKey` – toggle visibility / bump version, also guarded by API key.

## Environment variables
See [`docs/deploy.md`](docs/deploy.md) for the complete matrix. Minimum required for local dev:

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/sweetleaf?schema=public"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:5432/sweetleaf?schema=public"
API_KEY="local-dev-api-key"
SUPABASE_PROJECT_URL="https://xdghzptxuapxlwviwgxi.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZ2h6cHR4dWFweGx3dml3Z3hpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDI0MTEyMywiZXhwIjoyMDc5ODE3MTIzfQ._Me2MQPz5yFTZt9GSqHkTHs1IzWDzs-iHZW_VjPot4s"
SUPABASE_BUCKET="sweetleaf-assets"
```

## Next steps
- Wire Firebase admin auth to mint/check custom tokens instead of the temporary API key guard.
- Add upload helpers (`uploadDesignAssetToSupabase`) using the Supabase SDK.
- Extend Prisma schema with customer/order modules for Phase 2.
