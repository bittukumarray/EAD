const auth=require("../../../middleware/company/auth");
const express = require("express");
const router = express.Router();
const CompanyUser = require("../../../models/company/company");

router.post("/", auth, async(req, res, next)=>{

    try{
        const user = await CompanyUser.findById(req.user.id);
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