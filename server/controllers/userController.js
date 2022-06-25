const User = require('../models/User')

exports.register = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({status: 'err', message: err})
    }
}

exports.login = async (req, res) => {
    try{
        const data = await User.login(req.body.email, req.body.password)
        const userToken = await data.generateToken()
        data.password = undefined
        res.status(200).json({data, userToken})
    }catch (err) {
        res.status(500).json({status: 'err', message: err})
    }
}

exports.logout = async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send('Logout Successfully !')
    }catch(e){
        res.status(500).send(`Internal Server Error !  ${e} !`)
    }
}