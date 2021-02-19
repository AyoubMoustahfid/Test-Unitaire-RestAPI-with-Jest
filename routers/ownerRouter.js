const express = require('express')
const {allOwner, createOwner, updateOwner, deleteOwner, ownerId} = require('./../controllers/ownerController')


const router = express.Router();

router.get('/', allOwner)
router.post('/create', createOwner)
router.put('/:ownerId', updateOwner)
router.delete('/:ownerId', deleteOwner)


router.param('ownerId', ownerId)

module.exports = router