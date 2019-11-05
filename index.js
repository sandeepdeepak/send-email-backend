const express = require("express");

const { sendUserDetailsEmail } = require("./sendEmail");
const { sendVerificationEmail } = require("./nodemailer");

var cors = require("cors");
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "example.com");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};
const port = process.env.PORT || 3000;

const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "csvFiles");
  },
  filename: function(req, file, cb) {
    cb(null, "csvUploaded.csv");
  }
});

const upload = multer({ storage: storage });

const app = express();
app.use(allowCrossDomain);
app.post("/upload", upload.single("upload"), cors(), (req, res) => {
  const csvFilePath = "./csvFiles/csvUploaded.csv";
  const csv = require("csvtojson");
  csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
      console.log(jsonObj);
      jsonObj.forEach(user => {
        sendUserDetailsEmail(user);
      });
    });
  res.send();
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
