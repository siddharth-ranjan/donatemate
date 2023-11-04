// models/SimilarItems.js
const mongoose = require('mongoose');

const similarItemsSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  similarItems: [String],
});

const SimilarItems = mongoose.model('SimilarItems', similarItemsSchema);
module.exports = SimilarItems;