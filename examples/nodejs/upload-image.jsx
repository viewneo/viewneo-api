const request = require('request');
const fs = require('fs');

// Your personal access token (see README.md for more information)
const access_token = 'YOUR ACCESS TOKEN';

// options for the api request including form data
var options = {
    url: 'https://cloud.viewneo.com/api/v1.0/mediafile',
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + access_token
    },
    formData: {
        media_file_id_as_parent_directory: 0,
        file: fs.createReadStream('./src/freya.jpg')
    }
};

// perform the request and log the response
request(options, (error, response, body) => {
    if (error) {
        return console.error('Error: ', error);
    }
    console.log('Response body: ' + body);
});