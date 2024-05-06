// instanceRoutes.js
const express = require('express');
const router = express.Router();
const instanceController = require('../controller/instanceController');

router.get('/', instanceController.getAllInstances);
router.post('/', instanceController.createInstance);
router.delete('/:id', instanceController.deleteInstance);

module.exports = router;
