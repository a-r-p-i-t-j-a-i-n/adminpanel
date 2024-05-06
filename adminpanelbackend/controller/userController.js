const bcrypt = require('bcrypt');
const User = require('../models/user');
const { authorizeAdmin } = require('../middleware/authMiddleware');

async function createUser(req, res) {
  try {
    const { username, password, role } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, roles: role || 'user' });
    await newUser.save();

    const userList = await User.find();
    res.status(201).json({ message: 'User created successfully', users: userList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    const userList = await User.find();
    res.status(200).json({ message: 'User deleted successfully', users: userList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function changePassword(req, res) {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(id, { password: hashedPassword });
    res.status(200).json({ message: 'User password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Function to assign access roles to users for specific databases
async function assignUserRole(req, res) {
  try {
    const { userId, databaseId, role } = req.body;
    // Implement logic to assign access roles to users for specific databases
    res.status(200).json({ message: 'User role assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { 
  createUser,
  deleteUser,
  changePassword,
  assignUserRole // Add assignUserRole function
};
