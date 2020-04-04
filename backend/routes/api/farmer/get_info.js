const express = require("express");
const router = express.Router();
const Crops = require("../../../models/cropInfo");

router.get("/info", async(req, res, next) => {

    // console.log("in crops");
    crops = await Crops.find({},);
    // console.log(crops);
    return res.json(crops);
    
});

module.exports = router;