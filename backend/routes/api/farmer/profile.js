const auth=require("../../../middleware/farmer/auth");
const express = require("express");
const router = express.Router();
const Farmer = require("../../../models/farmer/farmer");

router.post("/", auth, async(req, res, next)=>{

    try{
        const user = await Farmer.findById(req.user.id);
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(400).json({"msg":"User Doesn't exsit"});
        }
    }
    catch(err){
        res.status(400).json({"msg":"User Doesn't exsit"});
    }

});

module.exports=router;