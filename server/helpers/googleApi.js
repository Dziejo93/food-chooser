import { google } from "googleapis"

const googleConfig = {
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	redirect: "http://localhost:8080/google"
}
const defaultScope = [
	"https://www.googleapis.com/auth/plus.me",
	"https://www.googleapis.com/auth/userinfo.email",
]

async function createConnection() {
	return new google.auth.OAuth2(
		googleConfig.clientId,
		googleConfig.clientSecret,
		googleConfig.redirect
	)
}
  
async function getConnectionUrl(auth) {
	return auth.generateAuthUrl({
		access_type: "offline",
		prompt: "consent",
		scope: defaultScope
	})
}
  
async  function getGooglePlusApi(auth) {
	return google.plus({ version: "v1", auth })
}
async function urlGoogle() {
	const auth = await createConnection()
	const url = await getConnectionUrl(auth)
	return url
}

async function getGoogleAccountFromCode(code)  {

	const data = await auth.getToken(code)
	const tokens = await data.tokens
	const auth =await  createConnection()
	await auth.setCredentials(tokens)
	const plus =await getGooglePlusApi(auth)
	const me = await plus.people.get({ userId: "me" })
	const userGoogleId = me.data.id
	const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value
	return {
		id: userGoogleId,
		email: userGoogleEmail,
		tokens: tokens,
	}
}

module.exports= {
	googleConfig,
	defaultScope,
	urlGoogle,
	getGooglePlusApi,
	getGoogleAccountFromCode,
	getConnectionUrl,
	createConnection}