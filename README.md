# Ola Maps Platform Tiles Demo
This is a minimum working example of the Ola Maps Platform Tiling system

<img width="1111" alt="image" src="https://github.com/monizb/ola-maps-demo/assets/46259712/d1758e18-1746-4704-9163-31412c784438">


## What's the issue? 

Following the guide from here: https://maps.olakrutrim.com/docs/map-tiles, you will quickly realise how buggy the Ola Maps platform is right now (9th July 2024)

- You need to link your project to a subscription first for the api key to function
- The map renderer calls app.olamaps.io instead of api.olamaps.io - resulting in the map never being rendered
- It uses API key in the param (yeah, I know) and because of this you can't just append ?api_key=api_key to the URL since it can alreadyhave some query params

## What's the demo about

- The demo just renders the full map on Map Libre fixing the above issues, and it currently maps only India
- It has a random marker dropped somewhere to show you how markers look
- You can click on multiple places in the map to create a path between them

## What's next

- If this generates some interest, will begin converting this into a full fledged wrapper
- Hopefully Ola fixes its incredibly laggy and unreliable maps soon

## Disclaimer
This is in no way production ready code, its something I have setup and debugged in an hour, play around and have fun. No guarantees or warranties :)
