import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.scss";

export default function Navbar() {
	return (
		<nav>
			<ul className={styles["nav-items"]}>
				<li>
					<Link
						href="/"
						className={styles["logo"]}
					>
						<Image
							src="/images/logo-wordmark-url.svg"
							alt="2cents logo"
							width={220}
							height={93}
							priority
						/>
					</Link>
				</li>
				<li className={styles["byline"]}>
					by{" "}
					<a href="https://github.com/sprioleau">
						<span>@sprioleau</span> <Github />
					</a>
				</li>
			</ul>
		</nav>
	);
}
