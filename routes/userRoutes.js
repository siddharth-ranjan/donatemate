// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    if(users.length === 0){
      res.json({
        "timestamp": new Date(),
        "status": 404,
        "error":"No user found",
        "message":"No user found",
      });
      return;
    }

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new user
router.post('/users', async (req, res) => {
  const { userid, username, userphone, useremail } = req.body;

  try {
    const user = await User.find({userid, username, userphone, useremail});
    if(user.length !== 0){
      res.json({"message": "Duplicate user found"});
      return;
    }
    const newUser = new User({
      userid,
      username, 
      userphone, 
      useremail,
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add routes for updating and deleting users as needed.

module.exports = router;
