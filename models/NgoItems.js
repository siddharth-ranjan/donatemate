// models/NgoItem.js
const mongoose = require('mongoose');

const ngoItemSchema = new mongoose.Schema({
  ngoid: {
    type: Number,
    required: true,
  },
  itemname: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const NgoItem = mongoose.model('NgoItem', ngoItemSchema);
module.exports = NgoItem;