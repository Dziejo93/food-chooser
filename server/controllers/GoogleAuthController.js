const User = require("../models/user-model")
const JWT = require("jsonwebtoken")
const GoogleApi = require("../helpers/googleApi")
const {
	google
} = require("googleapis")
const plus = google.plus("v1")
const OAuth2 = google.auth.OAuth2
const oauth2Client = new OAuth2(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	"http://localhost:8080/google/"
)

const scopes = ["https://www.googleapis.com/auth/plus.me",
	"https://www.googleapis.com/auth/userinfo.email",

]

const url = oauth2Client.generateAuthUrl({
	access_type: "offline", // 'online' (default) or 'offline' (gets refresh_token)
	scope: scopes // If you only need one scope you can pass it as string
})

signToken = user => {
	return JWT.sign({
		iss: "food-chooser",
		sub: user.id,
		iat: new Date().getTime(), // current time
		exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
	},
	process.env.JWT_SECRET
	)
}

module.exports = {

	getGoogleUrl: async (req, res, next) => {
		if (url) {
			res.status(200).send(url)
		} else {
			res.status(404).send({
				message: "error with creating url"
			})
			next()
		}
	},

	postGoogleCode: async (req, res, next) => {
		//beautify code
		const code = req.body.googleCode
		oauth2Client.getToken(code, async (err, tokens) => {
			if (err) {
				res.status(404).send({
					message: "err"
				})
				next()
			} else {
				oauth2Client.setCredentials(tokens)
				plus.people.get({
					userId: "me",
					auth: oauth2Client
				}, async (err, response) => {
					if (err) {
						res.status(404).send(err)
						next()
					} else {
						const googleData= response.data
						const currentUser = await User.findOne({
							"google.id": googleData.id
						})
						if (currentUser) {
							const token = await signToken(currentUser)
							res.status(200).send({user:currentUser,token:token})
						} else {
							const newUser = await new User({
								"google.id": googleData.id,
								"google.name": googleData.emails[0].value,
							}).save()
							const token = await signToken(newUser)
							res.status(200).send({message:"new user created",user:newUser,token:token})
						}
					}
				})
			}
		})
	}



}