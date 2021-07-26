const axios = require("axios");
exports.homePage = (req, res) => {
    var apiCall = req.headers.host.includes("localhost") ? "http://localhost:3000/api/grid-images" : "https://vav-customs.azurewebsites.net/api/grid-images";
    console.log(req.headers.host);
  axios
    .get(apiCall)
    .then((response) => {
    
      res.render("index", { files: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
