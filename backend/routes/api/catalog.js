const express = require("express");
const router = express.Router();
const Crops = require('../../models/crops');

router.get("/name/:crop", async (req, res, next) => {
    const crop = req.params.crop;
    try {
        const data = await Crops.find({ name: { $regex: crop, $options: "i" } }, null, { sort: '-date' }, function (err, docs) { });
        return res.status(200).json(data);
    }
    catch (e) {
        return res.json(e);
    }
});

router.get("/city/:city", async (req, res, next) => {
    const city = req.params.city;
    try {
        const data = await Crops.find({ city: { $regex: city, $options: "i" } }, null, { sort: '-date' }, function (err, docs) { });
        return res.status(200).json(data);
    }
    catch (e) {
        return res.json(e);
    }
});

router.get("/all", async (req, res, next) => {
    try {
        const data = await Crops.find({}, null, { sort: '-date' }, function (err, docs) { });
        return res.status(200).json(data);
    }
    catch (e) {
        return res.json(e);
    }
});





module.exports = router;