# Bun + Hono + Drizzle + BetterAuth

## Getting Started

```sh
bun create hono@latest bun-hono-drizzle-betterauth
```

> select **bun** from the template options
> install the project dependencies
> select **bun** from the package manager options

### Database Setup with Drizzle ORM

```sh
bun add drizzle-orm drizzle-seed
bun add -D drizzle-kit
```

### Add the below scripts to `package.json`

```json
{
  "db:push": "drizzle-kit push",
  "db:gen": "drizzle-kit generate",
  "db:mig": "drizzle-kit migrate",
  "auth:sync": "better-auth generate --config ./src/auth/index.ts --output ./src/db/schema/auth.ts",
  "auth:secret": "better-auth secret"
}
```

### Add import alias to `tsconfig.json`

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Create `bun.d.ts` in the root of your project to get env autocomplete

```ts
declare module "bun" {
  interface Env {
    DATABASE_URL: string;
    PORT: string;
  }
}
```

### Create `./src/db/index.ts` file and paste the below code

> this is your db instance and setup your `bun-sql` drizzle adapter for using **postgresql**.
> [click here to see the official doc](https://orm.drizzle.team/docs/get-started/bun-sql-new)

```ts
import { drizzle } from "drizzle-orm/bun-sql";
import { SQL } from "bun";

const client = new SQL(process.env.DATABASE_URL);

export const db = drizzle({ client });
```

### Create `./src/db/schema/index.ts` file where all the schemas will be kept

> add the below code to the `./src/db/index.ts` to connect all the schema

```ts
import * as schema from "./schema";

export const db = drizzle({ client, schema });
```

### Add **BetterAuth** to the project

```sh
bun add better-auth
bun add -D @better-auth/cli@latest
```

### Generate Secret by running `bun --bun run auth:secret` and add to `.env` file

### Generate **BetterAuth Schema** by running `bun --bun run auth:sync`
