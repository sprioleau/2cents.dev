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
		const comment = new Comment(new DataAccessObject("../database.sqlite3"));

		messages.forEach((message) => {
			comment.createComment(message);
		});

		console.log("🌱 Successfully seeded database");
	} catch (caughtError) {
		console.log("❌ Something went wrong while attemptimg to seed database", caughtError);
	}
}

seed();
