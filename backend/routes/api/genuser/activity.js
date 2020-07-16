const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/genuserAuth");
const { check, validationResult } = require("express-validator");
const Order = require("../../../models/order");
const Crops = require("../../../models/crops");
const genUser = require("../../../models/genuser");
const { GenUser } = require("../../../helpers/roles");
const Farmer = require("../../../models/farmer");

router.get("/get-cart", auth, async (req, res, next) => {
  try {
    const cropId = await genUser.findById(req.user.id);
    res.json(cropId.cart);
  }
  catch (e) {
    res.status(500).json({ "msg": "something went wrong" });
  }
});

router.post("/add-cart", auth, async (req, res, next) => {
  try {
    const crop = await Crops.findById(req.body.cropsId);
    const farmerData = await Farmer.findById(req.body.farmerId);
    const userData = await genUser.findById(req.user.id);
    const cartItem = {
      productId: crop,
      quantity: req.body.quantity,
      farmerId: farmerData
    }
    console.log('cart item is ', cartItem);
    userData.cart.items.push(cartItem);
    await userData.save();
    res.status(200).json({ message: "items added to cart", cart: cartItem });
  } catch (e) {
    res.status(500).json({"msg":"Something went wrong"});
  }
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
