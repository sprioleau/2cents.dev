const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const DataAccessObject = require("./dataAccessObject");
const Comment = require("./comment");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const dataAccessObject = new DataAccessObject("./database.sqlite3");
const comment = new Comment(dataAccessObject);

comment.createTable().catch((error) => {
	console.log(`Error: ${JSON.stringify(error)}`);
});

const apiRouter = express.Router();

apiRouter.post("/createComment", function (request, response) {
	const { body } = request;
	comment.createComment(body).then((result) => {
		response.send(result);
	});
});

apiRouter.get("/getComment", function (request, response) {
	const { body } = request;
	const { id } = body;
	comment.getComment(id).then((result) => {
		response.send(result);
	});
});

apiRouter.get("/getComments", function (request, response) {
	comment.getComments().then((result) => {
		response.send(result);
	});
});

apiRouter.delete("/deleteComment", function (request, response) {
	const { body } = request;
	const { id } = body;

	comment.deleteComment(id).then((result) => {
		response.send(result);
	});
});

apiRouter.delete("/deleteComments", function (request, response) {
	comment.deleteComments().then((result) => {
		response.send(result);
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/api", apiRouter);

app.use(express.static("build"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
	const rootDir = __dirname.replace("/server", "");
	response.sendFile(`${rootDir}/build/index.html`);
});
