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
      city
    });
    const data = await crop.save();
    return res.status(201).json({ success: true, crops: data });
  } catch (err) {
    return res.status(400).json({
      success: false,
      Message: "Cannot add the crop",
      error: err
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
      farmer: farmer
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
      farmer: farm
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      Message: "Cannot fetch the details",
      errors: error
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
        crops: b
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
      errors: err
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

router.get("/get-same-crops/:id/:id2", async (req, res, next) => {
  try {
    let crop = req.params.id;
    let farmerID = req.params.id2
    crop.toLowerCase();
    crops = await Crops.find({ name: { $regex: crop, $options: "i" } });
    let finalcrop = [];
    for (let i in crops) {
      if (crops[i].quantity > 0) {
        let dic = {};
        let farmerId = crops[i].farmer._id;
        if (farmerID != farmerId) {
          console.log(farmerId);
          farm = await User.findById(farmerId);
          // console.log(farm);
          dic["crops"] = crops[i];
          dic["farmer"] = farm;
          finalcrop.push(dic);
        }
      }
    }
    return res.status(200).json({ finalcrop });
  } catch (err) {
    return res.status(400).json({
      Type: "Failed",
      Message: "Cannot fetch the crops",
      errors: err
    });
  }
});
router.get("/suggested-crops-pooling/:id1/:id2/:id3", async (req, res, next) => {
  try {
    let crop = req.params.id1;
    let farmerID = req.params.id2
    let quantity=req.params.id3
    crop.toLowerCase();
    crops = await Crops.find({ name: { $regex: crop, $options: "i" }, quantity:{$gte:quantity} });
    let finalcrop = [];
    for (let i in crops) {
        let dic = {};
        let farmerId = crops[i].farmer._id;
        if (farmerID != farmerId) {
          console.log(farmerId);
          farm = await User.findById(farmerId);
          // console.log(farm);
          dic["crops"] = crops[i];
          dic["farmer"] = farm;
          finalcrop.push(dic);
      }
    }
    return res.status(200).json({ finalcrop });
  } catch (err) {
    return res.status(400).json({
      Type: "Failed",
      Message: "Cannot fetch the crops",
      errors: err
    });
  }
});

router.post("/order-successful", genAuth, async (req, res, next) => {
  // console.log("req body is ", req.body);
  const quantity1 = req.body.quantity.quantity1;
  const earning1 = req.body.earning.earning1;
  const farmerId1 = req.body.farmerId.farmerId1;
  const cropId1 = req.body.cropId.cropId1;
  const quantity2 = req.body.quantity.quantity2;
  const earning2 = req.body.earning.earning2;
  const farmerId2 = req.body.farmerId.farmerId2;
  const cropId2 = req.body.cropId.cropId2;
  const userId = req.user.id;

  try {
    let farmerData1 = await Farmer.findById(farmerId1);

    farmerData1.totalEarnings += earning1;
    farmerData1.totalOrders += 1;

    let cropData1 = await Crops.findById(cropId1);
   
    cropData1.quantity -= quantity1;

    let crop = [
      {
        crop: cropData1,
        quantity: quantity1
      }
    ];
    let farmerData2 = await Farmer.findById(farmerId2);
    if (farmerData2) {
      farmerData2.totalEarnings += earning2;
      farmerData2.totalOrders += 1;
    }
    let cropData2 = await Crops.findById(cropId2);
    if (cropData2) {
      cropData2.quantity -= quantity2;
      crop.push({
        crop: cropData2,
        quantity: quantity2
      })
    }


    let orderData = new Order({
      user: userId,
      isDelivered: false,
      crops: crop,
      deliverydate: new Date(new Date().getTime() + 7 * 3600 * 24 * 1000)
    });
    if(farmerData1)
    await farmerData1.save();
    if(cropData1)
    await cropData1.save();
    if(farmerData2)
    await farmerData2.save();
    if(cropData2)
    await cropData2.save();
    if(orderData)
    await orderData.save();
    // console.log("after that level")
    return res.json({
      msg: "success",
      crop1: cropData1,
      crop2: cropData2,
      farmer1: farmerData1,
      farmer2: farmerData2,
      order: orderData
    });
  } catch (e) {
    console.log("error is ", e);
    return res
      .status(400)
      .json({ msg: "failed", crop1: null, crop2: null, farmer1: null, farmer2: null, order: null, err: e });
  }
});

module.exports = router;
