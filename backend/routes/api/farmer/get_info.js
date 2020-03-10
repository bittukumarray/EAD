const express = require("express");
const router = express.Router();
const Crops = require("../../../models/cropInfo");

router.get("/info", async(req, res, next) => {

    crops = await Crops.find({},);
    return res.json(crops);
    
});

module.exports = router;