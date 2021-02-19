const mongoose = require('mongoose')


const ownerSchema = new mongoose.Schema({

    fullname: {
       type: String,
       required: true,
       trim: true,
    },
    phone: {
        type: String,
        trim : true,
        required: true,
        unique: true
    },
    cin: {
        type: String,
        trim : true,
        required: true,
        maxLength: 8,
        minLength: 8,
        unique: true
    }
})


module.exports = mongoose.model('Owner', ownerSchema)