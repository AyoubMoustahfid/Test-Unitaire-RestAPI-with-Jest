const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const compteSchema = new mongoose.Schema({

    owner: {
       type: ObjectId,
       ref: 'Owner',
       required: true
    },
    agence: {
        type: ObjectId,
        ref: 'Agence',
        required: true
    },
    solde: {
        type: Number,
        trim : true,
        required: true,
        maxLength: 20,
        minLength: 1
    }
})


module.exports = mongoose.model('Compte', compteSchema)