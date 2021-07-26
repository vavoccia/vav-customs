fs = require("fs");
exports.gridImages = (req, res) => {
  fs.readdir(`${__dirname}`, (err, files) => {
    console.log(__dirname);
    if (err) console.log(err);
    else {
      res.send(
        files.filter((file) => {
          return file.includes(".js");
        })
      );
    }
  });
};
