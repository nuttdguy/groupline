const aws = require('aws-sdk');
const multer = require('multer');
const User = require('../db/models/index').UserProfile;

// Define directory for storing file from multipart request.
// In this case is directory 'uploads' inside same directory with our server
var upload = multer({ dest: 'uploads/' });

module.exports = (app) => {

  //==================================================//
  /*        CONFIGURE AWS                 */
  //==================================================//

  aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.S3_REGION
  });


  //==================================================//
  /*   /UPLOAD (UPLOAD FILE & USER IMG URL )       */
  //==================================================//


  app.post('/upload', upload.single('profileImg'), function(req, res, next) {
    let file = req.file;
    let userId = req.user.userProfileId;

    // UPLOAD PROFILE IMAGE TO S3
    uploadToS3(file, (err, data) => {
      if (err) {
        callback(err);
      }

      // UPDATE THE USER'S PROFILE IMAGE URL
      User.findById(userId).then(function(user) {
        user.update({ profileUrl: data.location });
        res.send({success: 'Upload Successful'});
      })

    });

  });

  //==================================================//
  /*   AWS -- HELPER FUNCTION      */
  //==================================================//

  function uploadToS3(file, callback) {
    // LOAD FILE STREAM MODULE
    let fs = require('fs');

    // LOAD PHOTO FROM REQUEST / OR DISK
    let body = fs.createReadStream(file.path);

    // CREATE FILE NAME, APPEND AS PNG BY DEFAULT
    let date = new Date();
    let key = date.getTime() + '.png';

    // LOAD AWS SDK MODULE
    let AWS = require('aws-sdk');

    // CREATE S3 BUCKET,
    // SET CONTENT TYPE TO IMAGE & READ PERMISSION TO EVERYONE
    let s3obj = new AWS.S3({
      params: {
        Bucket: process.env.S3_BUCKET,
        Key: key,
        ContentType: 'image/png',
        ACL: 'public-read'}});

    // UPLOAD TO AWS S3 BUCKET
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

