const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
    name: String,
    adress: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    createdAt: Date
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant