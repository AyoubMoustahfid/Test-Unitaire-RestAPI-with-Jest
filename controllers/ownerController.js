const Owner = require('../models/ownerModel');

exports.createOwner = (req, res) => {

   const owner = new Owner(req.body);

   owner.save((err, owner) => {
       if(err) {
           return res.status(400).json({
               error: "bad Request !"
           })
       }

       res.json({
           owner : owner
       })
   })
}

exports.allOwner = (req, res) => {

    Owner.find()
    .exec((err, owners) => {
        if(err){
            return res.status(500).json({
                error: "Owner not found"
            })
        }

        res.json({
            owners
        })
    })
}

exports.deleteOwner = (req, res) => {
    let owner = req.owner;

    owner.remove((err, owner) => {
        if(err){
            return res.status(404).json({
                error: "Owner not found ! "
            })
        }

        res.status(204).json({
            message: "Owner deleted !"
        })
    })
}

exports.ownerId = (req, res, next, id) => {
   
    Owner.findById(id).exec((err, owner) => {
        if(err || !owner){
            return res.status(404).json({
                error : "Owner not found !"
            })
        }

        req.owner = owner;
        next()
    })
}

exports.updateOwner = (req, res) => {
    let owner = req.owner;
    owner.fullname = req.body.fullname;
    owner.phone = req.body.phone;
    owner.cin = req.body.cin;

    owner.save((err, owner) => {
        if(err){
            return res.status(400).json({
                error: 'bad request !'
            })
        }

        res.json({
            owner,
            message: 'Owner Updated'
        })
    })
    
}