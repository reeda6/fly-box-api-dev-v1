const uuid = require('uuid');
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.write = (event, context, callback) => {
  const data = JSON.parse(event.body);
  //console.log(data);
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: data.email,
      text: data.text,
      url: data.url,
      coordinateArray:data.coordinateArray
    }
  }
  dynamoDb.put(params, (error) => {
    if (error) {
      console.error(error)
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.'
      })
      return
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)

    }
    console.log(response);
    callback(null, response)
  })
}