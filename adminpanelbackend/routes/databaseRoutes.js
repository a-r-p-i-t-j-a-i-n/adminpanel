const express = require('express');
const router = express.Router();
const databaseController = require('../controller/databaseController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes
router.get('/', authMiddleware.authenticate, databaseController.getAllDatabases);
router.post('/', authMiddleware.authenticate, databaseController.createDatabase);
router.delete('/:id', authMiddleware.authenticate, databaseController.deleteDatabase);

module.exports = router;
