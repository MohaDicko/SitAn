// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.Userid); // Attach user info to request object
    console.log('user',req.user)
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Token expired or invalid' });
  }
};

const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
  };
};

module.exports = { verifyToken, checkRole };
