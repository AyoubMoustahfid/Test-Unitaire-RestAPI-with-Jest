const express = require('express')
const {createGabOperation} = require('../controllers/gab_operationController')

const router = express.Router()

router.post('/create', createGabOperation)

module.exports = router