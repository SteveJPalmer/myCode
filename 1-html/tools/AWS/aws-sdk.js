var aws = require('aws-sdk');

var asResize = function() {
  console.log('asDebug: calling fn resize');
};

//save image to S3
var asSaveImgage = function() {
  console.log('asDebug: calling fn asSaveImage');

  var bucket = 'asimgtest';
  var key = 'AKIAIWKR576653C47BNQ';


  //initial cut -creates text file (credentials file pre-loaded)
  console.log('asDebug: testing first cut')

  var s3 = new aws.S3();
    s3.createBucket({Bucket: 'asimgtest'}, function() {

      var params = {Bucket: 'asimgtest', Key: 'myNewFile2', Body: 'Steves test Upload via aws-sdk!'};

      s3.putObject(params, function(err, data) {
        if (err)
          console.log('asError: ' + err)
        else
      console.log("asDebug: Successfully uploaded data to asimgtest/myNewFile2");
    });
  });
  //initial test cut

};

var asUpload = function() {
  console.log('asDebug: calling fn asUpload');
};


module.exports.a = 'Development';
module.exports.b = '100';

// module.exports.resize = function() {
//   console.log('module returning a fn!');
// };

module.exports.resize = asResize;
module.exports.save = asSaveImgage;
module.exports.upload = asUpload;
