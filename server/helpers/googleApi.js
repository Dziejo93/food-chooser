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



module.exports = {
	plus,
	OAuth2,
	oauth2Client,
	url,
	
}