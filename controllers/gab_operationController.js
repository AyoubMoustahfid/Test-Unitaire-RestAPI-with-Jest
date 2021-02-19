const GabOperation = require('../models/gab_opertationModel')

exports.createGabOperation = (req, res) => {
    const gabOperation = new GabOperation(req.body)

    gabOperation.save((err, gabOperation) => {
        if(err){
            res.status(400).json({
                error: 'bad Request !'
            })
        }
        res.json({
            gabOperation
        })
    })
}