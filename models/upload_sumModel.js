const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const uploadSumSchema = new mongoose.Schema({
    total_up: {
       type: Number,
       required: true,
       trim: true
    },
    money_provider: {
        type: ObjectId,
        ref: "MoneyProvider",
        trim : true,
        required: true
    },
    gab_operation: {
        type: ObjectId,
        ref: "GabOperation",
        trim : true,
        required: true
    }
})


module.exports = mongoose.model('UploadSum', uploadSumSchema)