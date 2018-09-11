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
				message: "error"
			})
			next()
		}
	},

	postGoogleCode: async (req, res, next) => {
		const code = req.body.googleCode
		console.log(code)

		oauth2Client.getToken(code, async (err, tokens) => {
			if (err) {
				console.log("dupa", err)
				res.status(404).send({
					message: "err"
				})
			} else {

				oauth2Client.setCredentials(tokens)

				plus.people.get({userId:"me",auth:oauth2Client},async(err,response)=>{
					if(err){console.log(err)
					}else{
						console.log(response)

					}
				})
				console.log(tokens.access_token)


				res.status(200).send({
					tokens
				})
				//  oauth2Client.setCredentials({access_token:tokens.access_token})

				// const me = await plus.people.get({ userId: "me" })
				// console.log(me)

				// const userGoogleId = me.data.id
				// const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value

				// res.status(200).send({
				// 	id:userGoogleId,
				// 	gmail:userGoogleEmail,
				// 	tokens:tokens})}


			}
		})
	}



}