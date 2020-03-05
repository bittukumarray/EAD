const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  crops: [
    {
      crop: { type: Schema.Types.ObjectId, required: true, ref: "crops" },
      quantity: { type: Number, required: true }
    }
  ],
  user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "genuser"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("order", OrderSchema);
