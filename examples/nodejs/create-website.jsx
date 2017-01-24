var https = require('https');

// Your personal access token (see README.md for more information)
var access_token = 'YOUR ACCESS TOKEN';

// Data sent to the server
var body = JSON.stringify({
    name: 'viewneo',
    media_file_id_as_parent_directory: 0,
    url: 'https://www.viewneo.com'
});

var options = {
    host: 'cloud.viewneo.com',
    port: 443,
    path: '/api/v1.0/mediafile',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    }
};

var request = https.request(options, (result) => {
    console.log('statusCode:', result.statusCode);
    console.log('headers:', result.headers);

    result.on('data', (data) => {
        process.stdout.write(data);
    });

    result.on('error', (error) => {
        console.error(error);
    });
});

request.write(body);
request.end();