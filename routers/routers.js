const { getAllUsers, deleteUser, createUser, updatedUser } = require('../controller/users.controller');

const router = require('express').Router();

router.get('/', getAllUsers)
router.delete('/', deleteUser)
router.post('/', createUser)
router.patch('/', updatedUser)


module.exports= router;