const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema
const userSchema = new Schema({

	local: {
		username: String,
		password: String,
		signed: Date,
		updatedAt: Date
	},
	google: {
		id: String,
		name: String,
		signed: Date,
		updatedAt: Date
	},

})

const User = mongoose.model("User", userSchema)


module.exports = User