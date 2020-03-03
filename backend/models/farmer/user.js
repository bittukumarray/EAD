const mongoose = require("mongoose");
const Role = require("../../helpers/roles");
const User = require("../User");

var options = { discriminatorKey: 'genuser' };
var GenUserSchema = User.discriminator('genuser', new mongoose.Schema({
    role:{
        type:String,
        default:Role.GenUser
    },
    cart:[
        
    ]
    
}, options));

module.exports= Farmer = mongoose.model("farmer");
