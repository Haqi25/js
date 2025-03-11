const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Akses ditolak!" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token tidak valid!" });
  }
};

module.exports = authMiddleware;
