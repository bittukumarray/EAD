const express = require("express");
const connectDB = require("./config/db");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const app = express();
app.use(busboy());
//connect databse
connectDB();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// Init Middleware
app.use(express.json({ extended: false }));
// app.get("/", (req, res, next) => res.send("API running"));
app.use(busboyBodyParser());
//define routes

app.use("/api/check-user", require("./routes/api/users"));

app.use("/api/signup/farmer", require("./routes/api/farmer/users"));
app.use("/api/signup/company", require("./routes/api/delivery/companyuser"));
app.use("/api/signup/user", require("./routes/api/genuser/user"));
app.use("/api/login/user", require("./routes/api/genuser/auth"));
app.use("/api/login/farmer", require("./routes/api/farmer/auth"));
app.use("/api/login/company", require("./routes/api/delivery/companyLogin"));
app.use("/api/profile/farmer", require("./routes/api/farmer/profile"));
app.use(
  "/api/profile/company",
  require("./routes/api/delivery/companyProfile")
);
app.use("/restricted", require("./routes/api/info"));
app.use("/api/crops", require("./routes/api/farmer/get_info"));
app.use("/api/farmer", require("./routes/api/farmer/activity"));
app.use("/api/user", require("./routes/api/genuser/activity"));
app.use("/api/filter", require("./routes/api/catalog"));
app.use("/api/upload", require("./routes/api/upload"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on post ${PORT}`));
