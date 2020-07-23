const express = require("express");
// import Crop from "./../../../../client/src/components/crop/Crop";

const router = express.Router();
const auth = require("../../../middleware/farmerAuth");
const genAuth = require("../../../middleware/genuserAuth");
const { check, validationResult } = require("express-validator");
const Farmer = require("../../../models/farmer");
const Crops = require("../../../models/crops");
const User = require("../../../models/User");
const farmer = require("../../../models/farmer");
const Order = require("../../../models/order");
const { GenUser } = require("../../../helpers/roles");

//get crops
router.get("/get-crops", async (req, res, next) => {
  try {
    const crops = await Crops.find();
    res
      .status(200)
      .json({ messege: "Crops fetched successfully", crops: crops });
  } catch (err) {
    console.log(err.message);
    res.status.send("server Error");
  }
});

//get a single crop
router.get("/get-crop/:cropId", async (req, res, next) => {
  const crops = await Crops.findById(req.params.cropId);
  res.status(200).json({ message: "Fetched a single crop", crop: crops });
});

// crops adding api
router.post("/add-crops", auth, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { name, img, details, price, quantity, city } = req.body;
    const farmer = req.user.id;
    const farmer_obj = await Farmer.findById(req.user.id);

    console.log(farmer_obj);
    const farmer_name = farmer_obj.name;
    // console.log(farmer_name1);
    crop = new Crops({
      name,
      farmer,
      farmer_name,
      img,
      details,
      price,
      quantity,
      city,
    });
    const data = await crop.save();
    return res.status(201).json({ success: true, crops: data });
  } catch (err) {
    return res.status(400).json({
      success: false,
      Message: "Cannot add the crop",
      error: err,
    });
  }
});
router.post("/pie-chart", async (req, res, next) => {
  try {
    var farmerId = req.body.farmer;
    var a = [];
    const crops1 = await Crops.find({ farmer: farmerId });
    for (let i in crops1) {
      var b = {};
      const c = await Crops.findById(crops1[i]);
      // console.log(c.quantity);
      b["crop"] = c.name;
      b["quantity"] = c.quantity;
      a.push(b);
    }
    if (!a.length == 0) {
      return res
        .status(200)
        .json({ Type: "Success", Message: "Fetched the crop", crops: a });
    } else {
      return res
        .status(400)
        .json({ Type: "Failed", Message: "No crop present" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ Type: "Success", Message: "Cannot fetch crops", errors: error });
  }
});
router.post("/update-farmer", auth, async (req, res, next) => {
  // var farmer = await User.update(
  //   { role: "farmer" },
  //   { $set: { completedOrders: 0, totalOrders: 0, totalEarnings: 0 } }
  // );
  try {
    console.log(req.body);

    const { name, city } = req.body;
    const id = req.user.id;
    var farmer = await User.findById(id);
    console.log(farmer);
    // var farmer = await User.findOne({ _id: farm._id }, function (err, doc) {
    farmer.name = name;
    farmer.city = city;
    farmer.save();
    // });
    return res.status(200).json({
      success: true,
      Message: "Updated the farmer details",
      farmer: farmer,
      // details: farmer
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      Message: "Cannot update the details",
      errors: err,
    });
  }
});
router.post("/farmer-details", auth, async (req, res, next) => {
  try {
    var farmerId = req.user.id;
    var farm = await farmer.findById(farmerId);
    const crops1 = await Crops.find({ farmer: farmerId });
    var c = 0;
    for (let i in crops1) {
      c += 1;
    }
    console.log(farm);
    var b = {};
    b["name"] = farm.name;
    b["completedOrders"] = farm.completedOrders;
    b["totalOrders"] = farm.totalOrders;
    b["totalEarnings"] = farm.totalEarnings;
    b["totalCrops"] = c;
    console.log(b);
    return res.status(200).json({
      success: true,
      Message: "Returned the details successfully",
      details: b,
      farmer: farm,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      Message: "Cannot fetch the details",
      errors: error,
    });
  }
});

router.post("/get-farmer-crops", auth, async (req, res, next) => {
  try {
    let farmerId = req.user.id; //req.body.farmerId;
    console.log("gft", req.user.id);
    // const userData = await genUser.findById(req.user.id);

    console.log("gft", farmerId);
    const crops1 = await Crops.find({ farmer: farmerId });
    var c = {};
    var b = [];
    for (let i in crops1) {
      c = {};
      const crop = await Crops.findById(crops1[i]);
      // console.log(crop);
      // c["Crop Name"] = crop.name;
      // c["Details"] = crop.details;
      // c["quantity"] = crop.quantity;
      // c["price"] = crop.price;
      b.push(crop);
      // console.log(c);
    }
    if (!b.length == 0) {
      return res.status(200).json({
        Type: "Success",
        Message: "Fetched the crops for the farmer",
        crops: b,
      });
    } else {
      return res
        .status(400)
        .json({ Type: "Failed", Message: "No crops present for the farmer" });
    }
  } catch (err) {
    return res.status(400).json({
      Type: "Failed",
      Message: "Cannot fetch the crops",
      errors: err,
    });
  }
});

router.get("/farmer-crops/:id", async (req, res, next) => {
  try {
    let farmerId = req.params.id;
    // console.log("id is ", farmerId);
    Crops.find({ farmer: farmerId })
      .sort({ date: -1 })
      .limit(5)
      .exec(function (err, docs) {
        if (!err) {
          return res.json({ msg: "success", crops: docs });
        } else {
          return res.status(404).json({ msg: "failed", crops: [] });
        }
      });
  } catch (e) {
    console.log("error is ", e);
    return res.status(500).json({ msg: "failed", crops: [] });
  }
});

router.get("/get-same-crops/:id", async (req, res, next) => {
  try {
    let crop = req.params.id;
    crop.toLowerCase();
    crops = await Crops.find({ name: { $regex: crop, $options: "i" } });
    let finalcrop = [];
    for (let i in crops) {
      let dic = {};
      let farmerId = crops[i].farmer._id;
      console.log(farmerId);
      farm = await User.findById(farmerId);
      // console.log(farm);
      dic["crops"] = crops[i];
      dic["farmer"] = farm;
      finalcrop.push(dic);
    }
    return res.status(200).json({ finalcrop });
  } catch (err) {
    return res.status(400).json({
      Type: "Failed",
      Message: "Cannot fetch the crops",
      errors: err,
    });
  }
});

router.post("/order-successful", genAuth, async (req, res, next) => {
  const quantity = req.body.quantity;
  const earnings = req.body.earnings;
  const farmerId = req.body.farmerId;
  const cropId = req.body.cropId;
  const userId = req.user.id;

  try {
    let farmerData = await Farmer.findById(farmerId);

    farmerData.totalEarnings += earnings;
    farmerData.totalOrders += 1;

    let cropData = await Crops.findById(cropId);
    cropData.quantity -= quantity;

    let crop = [
      {
        crop: cropData,
        quantity: quantity,
      },
    ];
    let orderData = new Order({
      user: userId,
      isDelivered: false,
      crops: crop,
      deliverydate: new Date(new Date().getTime() + 7 * 3600 * 24 * 1000),
    });

    await farmerData.save();
    await cropData.save();
    await orderData.save();

    return res.json({
      msg: "success",
      crop: cropData,
      farmer: farmerData,
      order: orderData,
    });
  } catch (e) {
    return res
      .status(400)
      .json({ msg: "failed", crop: null, farmer: null, order: null, err: e });
  }
});

module.exports = router;
