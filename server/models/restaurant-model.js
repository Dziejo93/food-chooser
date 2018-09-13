const mongoose = require("mongoose")
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
	name: String,
	adress: String,
	logoUrl: String,
	description: String,
	products: [{
		type: Schema.Types.ObjectId,
		ref: "product"
	}],

},{timestamps:true})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports = Restaurant