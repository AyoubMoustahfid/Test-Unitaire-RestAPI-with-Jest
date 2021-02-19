const express = require('express');
const {createCompte, allCompte} = require('./../controllers/compteController')

const router = express.Router()

router.post('/create', createCompte);
router.get('/', allCompte);


module.exports = router