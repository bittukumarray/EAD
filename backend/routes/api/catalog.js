const express = require("express");
const router = express.Router();
const Crops = require("../../models/crops");

router.get("/name/:crop", async (req, res, next) => {
  const crop = req.params.crop;
  try {
    const data = await Crops.find(
      { name: { $regex: crop, $options: "i" } },
      null,
      { sort: "-date" },
      function (err, docs) {}
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/city/:city", async (req, res, next) => {
  const city = req.params.city;
  try {
    const data = await Crops.find(
      { city: { $regex: city, $options: "i" } },
      null,
      { sort: "-date" },
      function (err, docs) {}
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/anydata/:data", async (req, res, next) => {
  const reqData = req.params.data;
  try {
    const data = await Crops.find(
      {
        $or: [
          { city: { $regex: reqData, $options: "i" } },
          { name: { $regex: reqData, $options: "i" } },
          { farmer_name: { $regex: reqData, $options: "i" } }
        ]
      },
      null,
      { sort: "-date" },
      function (err, docs) {}
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/all", async (req, res, next) => {
  try {
    const data = await Crops.find({}, null, { sort: "-date" }, function (
      err,
      docs
    ) {});
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/get-crop/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const crop = await Crops.findById(id);
    return res.json({ crop: crop, success: true });
  } catch (e) {
    return res.json({ success: false });
  }
});

module.exports = router;
