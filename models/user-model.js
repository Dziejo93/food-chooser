const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const userSchema = new Schema({

    local: {
        username: String,
        password: String,
        token: {
            token: String,
            expiryDate: Date
        }
    },
    google: {
        id: String,
        token: {
            token: String,
            expiryDate: Date
        },
        name: String
    },

})



userSchema.pre('save', function (next) {
    const user = this
    if (this.isModified('password') || this.isNew)
        this.hashPassword(user.local.password, function (err, hash) {
            if (err) {
                return next(err)
            }
            user.local.password = hash
            next()
        })
})

userSchema.methods.hashPassword = function (password, cb) {
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS), (err, salt) => {
        if (err) {
            return cb(err)
        }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return cb(err)
            }
            return cb(null, hash);
        })
    })
}

const User = mongoose.model('User', userSchema)


module.exports = User