const jwt = require('jsonwebtoken')
const User = require('../models/User')

let autho = async (req, res, next)=>{
    try{
       let token = req.header('Authorization')
       const verify = jwt.verify(token, process.env.JWT_SECRET)
       const users = await User.findOne({_id: verify.id, 'tokens.token':token})
       
       if(!users){
            throw Error('Token Not Valid !')
       }
       
       req.token = token
       req.user = users

       next()

    }catch(e){
        res.status(500).send(`Pleasse login !`)
    }
}

module.exports = autho