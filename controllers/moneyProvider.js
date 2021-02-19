const MoneyProvider = require('../models/money_providerModel')

exports.createMoneyProvider = (req, res) => {
    const moneyProvider = new MoneyProvider(req.body)

    moneyProvider.save((err, moneyProvider) => {
        if(err){
            res.status(400).json({
                error: "bad Request !"
            })
        }

        res.json({
            moneyProvider
        })
    })
}