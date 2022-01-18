---
title: "Working around 'Refuses to Connect' Issues with IFrame Embedded Twitch Players"
date: 2022-01-18T12:00:00-06:00
categories:
- code
tags:
- livestream
- markdown
- html
- twitch
description: "I've started embedding Twitch.tv IFrames"
---


       
> Failed to load resource: the server responded with a status of 403 ()

and


> Refused to frame 'https://player.twitch.tv/' because an ancestor violates the following Content Security Policy directive: "frame-ancestors  https://www.davidwesst.com".

```
<iframe
    src="https://player.twitch.tv/?video=1241089585&parent=127.0.0.1&parent=www.davidwesst.com"
    height="360"
    width="640"
    allowfullscreen="true">
</iframe>
```