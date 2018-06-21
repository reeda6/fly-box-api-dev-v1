 'use strict';
 const AWS = require('aws-sdk')

module.exports.addImages = (event, context, callback) => {

  let pictureString = JSON.parse(event.body);

  //let pictureString=event.pictureString;
  var s3 = new AWS.S3();
  
  // Bucket names must be unique across all S3 users
  
  var myBucket = 'fb-dev-uploads';
  
  var myKey = event.headers.imagename;
  
  console.log('this is event', event);
  console.log('this is mykey', myKey);
  
  let params = {Bucket: myBucket, Key: myKey, Body: pictureString, ContentType:'text/text'};

    s3.putObject(params, function(err, data) {

        if (err) {

            console.log(err)

        } else {

            console.log("Successfully uploaded data to myBucket/myKey",myKey,event);

        }

    });
  
     
  
  



//     var s3 = new AWS.S3();
//   //   var params = JSON.parse(event.body); // let s3 = new AWS.S3()
//   // let buffer = new Buffer (JSON.parse(event.body).pictureString, 'base64');  
  
//   // let testerdata=JSON.parse(event.body).pictureString;
//    let putObject1 = promisify(s3.putObject, s3) 
  
//   await putObject1({
//     Body: 'testerdata',
//     Bucket: 'fb-dev-uploads',
//     Key: 'FILE_NAME',    
//     },function(err, data){
//     if (err) 
//       { 
//         console.log('Error uploading data: ', data) 
//       } else {
//         console.log('succesfully uploaded the image!')
//       }
//   }) ; 
// //     //console.log('this is event\n\n\n',event);
// //     var s3Params = {
// //       Bucket: 'fb-dev-uploads',
// //       Key:  JSON.parse(event.body).name+'.jpg',
// //       ContentType: 'image/jpeg',
// //       ContentEncoding: 'base64',
// //       // ContentMD5:false,
// //       ACL: 'public-read',
// //     };
// // //let temp=JSON.parse(event.body).name;

// //     //      ContentType: params.type,

  
// //     var uploadURL = s3.getSignedUrl('putObject', s3Params);
  
// let test=JSON.parse(event.body).pictureString;
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({event }),
    })
}


// 'use strict';

// const AWS = require('aws-sdk');
// const fs = require('fs');

// module.exports.addImages = (event, context, callback) => {
  
//   console.log(event.body+'\n\n\n\n\n');
  
//     var s3 = new AWS.S3();
//     let buffer = new Buffer(event.body, 'base64');

//   console.log("Starting File saving!");

//   var params = {Bucket: 'fb-api-dev-uploads', Key: "TestFILE.png", Body: buffer, ContentEncoding: 'image/jpeg'};
    
//     //console.log(params);
    
//     s3.putObject(params, function(err, data){
//       if (err) 
//         { 
//           console.log(err);
//         } else {
//           console.log('succesfully uploaded the image!');
//         }
//     });
  

//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   callback(null, response);
// };