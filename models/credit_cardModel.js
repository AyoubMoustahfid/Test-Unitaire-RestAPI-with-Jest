const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const creditCardSchema = new mongoose.Schema({

    compte: {
       type: ObjectId,
       ref: "Compte",
       required: true,
       trim: true,
    },
    pin: {
        type: Number,
        trim : true,
        required: true,
        maxLength: 10,
        minLength: 10,
        unique: true
    },
    type: {
        type: String,
        trim : true,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model('CreditCard', creditCardSchema)