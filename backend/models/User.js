const mongoose = require("mongoose");

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: "users" // the name of our collection
};
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  baseOptions
);

module.exports = User = mongoose.model("user", UserSchema);
