const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const moneyProviderSchema = new mongoose.Schema({

    matricule: {
        type: String,
        trim : true,
        required: true,
    }
})


module.exports = mongoose.model('MoneyProvider', moneyProviderSchema)