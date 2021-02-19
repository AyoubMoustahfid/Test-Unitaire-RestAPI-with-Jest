const Compte = require('../models/compteModel')

exports.createCompte = (req, res) => {
    const compte = new Compte(req.body)

    compte.save((err, compte) => {
        if(err){
            res.status(404).json({
                error: "bad Request !!"
            })
        }

        res.json({
            compte: compte
        })
    })
}


exports.compteId = (req, res, next, id) => {
   
    Compte.findById(id).exec((err, compte) => {
        if(err || !compte){
            return res.status(404).json({
                error : "Owner not found !"
            })
        }

        req.compte = compte;
        next()
    })
}


exports.allCompte = (req, res) => {

    Compte.find()
    .populate('agence')
    .populate('owner')
    .exec((err, compte) => {
        if(err){
            return res.status(500).json({
                error: "Compte not found"
            })
        }

        res.json({
            compte
        })
    })
}