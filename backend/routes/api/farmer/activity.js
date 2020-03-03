const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/farmer/auth");
const { check, validationResult } = require("express-validator");
const Farmer = require("../../../models/farmer/farmer");
const Crops = require("../../../models/farmer/crops");


// crops adding api
router.post('/add-crops', auth, async(req, res, next)=>{
    const errors = validationResult(req);

})