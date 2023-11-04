const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  ngoname: {
    type: String,
    required: true,
  },
  ngophone: Number,
  ngoemail: String,
});

const Ngo = mongoose.model('Ngo', ngoSchema);
module.exports = Ngo;