const mongoose = require("mongoose");
const config = require("config");
let db = config.get("mongoURI");

// const db = "mongodb://bittu:password@127.0.0.1:27017/EAD_DB?authSource=admin";

// console.log(url);
// mongoose.connect(db);
//
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("Mongodb conneted");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// // const mongoose = require('mongoose');
// const MONGO_USERNAME = 'bittu';
// const MONGO_PASSWORD = 'password';
// const MONGO_HOSTNAME = '127.0.0.1';
// const MONGO_PORT = '27017';
// const MONGO_DB = 'EAD_DB';

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     });

//     console.log("Mongodb conneted");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

module.exports = connectDB;
