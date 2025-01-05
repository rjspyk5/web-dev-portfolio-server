const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers?.authorization;
  if (!authHeader || authHeader.startsWith("Bearer "))
    return res.status(401).send({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.TOKENSECERT);
    req.user(decoded);
    next();
  } catch (error) {
    res.status(200).send({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
