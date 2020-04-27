const express = require("express");
const router = express.Router();
const Crops = require("../../models/cropInfo");
const fs = require('fs');



router.get("/upload-data", async (req, res, next) => {

    const rawdata = fs.readFileSync('/home/bittu/EAD/backend/externalFiles/crops.json');
    const cropsData = await JSON.parse(rawdata);
    // console.log("length is ", cropsData.length);
    //this comment is for jenkins
    let count = 0, datacount = 0,test=999;
    try {
        // console.log(cropsData);
        const abc = await cropsData.forEach(async (element) => {
            const cropdata = await Crops.findOne({ name: element["title"] })
            count++;
            if (!cropdata) {
                crop = new Crops({
                    details: element["p_tag_list"],
                    name: element["title"],
                    img: element["image"]
                });
                datacount++;
                const crops = await crop.save();
            }

        })
        return res.status(200).json({ "msg": "successful", "data-inserted": datacount });
    }
    catch (err) {
        console.log("catch");
        return res.status(400).json(err);
    }
});

module.exports = router;