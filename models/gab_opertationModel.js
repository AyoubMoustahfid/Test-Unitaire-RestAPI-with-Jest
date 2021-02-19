const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const gabOperationSchema = new mongoose.Schema({

    credit_card: {
       type: ObjectId,
       ref: "CreditCard",
       required: true,
       trim: true,
    },
    pin: {
        type: Number,
        trim : true,
        required: true,
    }
})


module.exports = mongoose.model('GabOperation', gabOperationSchema)