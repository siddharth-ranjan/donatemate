// controllers/NgoController.js
const Ngo = require('../models/Ngo');
const NgoController = {
  getAllNgo: async (req, res) => {
    try {
      const ngos = await Ngo.find();
      res.json(ngos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  createNgo: async (req, res) => {
    try {
      const newNgo = new Ngo(req.body);
      await newNgo.save();
      res.json(newNgo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = NgoController;