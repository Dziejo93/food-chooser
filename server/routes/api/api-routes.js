const express = require("express")
const router = express.Router()
const passport = require("passport")
const UserController = require("../../controllers/UserController")
const PassportController = require("../../controllers/PassportController")
const ProductController = require("../../controllers/ProductController")
const RestaurantController = require("../../controllers/RestaurantController")
const OrdersController = require("../../controllers/OrdersController")
const GoogleAuthController = require("../../controllers/GoogleAuthController")


///auth routes
router.route("/login")

	.post(...PassportController.localLogin)


router.route("/register")
	.post(PassportController.localSignUp)


router.route("/google")
	.post(GoogleAuthController.postGoogleCode)
	.get(GoogleAuthController.getGoogleUrl)

// router.route("/google")
// 	.get(passport.authenticate("google", {
// 		scope: ["profile"]
// 	}), PassportController.googleLogin)


// router.route("/google/redirect")
// 	.get(...PassportController.googleRedir)

//user routes

router.route("/users")
	.get(UserController.getUsers)
	.post(UserController.postUser)
	.delete(UserController.deleteUsers)


router.route("/users/:id")
	.get(UserController.getUser)
	.put(UserController.putUser)
	.delete(UserController.deleteUser)

//product routes
router.route("/products")
	.get(ProductController.getProducts)
	.post(ProductController.postProduct)
	.delete(ProductController.deleteProducts)

router.route("/products/:id")
	.get(ProductController.getProduct)
	.put(ProductController.updateProduct)
	.delete(ProductController.deleteProduct)

//restaurants routes
router.route("/restaurants")
	.get(RestaurantController.getRestaurants)
	.post(RestaurantController.postRestaurant)
	.delete(RestaurantController.deleteRestaurants)

router.route("/restaurants/:id")
	.get(RestaurantController.getRestaurant)
	.put(RestaurantController.updateRestaurant)
	.delete(RestaurantController.deleteRestaurant)

router.route("/restaurants/:restaurantId/products")
	.get(RestaurantController.getRestaurantsProducts)
//
router.route("/restaurants/:restaurantId/products/:productId")
	.put(RestaurantController.putProductInRestaurant)
// .delete

router.route("/orders")
	.get(OrdersController.getOrders)
	.post(OrdersController.postOrder)
	.delete(OrdersController.deleteOrders)


router.route("/orders/:orderId")
	.get(OrdersController.getOrder)

module.exports = router