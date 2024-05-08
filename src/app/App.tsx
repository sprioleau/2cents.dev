import styles from "./App.module.scss";

import MessageForm from "../components/MessageForm";
import MessagesList from "../components/MessagesList";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import { MessagesProvider } from "../hooks/useMessages";

export default function App() {
	return (
		<>
			<Navbar />
			<MessagesProvider>
				<main className={styles["main"]}>
					<header className={styles["header"]}>
						<h1 className={styles["title"]}>
							Add your 2{" "}
							<span className={styles["accent-word"]}>
								cents{" "}
								<span className={styles["accent-shape"]}>
									<img
										src="/images/accent-shape.svg"
										alt="accent shape"
										width={42}
										height={42}
									/>
								</span>
							</span>
						</h1>
						<p className={styles["subtitle"]}>Share your thoughts, whims and opinions with humanity</p>
					</header>

					<section className={styles["main-content-section"]}>
						<div className={styles["pane"]}>
							<SectionTitle>New Message</SectionTitle>
							<MessageForm />
						</div>

						<div className={styles["pane"]}>
							<SectionTitle>Messages</SectionTitle>
							<MessagesList />
						</div>
					</section>
				</main>
			</MessagesProvider>
		</>
	);
}
