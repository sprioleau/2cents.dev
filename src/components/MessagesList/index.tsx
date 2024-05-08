import styles from "./index.module.scss";

import Message from "../Message";
import useMessages from "../../hooks/useMessages";

export default function MessagesList() {
	const { messages } = useMessages();

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
