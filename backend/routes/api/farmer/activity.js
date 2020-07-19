const express = require("express");

const router = express.Router();
const auth = require("../../../middleware/farmerAuth");
const { check, validationResult } = require("express-validator");
const Farmer = require("../../../models/farmer");
const Crops = require("../../../models/crops");
const User = require("../../../models/User");
const farmer = require("../../../models/farmer");

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

  const { name, farmer, img, details, price, quantity, city } = req.body;
  const farmer_obj = await Farmer.findById(farmer);

  console.log(farmer_obj);
  const farmer_name = farmer_obj.name;
  // console.log(farmer_name1);
  const tt = "far";
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
  return res.status(201).json({ msg: "successful", crops: data });
});
router.post("/pie-chart", auth, async (req, res, next) => {
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
router.post("/updateFarmerDetails", async (res, req, next) => {
  // var farmer = await User.update(
  //   { role: "farmer" },
  //   { $set: { completedOrders: 0, totalOrders: 0, totalEarnings: 0 } }
  // );
  console.log(req.body);
  const { name, email, city } = req.body;
  var farm = await User.find({ _id: id });

  var farmer = await User.findOne({ _id: farm._id }, function (err, doc) {
    doc.name = name;
    doc.email = email;
    doc.city = city;
    doc.save();
  });
  return res.status(200).json({
    Type: "Success",
    Message: "Updated the farmer details"
    // details: farmer
  });
  //  catch (err) {
  //   return res.status(400).json({
  //     Type: "Failed",
  //     Message: "Cannot fetch the details",
  //     errors: err
  //   });
});

router.post("/farmer-details",  async (req, res, next) => {
  try {
    var farmerId = req.body.farmer;
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
      Type: "Success",
      Message: "Returned the details successfully",
      details: b
    });
  } catch (error) {
    return res.status(400).json({
      Type: "Failed",
      Message: "Cannot fetch the details",
      errors: error
    });
  }
});

router.post("/get-farmer-crops", async (req, res, next) => {
  try {
    var farmerId = req.body.farmerId;
    const crops1 = await Crops.find({ farmer: farmerId });
    var c = {};
    var b = [];
    for (let i in crops1) {
      c = {};
      const crop = await Crops.findById(crops1[i]);
      console.log(crop);
      c["Crop Name"] = crop.name;
      c["Details"] = crop.details;
      c["quantity"] = crop.quantity;
      c["price"] = crop.price;
      b.push(c);
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

module.exports = router;
