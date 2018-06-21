
const uuid = require('uuid');
const AWS = require('aws-sdk')
// const dynamoDb = new AWS.DynamoDB.DocumentClient();
const dynamoDb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

module.exports.read = (event, context, callback) => {
    // const params = {
    //   TableName: process.env.DYNAMODB_TABLE
    // }

    let data= JSON.parse(event.body);

    var params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        'id' : {S: data.email},
      },
      
    };
    dynamoDb.getItem(params, (error, result) => {
      if (error) {
        console.error(error)
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t fetch the todos.'
        })
        return
      }
      const response = {
        statusCode: 200,
        body: JSON.stringify(result)
      }
      callback(null, response)
    })
  }