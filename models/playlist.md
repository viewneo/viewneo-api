#Playlist Model
Contents to play on your devices are organized as [playlist entries](#playlistentry) in [playlists](#playlist).

![playlist model class diagram](./images/playlist.png)

##Playlist
####id: Integer
####name: String
####comment: String
####created_at: DateTime
####updated_at: DateTime
####company_id: Integer

##PlaylistEntry
####index: Integer
The *index* describes the order of the playlist entries ascending.
####play_rule: Integer
When should the content be played?
- 0: According to schedule
- 1: Always
- 2 Never
####start_date: Date
Content is played from this day on.

Format `YYYY-MM-DD`
>**Important:** To take effect of this setting `play_rule` must go according to schedule
####end_date: Date
Content is played until this day. Format `YYYY-MM-DD`
>**Important:** To take effect of this setting `play_rule` must go according to schedule
####start_time: Time
Content is played from the specified time. Format `HH:MM:SS`
>**Important:** To take effect of this setting `play_rule` must go according to schedule
####end_time: Time
Content is played until the specified time. Format `HH:MM:SS`
>**Important:** To take effect of this setting `play_rule` must go according to schedule


