const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ngoRoutes = require('./routes/ngoRoutes');
const ngoItemRoutes = require('./routes/ngoItemRoutes');
const userRoutes = require('./routes/userRoutes');
const excessTableRoutes = require('./routes/excessTableRoutes');
const similarItemsRoutes = require('./routes/similarItemsRoutes');

const app = express();
const port = 5000;

// Set up CORS for cross-origin requests
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://siddharthranjan0909:Qwertyuiop@cluster0.h1fom41.mongodb.net/ngo-donation-portal');

// Include routes for each collection
app.get('/', (req, res) => {
  res.json({"message":"Congratulation! Server is working fine"});
});


app.use('/api', ngoRoutes);
app.use('/api', ngoItemRoutes);
app.use('/api', userRoutes);
app.use('/api', excessTableRoutes);
// app.use('/api', similarItemsRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
  console.error('Server failed to start:');
  console.error(err);
});



