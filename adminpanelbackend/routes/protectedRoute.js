// protectedRoute.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const UserController = require('../controller/UserController');

// Protected route accessible only to admin users
router.get('/admin-route', authMiddleware.authenticate, (req, res) => {
  // Check if user has admin role
  if (!req.user.roles.includes('admin')) {
    return res.status(403).json({ message: 'Access forbidden' });
  }

  // Handle route logic for admin users
  // For example:
  res.json({ message: 'Admin route accessed successfully' });
});

module.exports = router;
