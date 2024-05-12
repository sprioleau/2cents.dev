import { Metadata, Viewport } from "next";

const fullName = "San'Quan Prioleau";
const title = "2cents.dev - Add your thoughts to the conversation.";
const description = "Message board for sharing your thoughts, whims and opinions with humanity";
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const baseUrl = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
const keywords = [fullName, "message board", "comments", "feedback", "opinions"];

const baseOgConfig = {
	title,
	description,
	images: [
		{
			url: "/images/social-card.png",
			width: 1200,
			height: 630,
			alt: description,
		},
	],
};

const metadataBase = new URL(baseUrl);

export const homepageViewport: Viewport = {
	initialScale: 1,
	width: "device-width",
	themeColor: "#efeeea",
	colorScheme: "light",
};

export const homepageMetadata: Metadata = {
	title,
	description,
	applicationName: "title",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	icons: {
		icon: "images/favicon.svg",
		shortcut: {
			url: "images/favicon.svg",
			type: "image/png",
		},
	},
	manifest: "/manifest.json",
	keywords,
	authors: [{ name: fullName, url: baseUrl }],
	creator: fullName,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase,
	openGraph: {
		...baseOgConfig,
		url: baseUrl,
		siteName: title,
		locale: "en-US",
		type: "website",
	},
	twitter: baseOgConfig,
};
