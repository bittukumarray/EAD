const express = require("express");
const router = express.Router();
const jwtDecode = require("jwt-decode");
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const User = require("../../models/User");

//get user api , post , public
router.get("/", auth, async (req, res, next) => {
  // console.log("body");

  try {
    console.log("user check");
    const user = await User.findById(req.user.id).select("-password");

    return res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("server error");
  }
});

module.exports = router;
