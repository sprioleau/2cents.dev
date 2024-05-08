import styles from "./index.module.scss";

import { Trash2 } from "lucide-react";
import { deleteMessageById } from "../../api/fetchers";
import useMessages from "../../hooks/useMessages";
import type { Message as TMessage } from "../../types";
import Button from "../Button";
import getRelativeTime from "../../utils/getRelativeTime";

type Props = {
	message: TMessage;
};

export default function Message({ message: { id, name, message, created: createdAt } }: Props) {
	const { refetch } = useMessages();

	async function handleDeleteMessage(id: number) {
		await deleteMessageById(id);
		refetch();
	}

	return (
		<article className={styles["message"]}>
			<main>
				<p className={styles["message-text"]}>{message}</p>
			</main>
			<footer className={styles["footer"]}>
				<div className={styles["byline"]}>
					<span className={styles["author"]}>{name}</span>
					<span> • </span>
					<span className={styles["timestamp"]}>
						<span> • </span>
						{getRelativeTime(createdAt)}
					</span>
				</div>
				<Button
					onClick={() => handleDeleteMessage(id)}
					addedClassName={styles["delete-button"]}
				>
					<Trash2 />
				</Button>
			</footer>
		</article>
	);
}
