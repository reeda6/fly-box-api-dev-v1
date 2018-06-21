'use strict';

console.log('entering handler.js');

var AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

module.exports.hello = (event, context, callback) => {
  var params = {
		Item : {
			userId : 'alex'
		},
		TableName : 'fb-api-dev-users'
	};
	documentClient.put(params, function(err, data){
		if(err){
      callback(err, null);
    }else {
      callback(null, data);
    }
	});
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
