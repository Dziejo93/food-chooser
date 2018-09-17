const mongoose = require("mongoose")
const Schema = mongoose.Schema
const orderSchema = new Schema({
	issuedBy: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	products: [],
	completed: Date,
}, {
	timestamps: true
})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order