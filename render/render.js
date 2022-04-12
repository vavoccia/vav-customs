const axios = require("axios");
exports.homePage = (req, res) => {
       
      res.render("index", { files: req.gridImages });
    
};
