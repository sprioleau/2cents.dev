import "@/styles/index.scss";

import Navbar from "@/components/Navbar";
import { homepageMetadata } from "@/seo";
import { Metadata } from "next";

export const metadata: Metadata = homepageMetadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
