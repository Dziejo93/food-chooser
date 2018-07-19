const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    authProvider: String,
    authProviderID: String
})

// userSchema.pre('save', function (next) {
//     const user = this
//     this.hashPassword(user.password, function (err, hash) {
//         if (err) {
//             return next(err)
//         }
//         user.password = hash
//         next()
//     })
// })

// userSchema.methods.hashPassword = function (password, cb) {
//         bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS), (err, salt) => {
//         if (err) {
//             return cb(err)
//         }
//         bcrypt.hash(password, salt, (err, hash) => {
//             if (err) {
//                 return cb(err)
//             }
//             return cb(null, hash);
//         })
//     })
// }



const User = mongoose.model('user', userSchema)

module.exports = User