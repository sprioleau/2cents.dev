import styles from "./index.module.scss";

import { deleteComment } from "@/actions";
import type { Message as TMessage } from "@/db/types";
import getRelativeTime from "@/utils/getRelativeTime";
import { Trash2 } from "lucide-react";
import Button from "../Button";

type Props = {
	message: TMessage;
};

export default function Message({ message: { id, name, message, createdAt } }: Props) {
	return (
		<article className={styles["message"]}>
			<main>
				<p className={styles["message-text"]}>{message}</p>
			</main>
			<footer className={styles["footer"]}>
				<div className={styles["byline"]}>
					<span className={styles["author"]}>{name}</span>
					<span> • </span>
					<span className={styles["timestamp"]}>{getRelativeTime(createdAt)}</span>
				</div>
				<form action={deleteComment}>
					<input
						type="text"
						name="id"
						value={id}
						hidden
						readOnly
						aria-hidden
					/>
					<Button
						type="submit"
						title="Delete"
						addedClassName={styles["delete-button"]}
					>
						<Trash2 />
					</Button>
				</form>
			</footer>
		</article>
	);
}
