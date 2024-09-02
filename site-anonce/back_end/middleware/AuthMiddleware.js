const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = require(__dirname + "/../config/jwt.json")[
  "secret-key"
];

exports.verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: "Authentication failed",
    });
    return;
  }
  try {
    token = token.split(" ")[1];
    if (!token) {
      res.status(401).json({
        message: "Authentication failed",
      });
      return;
    }

    const payload = jwt.verify(token, JWT_SECRET_KEY);
    if (!payload) {
      res.status(401).json({
        message: "Token expired or invalid",
      });
      return;
    }
    console.log("payload", payload);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: String(error),
    });
  }
};


exports.validRole = (roles) => {
  return async (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
};
