const jwt = require("jsonwebtoken");
const config = require("../config/database");
const User = require("../models/User");

// Authenticate user with JWT token
exports.authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, config.secretKey);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid token. User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token." });
  }
};
