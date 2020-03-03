const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/genauth");
const { check, validationResult } = require("express-validator");
const Order = require("../../../models/order");
const Crops = require("../../../models/farmer/crops");

router.post('/order', auth, async(req, res, next)=>{
    const {user, crops} = req.body;
    order = new Order({
        user,
        crops
    });
    const data = await order.save();
    return res.status(201).json({"msg":"successful", "order":data});
})

module.exports = router;