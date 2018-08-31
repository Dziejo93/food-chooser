const express = require("express")
const mongoose = require("mongoose")
const User = require("../models/user-model")
const Bcrypt = require("../helpers/Bcrypt")

module.exports = {
    //CRUD Users
    getUsers: async (req, res, next) => {
            try {
                const users = await User.find({})
                if (!users) {
                    return res.status(404).send({
                        message: "no users"
                    })
                } else {
                    return res.status(200).send({
                        users
                    })
                }
            } catch (error) {
                return res.status(404).send({
                    message: "error"
                })
            }
        },
        deleteUsers: async (req, res, next) => {
                try {
                    const deleteUsers = await User.deleteMany({})
                    return res.status(204).send({
                        message: "all users deleted"
                    })
                } catch (error) {
                    return res.status(404).send({
                        message: "Problem with deleting users"
                    })
                }
            },
            //////////////////////methods for user///////////////////////
            postUser: async (req, res, next) => {
                    try {
                        const findUser = await User.findOne({
                            'local.username': req.body.username
                        })
                        console.log(
                            req.body
                        )

                        if (!findUser) {
                            const newUser = await new User({
                                "local.username": req.body.username,
                                "local.password": req.body.password,
                                "local.signed": new Date().getTime()
                            }).save()
                            res.status(200).send({
                                message: "user created",
                                newUser
                            })
                        } else {
                            return res.status(422).send({
                                message: "there is user with that name"
                            })
                        }
                    } catch (error) {
                        res.status(404).send({
                            message: "error"
                        })
                    }
                },

                getUser: async (req, res, next) => {
                        try {
                            const user = await User.findById(req.params.id)
                            return res.status(200).send({
                                user
                            })
                        } catch (error) {
                            return res.status(404).send({
                                message: "no user with that id"
                            })
                        }
                    },

                    putUser: async (req, res, next) => {
                            const userUpdate = await User.findByIdAndUpdate(
                                req.params.id, {
                                    $set: req.body
                                }, {
                                    new: true
                                },
                                async (err, result) => {
                                    if (err) {
                                        return res.status(404).send({
                                            message: err
                                        })
                                    } else if (!result) {
                                        return res.status(404).send({
                                            message: "no result"
                                        })
                                    } else {
                                        return res.status(200).send({
                                            message: "user updated",
                                            result
                                        })
                                    }
                                }
                            )
                        },

                        deleteUser: async (req, res, next) => {
                            try {
                                User.findOneAndRemove({
                                    _id: req.params.id
                                }).exec(async (err, result) => {
                                    console.log(result)
                                    if (err) {
                                        return res.status(404).send({
                                            message: "problem with finding user"
                                        })
                                    }
                                    if (!result) {
                                        return res.status(404).send({
                                            message: "user not found"
                                        })
                                    } else {
                                        return res.status(204).send({
                                            message: "user deleted successfully"
                                        })
                                    }
                                })
                            } catch (error) {
                                return res.status(404).send({
                                    message: "Problem with deleting user"
                                })
                            }
                        }
}