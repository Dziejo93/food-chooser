const mongoose = require("mongoose")
const Schema = mongoose.Schema
const productSchema = new Schema({
	name: String,
	price: Number,
	description: String,
	quantity:Number,
	image: String,
	vendor: {
		type: Schema.Types.ObjectId,
		ref: "Restaurant"
	},


},{timestamps:true})

const Product = mongoose.model("Product", productSchema)
module.exports = Product