const mongoose = require('mongoose');

// Connection URL
const uri = "mongodb+srv://arpitjian25:cyZNWNVEPtuE7uKS@apnakirana.as0bmbm.mongodb.net/";

// Database Name
const dbName = 'adminpanel';

// Mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to the MongoDB cluster
async function connect() {
  try {
    await mongoose.connect(uri + dbName, options);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
