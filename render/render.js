const axios = require("axios");
exports.homePage = (req, res) => {
  axios
    .get(`/api/grid-images`)
    .then((response) => {
      res.render("index", { files: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
