const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/farmer/auth");
const { check, validationResult } = require("express-validator");
const Farmer = require("../../../models/farmer/farmer");
const Crops = require("../../../models/farmer/crops");


// crops adding api
router.post('/add-crops', auth, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, farmer, img, details, price, quantity } = req.body;

    crop = new Crops({
        name,
        farmer,
        img,
        details,
        price,
        quantity
    });
    const data=await crop.save();
    return res.status(201).json({"msg":"successful", "crops":data});

})

module.exports = router;