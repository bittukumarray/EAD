const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/genuserAuth");
const { check, validationResult } = require("express-validator");
const Order = require("../../../models/order");
const Crops = require("../../../models/crops");
const genUser = require("../../../models/genuser");
const Farmer = require("../../../models/farmer");

router.post("/get-cart", auth, async (req, res, next) => {
  try {
    console.log("user id", req.user.id);
    const cropId = await genUser.findById(req.user.id);
    console.log("cropid", cropId);
    res.json(cropId.cart);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "something went wrong" });
  }
});

router.post("/add-cart", auth, async (req, res, next) => {
  try {
    const crop = await Crops.findById(req.body.cropsId);
    const farmerData = await Farmer.findById(req.body.farmerId);
    const userData = await genUser.findById(req.user.id);
    console.log(farmerData);
    const cartItem = {
      _id: crop,
      productId: crop,
      quantity: req.body.quantity,
      farmerId: farmerData
    };
    // console.log("cart item is ", cartItem);
    userData.cart.items.push(cartItem);
    await userData.save();
    res
      .status(200)
      .json({ msg: "item added to cart", cart: cartItem, status: 1 });
  } catch (e) {
    res.status(500).json({
      msg: "maybe you are missing some fields",
      status: 0
    });
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

router.post("/get-orders", auth, async (req, res, next) => {
  try {
    var userId = req.user.id;
    const orders = await Order.find({ user: userId });
    var c = {};
    var b = [];
    for (let i in orders) {
      c = {};
      const order = await Order.findById(orders[i]);
      console.log(order);
      c["Crops"] = order.crops;
      c["Order Date"] = order.orderdate;
      c["Delivery Date"] = order.deliverydate;
      c["isDelivered"] = order.isDelivered;
      b.push(c);
    }
    console.log(b);
    if (!b.length == 0) {
      return res.status(200).json({
        Type: "Success",
        Message: "Fetched the orders for the user",
        crops: b
      });
    } else {
      return res
        .status(400)
        .json({ Type: "Failed", Message: "No orders present for the user" });
    }
  } catch (err) {
    return res.status(400).json({
      Type: "Failed",
      Message: "Cannot fetch the orders",
      errors: err
    });
  }
});
router.post("/update-user", auth, async (req, res, next) => {
  // var farmer = await User.update(
  //   { role: "farmer" },
  //   { $set: { completedOrders: 0, totalOrders: 0, totalEarnings: 0 } }
  // );
  try {
    console.log(req.body);

    const { name, city } = req.body;
    const id = req.user.id;
    var UserObj = await genUser.findById(id);

    // var farmer = await User.findOne({ _id: farm._id }, function (err, doc) {
    UserObj.name = name;
    UserObj.city = city;
    UserObj.save();
    // });
    return res.status(200).json({
      success: true,
      Message: "Updated the User details",
      User: UserObj
      // details: farmer
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      Message: "Cannot update the details",
      errors: err
    });
  }
});
router.post("/get-user-details", auth, async (req, res, next) => {
  try {
    var userId = req.user.id;
    var gen = await genUser.findById(userId);
    var orders = await Order.find({ user: userId }).countDocuments();

    dic = {};
    dic["Name"] = gen.name;
    dic["Email"] = gen.email;
    dic["City"] = gen.city;
    dic["NoOfCartItems"] = gen.cart.items.length;
    dic["NoOfOrders"] = orders;

    return res.status(200).json({
      success: true,
      Message: "Fetched the details successfully",
      Details: dic, 
      user:gen
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      Message: "Cannot update the details",
      errors: err
    });
  }
});
module.exports = router;
