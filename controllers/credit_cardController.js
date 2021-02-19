const CreditCard = require('../models/credit_cardModel')

exports.createCreditCard = (req, res) => {
    const credit_card = new CreditCard(req.body)

    credit_card.save((err, credit_card) => {
        if(err){
            res.status(400).json({
                error: 'bad Request !'
            })
        }
        res.json({
            credit_card
        })
    })
}


exports.allCreditCard = (req, res) => {

    CreditCard.find()
    .populate('compte')
    .exec((err, credit_card) => {
        if(err){
            return res.status(500).json({
                error: "Credit Card not found"
            })
        }

        res.json({
            credit_card
        })
    })
}