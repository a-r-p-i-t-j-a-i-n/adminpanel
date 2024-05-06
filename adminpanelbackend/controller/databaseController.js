const Database = require('../models/database');

// Controller function for getting all databases
async function getAllDatabases(req, res) {
  try {
    const databases = await Database.find();
    res.status(200).json(databases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function for creating a database
async function createDatabase(req, res) {
  try {
    const { name } = req.body;
    const newDatabase = new Database({ name });
    await newDatabase.save();
    res.status(201).json({ message: 'Database created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function for deleting a database
async function deleteDatabase(req, res) {
  try {
    const { id } = req.params;
    await Database.findByIdAndDelete(id);
    res.status(200).json({ message: 'Database deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { getAllDatabases, createDatabase, deleteDatabase };
