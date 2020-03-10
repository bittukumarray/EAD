const mongoose = require("mongoose");

const CropsInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    unique:true,
    required: true
  },
  img: {
    type: String,
  },
  details:[

  ],
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Crops = mongoose.model("cropsInfo", CropsInfoSchema);
