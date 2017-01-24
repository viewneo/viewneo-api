# viewneo-api

## About
[viewneo](https://www.viewneo.com/) is a proprietary, cloud-based Digital Signage Software. You can use viewneo to work with our pre-desigend templates or create your own content within minutes. Furthermore users can integrate dynamic content like homepages, facebook posts, as well as weather and news RSS-Feeds. With our **API** you are able to access full functionality of viewneo and embed your own programs like booking systems into viewneo.

## Examples
1. [Create Website](./examples/nodejs/create-website.jsx)

## Authorization
To communicate with the viewneo API you must provide a valid access token in the requests `Authorization` header.
###Personal Access Token
To generate a personal access token visit the [API Settings](https://cloud.viewneo.com/cms#/dashboard/api) in your viewneo account. Click on "**Generate new token**" and store it in a secure place.

>**Important:** Treat your personal access tokens like passwords and never share them with anyone.

###Example Usage
A simple **curl** request with authorization [getting all playlists](http://cloud.viewneo.com/doc/api#!/Playlist/api_playlist_index) belonging to the account associated to the access token. Just replace `YOUR_ACCESS_TOKEN` with a real one.
```
curl -X GET -H 'Accept: application/json' -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' 'https://cloud.viewneo.com/api/v1.0/playlist'
```