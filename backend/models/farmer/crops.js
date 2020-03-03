const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CropsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  farmer: {
    type: Schema.Types.ObjectId,
    ref: "farmer"
  },
  img: {
    type: String,
    default:"https://cdn.downtoearth.org.in/library/large/2019-06-03/0.62901000_1559538844_maize_gettyimages-.jpg"
  },
  date: {
    type: Date,
    default: Date.now
  },
  details: {
    type: String
  },
  price: {
    type: double,
    required: true
  },
  quantity: {
    type: double,
    required: true
  }
});

module.exports = Crops = mongoose.model("crops", CropsSchema);
