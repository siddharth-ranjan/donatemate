// routes/ngoRoutes.js

const express = require('express');
const router = express.Router();
const Ngo = require('../models/Ngo'); // Import the Ngo model

// Route to get all NGOs
router.get('/ngos', async (req, res) => {
  try {
    const ngos = await Ngo.find();
    res.json(ngos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new NGO
router.post('/ngos', async (req, res) => {
  const { ngoname, ngophone, ngoemail } = req.body;

  try {
    const newNgo = new Ngo({
      ngoname,
      ngophone,
      ngoemail,
    });
    await newNgo.save();
    res.json(newNgo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add routes for updating and deleting NGOs as needed.

module.exports = router;
