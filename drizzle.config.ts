import { defineConfig } from "drizzle-kit";
import { env } from "@/env";

const drizzleConfig = defineConfig({
	schema: "./src/db/schema/index.ts",
	out: "./src/db/migrations",
	dialect: "postgresql",
	dbCredentials: { url: env.DATABASE_URL },
	verbose: true,
	strict: true,
});

export default drizzleConfig;
