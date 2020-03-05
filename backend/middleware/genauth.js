const jwt = require("jsonwebtoken");
const config = require("config");
const Role = require("../helpers/roles");

module.exports = function(req, res, next) {
  // console.log("in auth ");
  const token = req.header("x-auth-token");
  const role = req.body.role;
  console.log("in gen", role);
  if (!token) {
    return res.status(401).json({ msg: "no token , authorization denied" });
  }
  if (!role || role != Role.GenUser && role!=Role.Farmer) {
    return res.status(401).json({ msg: "Not authorized as a user" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    if (!decoded) {
      return res.status(401).json({ msg: "Not Authenticated" });
    }
    // console.log("decoded is ", decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "token invalid" });
  }
};
