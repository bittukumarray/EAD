const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CropsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  farmer :{
      type:Schema.Types.ObjectId,
      ref:'farmer'
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  details:{
      type:String
  },
  price:{
      type:double,
      required:true
  },
  Total:{
      type:double,
      required:true
  }
  
});

module.exports = Crops = mongoose.model("crops", CropsSchema);
