'use strict';

module.exports.hello = (event, context, callback) => {
	
	var name = event.headers.imageName;
	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify({
			
			input: name
		})
	};

	callback(null, response);
};