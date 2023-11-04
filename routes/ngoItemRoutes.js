// routes/ngoItemRoutes.js

const express = require('express');
const router = express.Router();
const NgoItem = require('../models/NgoItems'); // Import the NgoItem model

// Route to get all NGO items
router.get('/ngo-items', async (req, res) => {
  try {
    const ngoItems = await NgoItem.find();
    if(ngoItems.length === 0){
      res.json({
        "timestamp": new Date(),
        "status": 404,
        "error":"No Items found",
        "message":"No Items found",
      });
      return;
    }

    res.json(ngoItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new NGO item
router.post('/ngo-items', async (req, res) => {
  const { ngoid, itemname, date } = req.body;

  try {
    const item = await NgoItem.find({ngoid, itemname});
    if(item.length !== 0){
      res.json({"message": "Duplicate data found"});
      return;
    }
    const newNgoItem = new NgoItem({
      ngoid,
      itemname,
      date,
    });
    await newNgoItem.save();
    res.json(newNgoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add routes for updating and deleting NGO items as needed.

module.exports = router;
