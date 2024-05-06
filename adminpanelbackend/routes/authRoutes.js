// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Route for user login
router.post('/login', authController.login);

// Route for user signup
router.post('/signup', authController.signup);

module.exports = router;
