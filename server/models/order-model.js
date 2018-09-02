const mongoose = require("mongoose")
const Schema = mongoose.Schema
const orderSchema = new Schema({
	issued: new Date().getDate(),
	products: {},
	completed: Date,
	updatedAt: Date

})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order