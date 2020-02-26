const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const FarmerUser = require("../../../models/farmer/farmer");
const Role = require("../../../helpers/roles");
const User = require("../../../models/User");
const auth = require("../../../middleware/farmer/auth");

//get user api , post , public
router.get("/", auth, async (req, res, next) => {
  // console.log("body");

  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user.role || user.role != Role.Farmer) {
      return res.status(401).json({ msg: "Not authorized as a Farmer" });
    }
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("server error");
  }
});

router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or nmore character"
    ).isLength({
      min: 6
    })
  ],
  async (req, res, next) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;

    try {
      console.log(typeof User);
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already Exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new FarmerUser({
        name,
        email,
        avatar,
        password,
        role
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //return jsonwebtoken

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  }
);

router.post(
  "/print",
  [
    // check('email',"not a valid email").isEmail(),
    check("name", "name is not there")
      .not()
      .isEmpty()
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    return res.status(200).json({ print: "printed" });
  }
);

module.exports = router;
