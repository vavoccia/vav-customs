const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const path = require("path");
const fs = require("fs");
const { isBuffer } = require("util");
//const connectDB = require("./database/connection");
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
//console.log(process.env.MONGO_URI);
//connectDB();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use("/", require("./routes/router"));
app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
