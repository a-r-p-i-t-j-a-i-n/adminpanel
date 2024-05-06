const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

async function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = await User.findById(decoded.user);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Check if user roles are present and not empty
    if (!user.roles || user.roles.length === 0) {
      return res.status(403).json({ message: 'User roles are not defined' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function authorizeAdmin(req, res, next) {
  // if (req.user || req.user.roles || req.user.roles.includes('admin')) {
  //   return res.status(403).json({ message: 'Access forbidden. Admin privileges required.', userRoles: req.user ? req.user.roles : null });
  // }
  next();
}

module.exports = { authenticate, authorizeAdmin };
