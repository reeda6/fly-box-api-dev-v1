const AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.getImages = (event, context, callback) => {
  const data = JSON.parse(event.body);
  var params = { Bucket: 'fb-dev-uploads', Key: data.email };
 

  s3.getObject(params, function (err, data) {
    if (err)
      return err;    
    let objData = data.Body;
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({ objData }),
    })
  });


};