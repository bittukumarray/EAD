const express = require("express");
const router = express.Router();
const Crops = require("../../models/farmer/cropInfo");
const fs = require('fs');

router.get("/upload-data", async(req, res, next) => {

    const rawdata = fs.readFileSync('/home/bittu/EAD/backend/externalFiles/crops.json');
    const cropsData = await JSON.parse(rawdata);
    try {
        cropsData.forEach(async(element )=> {
            crop = new Crops({
                details: element["p_tag_list"],
                name: element["title"],
                img: element["image"]
            });
            const crops = await crop.save();
                
        })
        return res.status(200).json({ "msg": "successful" });
    }
    catch (err) {
        console.log("catch");
        return res.status(400).json(err);
    }
});

module.exports = router;