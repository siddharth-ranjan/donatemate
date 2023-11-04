// routes/ngo.js
const express = require('express');
const router = express.Router();
const NgoController = require('../controllers/NgoController');

// Define routes
router.get('/ngo', NgoController.getAllNgo);
router.post('/ngo', NgoController.createNgo);

module.exports = router;