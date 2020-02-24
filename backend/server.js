const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect databse
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// app.get("/", (req, res, next) => res.send("API running"));

//define routes

app.use("/api/signup/farmer", require("./routes/api/farmer/users"));
app.use("/api/signup/company", require("./routes/api/delivery/companyuser"));
app.use("/api/login/farmer", require("./routes/api/farmer/auth"));
app.use("/api/login/company", require("./routes/api/delivery/companyLogin"));
app.use("/api/profile/farmer", require("./routes/api/farmer/profile"));
app.use("/api/profile/company", require("./routes/api/delivery/companyProfile"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on post ${PORT}`));
