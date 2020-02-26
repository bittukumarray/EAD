const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // console.log("in auth ");
  const token = req.header("x-auth-token");
  const role = req.body.role;
  if (!token) {
    return res.status(401).json({ msg: "no token , authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    if (!decoded) {
      return res.status(401).json({ msg: "Not Authenticated" });
    }
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "token invalid" });
  }
};
