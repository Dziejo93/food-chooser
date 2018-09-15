const express = require("express")
const mongoose = require("mongoose")
const Order = require("../models/order-model")
const User = require("../models/user-model")
module.exports = {
	getOrders: async (req, res, next) => {
		try {
			const orders = await Order.find({})
			if (!orders) {
				return res.status(404).send({
					message: "no users"
				})
			} else {
				return res.status(200).send({
					orders
				})
			}
		} catch (error) {
			return res.status(404).send({
				message: "error"
			})
		}
	},
	postOrder: async (req, res, next) => {
		try {

			const issuer = await User.findById(req.body.issuerId)
			const newOrder = await new Order({
				"issuedBy": issuer,
				"completed": null
			}).save()
			res.status(200).send(newOrder)
		} catch (err) {
			res.status(404).send(err)
		}
	}, deleteOrders: async (req, res, next) => {
		try {
			await Order.deleteMany({})
			return res.status(204).send({
				message: "all users deleted"
			})
		} catch (error) {
			return res.status(404).send({
				message: "Problem with deleting users"
			})
		}
	},

	getOrder: async (req, res, next) => {
		try {
			const order = await Order.findById(req.params.orderId)
			return res.status(200).send({
				order
			})

		} catch (error) {
			return res.status(404).send({
				message: "There is no order with that id"
			})
		}
	}





}