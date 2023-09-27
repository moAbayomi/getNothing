const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/schemas");
const Email = require("./email.js");

const app = express();

const port = process.env.PORT; // Define the port to listen on
const DB = process.env.CONNECTION_STR;
console.log(port);

app.use(cors());
app.use(express.json());

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((con) => {
		console.log("DB connection sucessful");
	})
	.catch((err) => console.log(err));

app.post("/", async (req, res) => {
	//const { name, email } = req.body;

	try {
		const userDoc = await User.create(req.body);
		const url = `${req.protocol}://${req.get("host")}/`;
		console.log(userDoc);
		try {
			await new Email(userDoc, url).sendNothing();
		} catch (err) {
			console.log(err);
		}
		res.json(userDoc);
	} catch (e) {
		res.status(400).json(e);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
