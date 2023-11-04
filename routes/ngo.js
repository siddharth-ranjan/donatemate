// routes/ngo.js
const express = require('express');
const router = express.Router();
const NgoController = require('../controllers/NgoController');

// Define routes
router.get('/ngo',async (req, res) => {
    try {
      const ngos = await Ngo.find();
      res.json(ngos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
router.post('/ngo', NgoController.createNgo);

module.exports = router;