const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Corrected import path
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware'); // Corrected import path and destructuring

// Route to get all users
 // Added authorizeAdmin middleware
 router.get('/users', authenticate, authorizeAdmin, userController.createUser);


// Route to create a new user
router.post('/users', authenticate, authorizeAdmin, userController.createUser); // Added authorizeAdmin middleware

// Route to delete a user by ID
router.delete('/users/:id', authenticate, authorizeAdmin, userController.deleteUser); // Added authorizeAdmin middleware

// Route to change user password
router.put('/users/change-password/:id', authenticate, userController.changePassword); // No need for authorizeAdmin middleware here

// Route to assign user to a database


module.exports = router;
