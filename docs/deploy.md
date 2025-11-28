# SweetLeaf API – Deploy Quickstart

## Required services
- **Database**: Supabase (Postgres) project with a dedicated database named `sweetleaf`.
- **Storage**: Supabase bucket `sweetleaf-assets` for hero/header/card assets.
- **Hosting**: Render (or similar) instance running `npm run start:prod`.

## Environment variables
| Key | Description |
| --- | --- |
| `DATABASE_URL` | Postgres connection string for Prisma migrations. |
| `DIRECT_URL` | Direct connection string used by Prisma Client. |
| `API_KEY` | Secret token injected into admin requests (`x-api-key`). |
| `ADMIN_EMAILS` | Comma-separated whitelist of owner emails for future Firebase Auth integration. |
| `SUPABASE_PROJECT_URL` | Supabase project URL for asset uploads. |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key used by backend upload helpers. |
| `SUPABASE_BUCKET` | Bucket where builder assets are stored. |

## Deploy steps
1. **Install dependencies**  
   ```bash
   npm install
   ```
2. **Generate Prisma client & run migrations**  
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```
3. **Build & start**  
   ```bash
   npm run build
   npm run start:prod
   ```
4. **Render configuration**  
   - Runtime: Node 20+.  
   - Build command: `npm run build`.  
   - Start command: `npm run start:prod`.  
   - Add the environment variables above.
5. **Health check**  
   - Hit `GET /api/health` to ensure `{ status: 'ok' }` payload is returned.
