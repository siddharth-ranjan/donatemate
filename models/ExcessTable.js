
// models/ExcessTable.js
const mongoose = require('mongoose');

const excessTableSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  userid: {
    type: Number,
    required: true,
  },
});

const ExcessTable = mongoose.model('ExcessTable', excessTableSchema);
module.exports = ExcessTable;
