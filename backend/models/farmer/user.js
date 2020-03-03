const mongoose = require("mongoose");
const Role = require("../../helpers/roles");
const User = require("../User");
// const Order = require("../order");
const Schema = mongoose.Schema;

var options = { discriminatorKey: "genuser" };
var GenUserSchema = User.discriminator(
  "genuser",
  new mongoose.Schema(
    {
      role: {
        type: String,
        default: Role.GenUser
      },
      cart: [
        {
          type: Schema.Types.ObjectId,
          ref: "order"
        }
      ],
      order: [{ type: Schema.Types.ObjectId, ref: "order" }]
    },
    options
  )
);

module.exports = GenUser = mongoose.model("genuser");
