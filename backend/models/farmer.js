const mongoose = require("mongoose");
const Role = require("../helpers/roles");
const User = require("./User");
const Schema = mongoose.Schema;
var options = { discriminatorKey: "farmer" };
var FarmerSchema = User.discriminator(
  "farmer",
  new mongoose.Schema(
    {
      role: {
        type: String,
        default: Role.Farmer
      },
      completedOrders: {
        type: Number,
        default:0,
        required: false
      },
      totalOrders: {
        type: Number,
        default:0,
        required: false
      },
      totalEarnings: {
        type: Number,
        default:0,
        required: false
      },
      orders: [
        {
          type: Object,
          ref: "order",
          require:true
        },
      ]
    },
    options
  )
);

module.exports = Farmer = mongoose.model("farmer");
