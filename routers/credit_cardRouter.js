const express = require('express')
const {compteId} = require('../controllers/compteController')
const {createCreditCard, allCreditCard} = require('../controllers/credit_cardController')


const router = express.Router()

router.post('/create/:compteId', createCreditCard)
router.get('/', allCreditCard)

router.param('/compteId', compteId)


module.exports = router