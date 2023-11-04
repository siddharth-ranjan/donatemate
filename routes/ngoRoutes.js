// routes/ngoRoutes.js

const express = require('express');
const router = express.Router();
const Ngo = require('../models/Ngo'); // Import the Ngo model

// Route to get all NGOs
router.get('/ngos', async (req, res) => {

  try {
    const ngos = await Ngo.find();
    if(ngos.length === 0){
      res.json({
        "timestamp": new Date(),
        "status": 404,
        "error":"No NGO found",
        "message":"No NGO found",
    });
    return;
    }
    // res.json({"ngos":"work"});  
    res.json(ngos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new NGO
router.post('/ngos', async (req, res) => {
  const { ngoname, ngophone, ngoemail, ngopassword } = req.body;

  try {
    const ngo = await Ngo.find({ngoname, ngophone, ngoemail});
    if(ngo.length !== 0){
      res.json({"message": "Duplicate Ngo found"});
      return;
    }
    const newNgo = new Ngo({
      ngoname,
      ngophone,
      ngoemail,
      ngopassword,
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
