import { Github } from "lucide-react";

import styles from "./index.module.scss";

export default function Navbar() {
	return (
		<nav>
			<ul className={styles["nav-items"]}>
				<li>
					<a
						href="/"
						className={styles["logo"]}
					>
						<img
							src="/images/logo-wordmark-url.svg"
							alt="2cents logo"
							width={220}
							height={93}
						/>
					</a>
				</li>
				<li className={styles["byline"]}>
					by{" "}
					<a href="https://github.com/sprioleau">
						<span>@sprioleau</span>{" "}
						<span
							aria-role="img"
							aria-label="GitHub logo"
						>
							<Github />
						</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}
