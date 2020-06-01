const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/farmerAuth");
const { check, validationResult } = require("express-validator");
const Farmer = require("../../../models/farmer");
const Crops = require("../../../models/crops");

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
// router.get("/graph/:cropId", async (req, res, next) => {
//   console.log("Wilson");
//   var crops1 = req.params.cropId;
//   var crops1 = crops1.slice(1, -1).split(",");
//   var a = [];
//   // const c = await Crops.findById(crops1[0]);
//   // console.log(c.quantity);
//   crops1.map(async crop => {
//     const c = await Crops.findById(crop);
//     console.log(c.quantity);
//     a.push(c.quantity);
//     console.log(a);
//   });
//   return res
//     .status(200)
//     .json({ Type: "Success", Message: "Fetched the crop", crops: a });
// });
router.post("/graph", async (req, res, next) => {
  const c = req.body.crop;
  console.log(req.text);
  console.log(req.body);
  return res
    .status(200)
    .json({ Type: "Success", Message: "Fetched the crop", crops: c });
});
module.exports = router;
