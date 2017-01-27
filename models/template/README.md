#Template Model

- [Template](#template)

##Template
###id: Integer {readOnly}
The id of the template is set by the system.

###name: String (Required)
The name should be a meaningful identifier for the template.

###text_direction: TinyInteger (Required)
The text direction of the texts used in the template.

- **0**: Left to right (Default)
- **1**: Right to left

###external_data_url: String
The URL to the RSS-Feed, Atom-Feed, JSON or XML API you want to get information from. (Default `NULL`)

###external_data_type: String

###external_data_cache: String

###external_data_mode: TinyInt

###background_color: String (Required)
Background color of the template as HEX Code. (Default `#FFFFFF`)

###width: Double (Required)
Width of the template in specified unit. (Default `0.00`)

###height: Double (Required)
Height of the template in specified unit. (Default `0.00`)

###width_unit: String (Required)
Unit of the width attribute. (Default `px`)

###height_unit: String (Required)
Unit of the height attribute. (Default `px`)

###default_duration: Integer (Required)
Default duration of the content created from this template in seconds. (Default `30`)

###created_at: Timestamp {readOnly}
Timestamp set by the system of when the template was created.

###updated_at: Timestamp {readOnly}
Timestamp set by the system of when the template was updated last time.

###company_id: Integer {readOnly}
Id of the company that owns the template.