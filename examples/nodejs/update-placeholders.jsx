const request = require('request');
const readline = require('readline');

// create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Your personal access token (see README.md for more information)
var access_token = 'YOUR ACCESS TOKEN';

// options for the api request including the json body
var options = {
    url: 'https://cloud.viewneo.com/api/v1.0/template',
    method: 'POST',
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    },
    // the body contains all parameters to create a template with a text element in it
    body: {
        'template':{
            'name':'New Template',
            'text_direction':0,
            'width':1920,
            'height':1080,
            'external_data_mode':0,
            'background_color':'#FFFFFF',
            'default_duration':30,
            'template_elements':[
                {
                    'name':'Text',
                    'x':660,
                    'y':240,
                    'width':600,
                    'height':600,
                    'angle':0,
                    'background_color':'#CCCCCC',
                    'opacity':1,
                    'border_width':0,
                    'border_color':'#000000',
                    'border_radius':0,
                    'drawable_type':'TextElement',
                    'animation':'none',
                    'animation_duration':1,
                    'animation_delay':0,
                    'animation_iteration_count':1,
                    'animation_end':'none',
                    'animation_end_duration':1,
                    'animation_end_delay':1,
                    'animation_end_iteration_count':1,
                    'is_drop_shadow_enabled':0,
                    'shadow_x':20,
                    'shadow_y':20,
                    'shadow_blur':0,
                    'shadow_size':0,
                    'shadow_color':'#000000',
                    'shadow_opacity':'0.75',
                    'is_shadow_inset':0,
                    'video_start':0,
                    'is_inactive':0,
                    'drawable':{
                        'font_size':32,
                        'color':'#000000',
                        'text_align':'left',
                        'font_weight':'normal',
                        'line_height':1.25,
                        'text_decoration':'none',
                        'font_family':'Arial',
                        'text':null
                    },
                    'z_index':0
                }
            ]
        }
    }
};

// request to create template with placeholder text element
request(options, (error, response, body) => {
    if (error) {
        return console.error('Error: ', error);
    }

    console.log('Body response: '+JSON.stringify(body));

    // Get user input for the text to be replaced
    rl.question('Your text to replace the placeholder: ', (answer) => {
        body.template_elements[0].drawable.text = answer;

        // options for content creation request
        var options = {
            url: 'https://cloud.viewneo.com/api/v1.0/mediafile',
            method: 'POST',
            json: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: {
                'media_file_id_as_parent_directory': 0,
                'template':body
            }
        };

        // request to create the content with replaced placeholder
        request(options, (error, response, body) => {
            if (error) {
                return console.error('Error: ', error);
            }
            console.log('Body response: '+JSON.stringify(body));
        });

        rl.close();
    });
});