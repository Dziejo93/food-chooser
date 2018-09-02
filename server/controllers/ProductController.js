const express = require("express")
const mongoose = require("mongoose")
const Product = require("../models/product-model")
const Restaurant = require("../models/restaurant-model")

module.exports = {
	getProducts: async (req, res, next) => {
		try {
			const products = await Product.find({})
			if (products.length === 0) {
				return res.status(404).send({
					message: "no products"
				})
			} else {
				return res.status(200).send({
					products
				})
			}
		} catch (error) {
			return res.status(404).send({
				message: "error"
			})
		}
	},
	deleteProducts: async (req, res, next) => {
		try {
			await Product.deleteMany({})
			return res.status(204).send({
				message: "all products deleted"
			})
		} catch (error) {
			return res.status(404).send({
				message: "Problem with deletingproducts"
			})
		}
	},
	postProduct: async (req, res, next) => {
		try {
			console.log(req.body)
			await Product.findOne({
				name: req.body.name
			},
			async (err, product) => {
				if (product) {
					console.log(product)
					return res.status(422).send({
						messege: "product exists",
						product
					})
				} else if (!product) {
					const newProduct = await new Product({
						name: req.body.name,
						price: req.body.price,
						description: req.body.description,
						image: req.body.imageUrl,
						createdAt: new Date().getTime()
					}).save()
					return res.status(200).send({
						message: "product created",
						newProduct
					})
				}
				if (err) {
					res.status(404).send({
						message: "error while searching"
					})
				}
			}
			)
		} catch (error) {
			res.status(404).send({
				message: "request error"
			})
		}
	},

	//(/product/:id)
	getProduct: async (req, res, next) => {
		try {
			const product = await Product.findById(req.params.id)
			return res.status(200).send({
				product
			})
		} catch (error) {
			return res.status(422).send({
				message: "no product with that id"
			})
		}
	},

	updateProduct: async (req, res, next) => {
		await Product.findByIdAndUpdate(
			req.params.id, {
				$set: req.body
			}, {
				new: true
			},
			async (err, product) => {
				if (err) {
					return res.status(404).send({
						message: err
					})
				} else if (!product) {
					return res.status(404).send({
						message: "no result"
					})
				} else {
					return res.status(200).send({
						message: "Product updated",
						product
					})
				}
			}
		)
	},
	deleteProduct: async (req, res, next) => {
		try {
			Product.findOneAndRemove({
				_id: req.params.id
			}).exec(async (err, result) => {
				console.log(result)
				if (err) {
					return res.status(404).send({
						message: "problem with finding product"
					})
				}
				if (!result) {
					return res.status(404).send({
						message: "product not found"
					})
				} else {
					return res.status(204).send({
						message: "user deleted successfully"
					})
				}
			})
		} catch (error) {
			return res.status(404).send({
				message: "Problem with deleting product"
			})
		}
	},
	putProductInRestaurant: async (req, res, next) => {
		try {
			const restaurant = await Restaurant.findById(req.params.restaurantId)
			await Product.findByIdAndUpdate(req.params.productId, {
				"vendor": restaurant
			}, {
				new: true
			}, async (err,
				result) => {
				if (err) {
					return res.status(404).send({
						message: "problem with updating product"
					})
				}
				if (!result) {
					return res.status(404).send({
						message: "product not found"
					})
				} else {
					return res.status(200).send({
						message: "user updated successfully",
						result
					})
				}

			})
		} catch (error) {
			return res.status(404).send({
				message: "problem with updating product"
			})
		}
	}
}