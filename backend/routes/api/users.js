const express = require("express");
const router = express.Router();
const jwtDecode = require("jwt-decode");
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/baseuserAuth");
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

router.post("/", [
  check("email", "Please include a valid email").isEmail(),
  check("password", "please is required").exists()
],async (req, res, next) => {
  // console.log("body");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    console.log("user check");
    // const user = await User.findById(req.user.id).select("-password");
    const user = await User.findOne({email:email});
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "invalid credential" }] });
    }
    console.log("user", user)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: [{ msg: "invalid credential" }] });
    }
    // return res.json(user);

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
    // return res.json(payload)

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 3600000
      },
      (err, token) => {
        if (err) throw err;
        console.log(jwtDecode(token));
        return res.json({ token });
      }
    );

    
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("server error");
  }


});

module.exports = router;
