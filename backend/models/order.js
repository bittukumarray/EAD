const mongoose = require("mongoose");

const schema = mongoose.schema;

const OrderSchema = new Schema({
  crops: [
    {
      crop: { type: Object, required: true, ref: "Crop" },
      quantity: { type: Number, required: true }
    }
  ],
  user: {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  farmer: {
    type: Schema.Types.ObjectId,
    ref: "farmer"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("order", OrderSchema);
