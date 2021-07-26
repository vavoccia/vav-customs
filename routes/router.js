const express = require("express");
const route = express.Router();

const api = require("../api/api");
const render = require("../render/render");

route.get("/", render.homePage);


route.get("/api/grid-images", api.gridImages);


module.exports = route;
