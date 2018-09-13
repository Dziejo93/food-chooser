const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema
const userSchema = new Schema({
	local: {
		username: String,
		password: String,
	},
	google: {
		id: String,
		name: String,
	},
}, {
	timestamps: true
})

const User = mongoose.model("User", userSchema)


module.exports = User