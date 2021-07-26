fs = require("fs");
exports.gridImages = (req, res) => {
  var folder = req.headers.host.includes("localhost") ? `${__dirname}\\..\\assets\\grid-images` : `${__dirname}/../assets/grid-images`;
  fs.readdir(folder, (err, files) => {
    console.log(__dirname);
    if (err) console.log(err);
    else {
      res.send(
        files.filter((file) => {
          return file.includes(".jpg");
        })
      );
    }
  });
};
