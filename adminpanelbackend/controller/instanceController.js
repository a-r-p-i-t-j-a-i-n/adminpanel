// instanceController.js
const Instance = require('../models/Instance');

async function getAllInstances(req, res) {
  try {
    const instances = await Instance.find();
    res.status(200).json(instances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function createInstance(req, res) {
  try {
    const { name, host, port } = req.body;
    const newInstance = new Instance({ name, host, port });
    await newInstance.save();
    res.status(201).json({ message: 'Instance created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteInstance(req, res) {
  try {
    const { id } = req.params;
    await Instance.findByIdAndDelete(id);
    res.status(200).json({ message: 'Instance deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { getAllInstances, createInstance, deleteInstance };
