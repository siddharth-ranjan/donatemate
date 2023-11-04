//  models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  
  ngophone: String,
  ngoemail: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
