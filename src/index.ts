import { Hono } from "hono";
import { auth } from "@/auth";

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get('/', (c) => c.text('This is a bun + hono + drizzle + betterauth starter'))

export default app;
