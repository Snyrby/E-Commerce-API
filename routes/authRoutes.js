const express = require('express');
const router = express.Router();

const { login, logout, register } = require('../controllers/authController');

router.route('/login').post(login); // chain base on use
router.route('/logout').get(logout);
router.route('/register').post(register);
module.exports = router;