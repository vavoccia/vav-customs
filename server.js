const express = require("express");
const morgan = require("morgan");
const middleware = require("./middleware/middleware");
require("dotenv").config();
const app = express();
const path = require("path");
const fs = require("fs");
const { isBuffer } = require("util");
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(middleware.gridImages);
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use("/", require("./routes/router"));
app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
