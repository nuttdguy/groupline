const aws = require('aws-sdk');
const multer = require('multer');
// const multerS3 = require('multer-s3');
// const s3 = new aws.S3();

// Define directory for storing file from multipart request.
// In this case is directory 'uploads' inside same directory with our server
var upload = multer({ dest: 'uploads/' });

module.exports = (app) => {

  aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.S3_REGION
  });

  // let upload = multer({
  //   storage: multerS3({
  //     s3: s3,
  //     bucket: process.env.S3_BUCKET,
  //     key: function(req, file, cb) {
  //       console.log(file);
  //       cb(null, file.originalname)
  //     }
  //   })
  // });

  // upload.array('profileImg', 1, function(file) {
  app.post('/upload', upload.single('profileImg'), function(req, res, next) {
    let file = req.file;

    // UPLOAD PROFILE IMAGE TO S3
    uploadToS3(file, (err, data) => {
      if (err) {
        callback(err);
      } else {
        res.send({data: data});

        // SAVE URL TO USER PROFILE

        console.log(data);
        // Declare new user document
        // var user = new User({
        //   fullName: fullName,
        //   email: email,
        //   password: password,
        //   avatar: data.Location
        // });

        // Save user document to database
        // user.save(function (err, userObj) {
        //   if (err) {
        //     console.log(err);
        //     callback('Error occurred.');
        //   } else {
        //     callback(null, userObj);
        //   }
        // });
      }
    });
  });


  function uploadToS3(file, callback) {
    // Load File Stream module
    let fs = require('fs');

    // Load the photo from disk
    let body = fs.createReadStream(file.path);

    // Create file name
    let date = new Date();
    let key = date.getTime() + '.jpg';

    // Load AWS module
    let AWS = require('aws-sdk');

    // Create S3 Object, set content type to image and add Read permission to Everyone
    let s3obj = new AWS.S3({
      params: {
        Bucket: process.env.S3_BUCKET,
        Key: key,
        ContentType: 'image/jpeg',
        ACL: 'public-read'}});

    // Upload to S3
    s3obj.upload({Body: body}).on('httpUploadProgress', function(evt) {
      console.log(evt);
    }).send(function(err, data) {
      if (err) {
        console.log('uploadToS3: '+err);
        callback('Error occurred.');
      } else {
        // Remove file after uploaded to S3
        fs.unlink(file.path);
        callback(null, data);
      }
    });
  }


};

