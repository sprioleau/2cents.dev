const DataAccessObject = require("./dataAccessObject");
const Comment = require("./comment");

// prettier-ignore
const messages = [
	{
		name: "Jamie",
		message:
			"Building web apps feels like crafting magic. Each line of code breathes life into pixels, turning ideas into interactive experiences.",
	},
	{
		name: "Kendrick",
		message: "I agree with you! 👇",
	},
	{
		name: "Tara",
		message: "Creating web apps is like architecting dreams into reality. From wireframes to deployment, the journey is an exhilarating rollercoaster of creativity.",
	},
];

async function seed() {
	try {
		const dataAccessObject = new DataAccessObject("./database.sqlite3");
		const comment = new Comment(dataAccessObject);

		await comment.createTable().catch((error) => {
			console.log(`Error: ${JSON.stringify(error)}`);
		});

		await comment.deleteComments();

		for (let i = 0; i < messages.length; i++) {
			await comment.createComment(messages[i]);
		}

		console.log("🌱 Successfully seeded database");
	} catch (caughtError) {
		console.log("❌ Something went wrong while attemptimg to seed database", caughtError);
	}
}

seed();
