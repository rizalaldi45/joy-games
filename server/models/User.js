const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email not valid !')
            }
        }
    },
    password: {
        type: String,
        min: 5,
        required: true
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
}, {timestamps: true})

UserSchema.statics.login = async (email, password)=>{
    const users = await User.findOne({email})

    if(!users){
        throw Error('User Not Found !')
    }

    const auth = await bcrypt.compare(password, users.password)

    if(!auth){
        throw Error('Password Incorrect !')
    }

    return users
}

UserSchema.methods.generateToken = async function(){
    const users = this
    const token = await jwt.sign({ id: users._id }, process.env.JWT_SECRET)
    users.tokens = users.tokens.concat({token})
    await users.save()
    return token
}

UserSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User