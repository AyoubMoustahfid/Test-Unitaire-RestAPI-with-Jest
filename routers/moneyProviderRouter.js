const express = require('express')

const {createMoneyProvider} = require('../controllers/moneyProvider')

const router = express.Router();

router.post('/create', createMoneyProvider)

module.exports = router