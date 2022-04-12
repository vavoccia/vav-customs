fs = require("fs");
exports.gridImages = (req, res, next) => {
  //var folder ="C:\\Users\\Vince\\OneDrive\\make\\sketchup\\dev\\vav-customs\\assets\\grid-images";
  var folder = __dirname.includes("alyssavoccia") ? `${__dirname}/../assets/grid-images` : req.headers.host.includes("localhost") ? `${__dirname}\\..\\assets\\grid-images` : `${__dirname}/../assets/grid-images`;
  fs.readdir(folder, (err, files) => {
    if (err) {
        console.log(err);
     } else {
      
        req.gridImages = files.filter((file) => {
          return file.includes(".jpg");
        })
      
    }
  });
  next(); 
}