const mongoose = require("mongoose");
const Role = require("../../helpers/roles");
const User = require("../User");

var options = { discriminatorKey: 'company' };

var CompanySchema = User.discriminator('company', new mongoose.Schema({
    role:{
        type:String,
        default:Role.Company
    },
    api_key:{
        type:String,
        required:true
    },
}, options))

module.exports= Company = mongoose.model("company");
// options = {discriminatorKey: 'deliveryboy' };

// var DeliveryBoySchema = User.discriminator('deliveryboy', new mongoose.Schema({
//     role:{
//         type:String,
//         default:Role.DeliveryBoy
//     },
// }, options))

//  var Deliveryboy = mongoose.model("deliveryboy");

//  module.exports={
//      Company:Company,
//      DeliveryBoy:Deliveryboy
//  }
