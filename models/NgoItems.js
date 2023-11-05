// models/NgoItem.js
const mongoose = require('mongoose');

const ngoItemSchema = new mongoose.Schema({
  
  itemname: {
    type: String,
    required: true,
  },
  numerOfTimer: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
  ngoid: {
    type: Number,
    required: true,
  },
});

const NgoItem = mongoose.model('NgoItem', ngoItemSchema);
module.exports = NgoItem;