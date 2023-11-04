const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  ngoid: {
    type: Number,
    required: true,
  },
  ngoname: {
    type: String,
    required: true,
  },
  ngophone: String,
  ngoemail: String,
});

const Ngo = mongoose.model('Ngo', ngoSchema);
module.exports = Ngo;