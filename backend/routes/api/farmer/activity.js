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
  const cropId = await Crops.findById(req.params.cropId);
  console.log(cropId);
  res.status(200).json({ message: "Fetched a single crop", crop: cropId });
});

// crops adding api
router.post("/add-crops", auth, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, farmer, img, details, price, quantity } = req.body;
  const farmer_obj =await Farmer.findById(farmer);

  console.log(farmer_obj);
  const farmer_name = farmer_obj.name;
  // console.log(farmer_name1);
  const tt  ="far";
  crop = new Crops({
    name,
    farmer,
    farmer_name,
    img,
    details,
    price,
    quantity,
  });
  const data = await crop.save();
  return res.status(201).json({ msg: "successful", crops: data });
});

module.exports = router;
