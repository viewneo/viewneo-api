const request = require('request');

// Your personal access token (see README.md for more information)
const access_token = 'YOUR ACCESS TOKEN';

// options for the api request including the json body
var options = {
    url: 'https://cloud.viewneo.com/api/v1.0/mediafile',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    },
    body: JSON.stringify({
        name: 'viewneo',
        media_file_id_as_parent_directory: 0,
        url: 'https://www.viewneo.com'
    })
};

// perform the request and log the response
request(options, (error, response, body) => {
    if (error) {
        return console.error('Error: ', error);
    }
    console.log('Response body: ' + body);
});