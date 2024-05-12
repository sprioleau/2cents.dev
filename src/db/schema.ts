import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const comments = sqliteTable("comments", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").notNull(),
	message: text("content").notNull(),
	createdAt: integer("timestamp2", { mode: "timestamp_ms" })
		.notNull()
		.default(sql`(unixepoch() * 1000)`),
});
