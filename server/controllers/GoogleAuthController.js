const User = require("../models/user-model")
const JWT = require("jsonwebtoken")
const GoogleApi =require("../helpers/googleApi")


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
		const url =await GoogleApi.urlGoogle()
		if(url){
			res.status(200).send(url)
		}else{
			res.status(404).send({message:"error"})
			next()
		}
	},

	postGoogleCode: async(req,res,next)=>{
		const code = req.body.googleCode
		const user = await GoogleApi.getGoogleAccountFromCode(code)
		console.log(user)


	}



}
