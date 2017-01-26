#MediaFile Model

![mediaFile model class diagram](./diagram.png)

##MediaFile
###id: Integer {readOnly}
The id of the mediafile is set by the system.

###name: String (Required)
The name should be a meaningful identifier for the mediafile.

###media_file_id_as_parent_directory: Integer
The id of the parent directory which can only be a mediafile without attachable. (Default NULL)

###thumbnail_hash: String {readOnly}
The hash of the thumbnail file.

>**Important:** Thumbnails are generated automatically by the system.

###thumbnail_extension: String {readOnly}
The file extension of the thumbnail. 

>**Important:** Thumbnails are generated automatically by the system.

###thumbnail_mime_type: String {readOnly}
The mime type of the mediafiles thumbnail.

>**Important:** Thumbnails are generated automatically by the system.

###attachable_type: String {readOnly}
Attachable types are set by the system depending on which data you provide the mediafile route ([More information](http://cloud.viewneo.com/doc/api#/MediaFile)).

Possible values and meanings are:

| Value | Meaning |
| --- | --- |
| NULL | Mediafile is a directory |
| Website | Mediafile is linked to a website |
| Template | Mediafile is linked to a template |
| PhysicalFile | Mediafile is linked to an uploaded physical file |

###created_at: Timestamp {readOnly}
Timestamp set by the system of when the mediafile was created.

###updated_at: Timestamp {readOnly}
Timestamp set by the system of when the mediafile was updated the last time.

###attachable_id: Integer {readOnly}
Id of the attached resource.

###media_file_id_as_parent_directory: Integer
Id of the directory where the mediafile should be stored.

###company_id: Integer {readOnly}
Id of the company that owns the mediafile. This value is set by the system.