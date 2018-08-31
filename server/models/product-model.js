const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    vendors: {
        type: Schema.Types.ObjectId,
        ref: 'restaurant'
    },
    createdAt: Date

})

const Product = mongoose.model('Product', productSchema)
module.exports = Product