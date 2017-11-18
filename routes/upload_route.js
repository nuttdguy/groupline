const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();
// require('dotenv').config();

module.exports = (app) => {

  aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.S3_REGION
  });

  let upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.S3_BUCKET,
      key: function(req, file, cb) {
        console.log(file);
        cb(null,file.originalname)
      }
    })
  });

  app.post('/upload', upload.array('profileImg', 1), function(req, res, next) {
    console.log(process.env.S3_BUCKET);
    console.log(req.body);
    res.send("Uploaded!");
  });

};

