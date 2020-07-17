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
    type: Date
  },
  isDelivered: {
    tpye: Boolean
  }
});

module.exports = mongoose.model("order", OrderSchema);
