const express = require("express")
const mongoose = require("mongoose")


module.exports = {
	getRestaurants: async (req, res, next) => {
		try {
			const restaurants = await Restaurant.find({})
			if (restaurants.length === 0) {
				return res.status(404).send({
					message: "no restaurants"
				})
			} else {
				return res.status(200).send({
					restaurants
				})
			}
		} catch (error) {
			return res.status(404).send({
				message: "error"
			})
		}
	},
	deleteRestaurants: async (req, res, next) => {
		try {
			await Restaurant.deleteMany({})
			return res.status(204).send({
				message: "all restaurants deleted"
			})
		} catch (error) {
			return res.status(404).send({
				message: "Problem with deleting Restaurants"
			})
		}
	},
	postRestaurant: async (req, res, next) => {
		try {
			console.log(req.body)
			await Restaurant.findOne({
				name: req.body.name
			},
			async (err, restaurant) => {
				if (restaurant) {
					console.log(restaurant)
					return res.status(422).send({
						messege: "restaurant exists",
						restaurant
					})
				} else if (!restaurant) {
					const newRestaurant = await new Restaurant({
						name: req.body.name,
						adress: req.body.adress,
						logoUrl: req.body.logoUrl,
						description: req.body.description,
						createdAt: new Date().getTime()
					}).save()
					return res.status(200).send({
						message: "Restaurant created",
						newRestaurant
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

	//(/Restaurant/:id)
	getRestaurant: async (req, res, next) => {
		try {
			const restaurant = await Restaurant.findById(req.params.id)
			return res.status(200).send({
				restaurant
			})
		} catch (error) {
			return res.status(422).send({
				message: "no Restaurant with that id"
			})
		}
	},

	updateRestaurant: async (req, res, next) => {
		await Restaurant.findByIdAndUpdate(
			req.params.id, {
				$set: req.body
			}, {
				new: true
			},
			async (err, restaurant) => {
				if (err) {
					return res.status(404).send({
						message: err
					})
				} else if (!restaurant) {
					return res.status(404).send({
						message: "no result"
					})
				} else {
					return res.status(200).send({
						message: "restaurant updated",
						restaurant
					})
				}
			}
		)
	},
	deleteRestaurant: async (req, res, next) => {
		try {
			Restaurant.findOneAndRemove({
				_id: req.params.id
			}).exec(async (err, result) => {
				console.log(result)
				if (err) {
					return res.status(404).send({
						message: "problem with finding restaurant"
					})
				}
				if (!result) {
					return res.status(404).send({
						message: "Restaurant not found"
					})
				} else {
					return res.status(204).send({
						message: "user deleted successfully"
					})
				}
			})
		} catch (error) {
			return res.status(404).send({
				message: "Problem with deleting restaurant"
			})
		}
	}
}