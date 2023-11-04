// routes/excessTableRoutes.js

const express = require('express');
const router = express.Router();
const ExcessTable = require('../models/ExcessTable'); // Import the ExcessTable model

// Route to get all excess items
router.get('/excess-items', async (req, res) => {
  try {
    const excessItems = await ExcessTable.find();
    if(excessItems.length === 0){
      res.json({
        "timestamp": new Date(),
        "status": 404,
        "error":"No Excess Items found",
        "message":"No Excess Items found",
      });
      return;
    }

    res.json(excessItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new excess item
router.post('/excess-items', async (req, res) => {
  const { itemname, userid } = req.body;

  try {
    const newExcessItem = new ExcessTable({
      itemname,
      userid,
    });
    await newExcessItem.save();
    res.json(newExcessItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add routes for updating and deleting excess items as needed.

module.exports = router;
