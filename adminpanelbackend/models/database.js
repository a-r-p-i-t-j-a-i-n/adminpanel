const mongoose = require('mongoose');

const databaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  instance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instance'
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Database = mongoose.model('Database', databaseSchema);

module.exports = Database;
