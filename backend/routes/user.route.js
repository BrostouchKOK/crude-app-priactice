const express = require('express');
const { getAllUsers, createUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/get-all-users',getAllUsers)
router.post('/create-user',createUser)

module.exports = router