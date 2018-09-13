const bcrypt = require("bcrypt")
//hashing password with salt

async function getHash(password) {
	const hashedPassword = await new Promise((resolve, reject) => {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) reject(err)
			else {
				bcrypt.hash(password, salt, (err, hash) => {
					if (err) reject(err)
					resolve(hash)
				})
			}
		})
	})
	return hashedPassword
}

async function comparePass(password, encrypted) {
	const res = await new Promise((resolve, reject) => {
		bcrypt.compare(password, encrypted, (err, result) => {
			if (err) reject(err)
			else resolve(result)
		})
	})
	return res
}





module.exports = {
	getHash,
	comparePass
}