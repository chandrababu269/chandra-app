const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express(); // Ensure this line is present to initialize Express
const PORT = process.env.PORT || 5000;

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

// Middlewares
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});
