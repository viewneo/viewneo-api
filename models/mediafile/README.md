#MediaFile Model

![mediaFile model class diagram](./diagram.png)

##MediaFile
###id: Integer
The id of the mediafile is set by the system.

###name: String (Required)
The name should be a meaningful identifier for the mediafile.

###media_file_id_as_parent_directory: Integer
The id of the parent directory which can only be a mediafile without attachable. (Default NULL)

