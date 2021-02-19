const express = require('express')
const {createAgence, allAgence} = require('./../controllers/agenceController')

const router = express.Router();

router.post('/create', createAgence)
router.get('/', allAgence)


module.exports = router