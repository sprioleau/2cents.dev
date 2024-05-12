import { db } from "@/db";
import { comments } from "@/db/schema";

// prettier-ignore
const messages = [
  {
    id: 1,
		name: "Jamie",
		message: "Building web apps feels like crafting magic. Each line of code breathes life into pixels, turning ideas into interactive experiences.",
	},
  {
    id: 2,
		name: "Kendrick",
		message: "I agree with you! 👇",
	},
  {
    id: 3,
		name: "Tara",
		message: "Creating web apps is like architecting dreams into reality. From wireframes to deployment, the journey is an exhilarating rollercoaster of creativity.",
	},
];

async function seed() {
	try {
		// Delete all existing comments
		await db.delete(comments);

		// Add new comments
		await db.insert(comments).values(messages);

		console.log("🌱 Successfully seeded database");
	} catch (caughtError) {
		console.log("❌ Something went wrong while attemptimg to seed database", caughtError);
	}
}

seed();
