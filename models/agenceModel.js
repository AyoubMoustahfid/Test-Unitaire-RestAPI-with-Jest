const mongoose = require('mongoose')


const agenceSchema = new mongoose.Schema({

    name: {
       type: String,
       required: true,
       trim: true,
    },
    city: {
        type: String,
        trim : true,
        required: true
    }
})


module.exports = mongoose.model('Agence', agenceSchema)