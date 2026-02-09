# Bun + Hono + Drizzle + BetterAuth

A modern, type-safe web application stack combining Bun runtime, Hono framework, Drizzle ORM, and BetterAuth authentication.

## Project Initialization

Initialize a new Hono project using the official template:

```sh
bun create hono@latest bun-hono-drizzle-betterauth
```

**Setup Steps:**
1. Select **bun** as your template option
2. Install project dependencies
3. Select **bun** as your package manager

## Database Configuration

### Install Drizzle ORM Dependencies

```sh
bun add drizzle-orm drizzle-seed
bun add -D drizzle-kit
```

### Configure Package Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "db:push": "drizzle-kit push",
    "db:gen": "drizzle-kit generate",
    "db:mig": "drizzle-kit migrate",
    "auth:sync": "better-auth generate --config ./src/auth/index.ts --output ./src/db/schema/auth.ts",
    "auth:secret": "better-auth secret"
  }
}
```

### Configure TypeScript Path Aliases

Update your `tsconfig.json` to include path mapping:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Configure Environment Variables Type Safety

Create `bun.d.ts` in your project root for environment variable autocompletion:

```ts
declare module "bun" {
  interface Env {
    DATABASE_URL: string;
    PORT: string;
  }
}
```

### Initialize Database Instance

Create `./src/db/index.ts` with your PostgreSQL database configuration:

> This file configures your Drizzle database instance using the `bun-sql` adapter for PostgreSQL.  
> [View official documentation](https://orm.drizzle.team/docs/get-started/bun-sql-new)

```ts
import { drizzle } from "drizzle-orm/bun-sql";
import { SQL } from "bun";

const client = new SQL(process.env.DATABASE_URL);

export const db = drizzle({ client });
```

### Organize Database Schemas

Create `./src/db/schema/index.ts` as your central schema registry.

Update `./src/db/index.ts` to import all schemas:

```ts
import { drizzle } from "drizzle-orm/bun-sql";
import { SQL } from "bun";
import * as schema from "./schema";

const client = new SQL(process.env.DATABASE_URL);

export const db = drizzle({ client, schema });
```

## Authentication Setup

### Install BetterAuth

```sh
bun add better-auth
bun add -D @better-auth/cli@latest
```

### Configure Authentication

1. Generate a secure authentication secret:
   ```sh
   bun --bun run auth:secret
   ```
   Add the generated secret to your `.env` file.

2. Generate BetterAuth schema definitions:
   ```sh
   bun --bun run auth:sync
   ```

---

Your development environment is now configured and ready for building secure, type-safe applications.