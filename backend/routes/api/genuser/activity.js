const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/genuserAuth");
const { check, validationResult } = require("express-validator");
const Order = require("../../../models/order");
const Crops = require("../../../models/crops");
const genUser = require("../../../models/genuser");

router.get("/get-cart", async (req, res, next) => {
  const cropId = await genUser.find();
  res.json(cropId[0].cart);
});

router.post("/add-cart", auth, async (req, res, next) => {
  // const prodId = req.body.cropId;
  const cropId = await Crops.findById(req.body.cropId);
  req.genUser.addToCart(cropId);
  res.status(200).json({ message: "items added to cart", cart: cropId });
});

router.post("/order", auth, async (req, res, next) => {
  const { user, crops } = req.body;
  order = new Order({
    user,
    crops
  });
  const data = await order.save();
  return res.status(201).json({ msg: "successful", order: data });
});

module.exports = router;
