import styles from "./page.module.scss";

import MessageForm from "@/components/MessageForm";
import MessagesList from "@/components/MessagesList";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
	return (
		<main className={styles["main"]}>
			<header className={styles["header"]}>
				<h1 className={styles["title"]}>
					Add your 2 cents{" "}
					<span className={styles["accent-shape"]}>
						<Image
							src="/images/accent-shape.svg"
							alt="accent shape"
							width={42}
							height={42}
							priority
						/>
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
	);
}
