const mongoose = require('mongoose');

const instanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  host: {
    type: String,
    required: true
  },
  port: {
    type: Number,
    required: true
  },
  databases: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Database'
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Instance = mongoose.model('Instance', instanceSchema);

module.exports = Instance;
