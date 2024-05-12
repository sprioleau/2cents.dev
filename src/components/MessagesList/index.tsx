import styles from "./index.module.scss";

import Message from "../Message";
import { db } from "@/db";
import { comments } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function MessagesList() {
	const messages = await db.select().from(comments).orderBy(desc(comments.createdAt)).all();

	return (
		<ol className={styles["messages"]}>
			{messages.map((message) => (
				<li key={message.id}>
					<Message message={message} />
				</li>
			))}
		</ol>
	);
}
