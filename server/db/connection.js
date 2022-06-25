const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/joy-games`).then(() => {
    console.log('database connected !')
}).catch(() => {
    console.log('database connected failed !')
})