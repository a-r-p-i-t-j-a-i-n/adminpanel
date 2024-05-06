const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const connect = require('./db'); // Import the connect function from db.js
const authRoutes = require('./routes/authRoutes');
const config = require('./config');
const instanceRoutes = require('./routes/instanceRoutes');
const userRoutes = require('./routes/userRoutes');
const databaseRoutes = require('./routes/databaseRoutes');

app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/instances', instanceRoutes);
app.use('/api', userRoutes);
app.use('/database', databaseRoutes);

console.log('JWT_SECRET:', config.JWT_SECRET);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB
connect()
  .then(() => {
    // Start the server if MongoDB connection is successful
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Log error if MongoDB connection fails
    console.error('Failed to connect to MongoDB:', err);
  });
