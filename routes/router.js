const express = require("express");
const route = express.Router();

const render = require("../render/render");

route.get("/", render.homePage);


module.exports = route;
