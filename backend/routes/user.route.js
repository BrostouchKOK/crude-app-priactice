const express = require('express');
const { getAllUsers, createUser, updateUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/get-all-users',getAllUsers)
router.post('/create-user',createUser)
router.put('/update-user/:id',updateUser)

module.exports = router