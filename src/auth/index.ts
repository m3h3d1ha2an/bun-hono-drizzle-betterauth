import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { haveIBeenPwned, openAPI } from "better-auth/plugins";
import { db } from "@/db";
import { env } from "@/env";

export const auth = betterAuth({
	baseURL: env.BETTER_AUTH_BASE_URL,
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	plugins: [
		openAPI(), // Auto-generate OpenAPI docs + API tester
		haveIBeenPwned(), // Block passwords found in data breaches
	],
});
