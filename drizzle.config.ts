import { dbCredentials } from "@/db";
import { Config } from "drizzle-kit";

export default {
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	driver: "turso",
	dbCredentials,
} satisfies Config;
