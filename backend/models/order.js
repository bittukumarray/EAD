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
  orderdate: {
    type: Date,
    default: Date.now
  },
  deliverydate: {
    type: Date,
    default: new Date(new Date().getTime() + 7 * 3600 * 24 * 1000)
  },
  isDelivered: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("order", OrderSchema);
