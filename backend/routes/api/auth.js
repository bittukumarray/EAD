const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");
//resgister user , post , public
router.get("/", auth, async (req, res, next) => {
  console.log("body");

  try {
    const user = await User.findById(req.user.id).select("-password");

    return res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("server error");
  }

  res.send("auth route");
});

module.exports = router;
