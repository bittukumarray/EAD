const express = require("express");
const router = express.Router();

//resgister user , post , public
router.get("/a", (req, res, next) => {
  console.log("body");
  res.send("auth route");
});

module.exports = router;
