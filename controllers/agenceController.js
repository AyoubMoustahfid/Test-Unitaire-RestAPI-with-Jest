const Agence = require('../models/agenceModel')


exports.createAgence = (req, res) => {
  const agence = new Agence(req.body)

  agence.save((err, agence) => {
      if(err){
          return res.status(400).json({
              error: 'bad request !'
          })
      }

      res.json({
          agence: agence
      })
  })
}

exports.allAgence = (req, res) => {

    Agence.find()
    .exec((err, agence) => {
        if(err){
            return res.status(500).json({
                error: "Agence not found"
            })
        }

        res.json({
            agence
        })
    })
}
