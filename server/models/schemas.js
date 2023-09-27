const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
	name: { type: String },
	email: { type: String },
	entryDate: { type: Date, default: Date.now },
});

const UserModel = model("Users", userSchema, "users");
//const mySchemas = { Users: Users };

module.exports = UserModel;
