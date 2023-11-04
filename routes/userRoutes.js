// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to create a new user
router.post('/users', async (req, res) => {
  const { userid, username, usercontact } = req.body;

  try {
    const newUser = new User({
      userid,
      username,
      usercontact,
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
