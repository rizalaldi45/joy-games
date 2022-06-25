const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('database connected !')
}).catch(() => {
    console.log('database connected failed !')
})