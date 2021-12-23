---
title: "Cannot Find Module Bootloader.js in VSCode DevContainer"
date: "December 27, 2021"
categories:
- build-cool-stuff
tags:
- devcontainer
- nodejs
- vscode
description: "Problem: When running node commands from within a DevContainer, you receive the error 'Cannot find module bootloader.js'. This post contains the solution."
---
When working with NodeJS inside a DevContainer using VSCode, sometimes an error comes up whenever you try to run a node application or npm command (i.e. npm install). The error looks something like this:

> Error: Cannot find module '/some/path/with/ahashvalue/vscode-js-debug-bootloader.js'

It happened to me [on stream the other day](https://www.twitch.tv/videos/1241089586) and thought I'd take a moment to document the fix.

After some searching, this [GitHub Issue](200~https://github.com/microsoft/vscode-js-debug/issues/374) comes up with the [the following](https://github.com/microsoft/vscode-js-debug/issues/374#issuecomment-622239998) answer to resolve it:

> Because this is happening in tasks, I think you're running into microsoft/vscode#96375. You should be able to fix this by:
>
> 1) Setting debug.node.autoAttach to "disabled" (to clear previous bad state)
> 2) Setting it back to on or off, as you prefer
> 3) Using thewarning icon on the top right to relaunch terminals as desired (or just reopen/reload VS Code)

Follow the steps in the VSCode settings for the DevContainer (i.e. workspaace) and it works. Here's an example of me doing it on stream. **Note:** The fix happens right away, but it takes a minute for me to test and confirm it.

<div id="twitch-embed"></div>
<script src="https://player.twitch.tv/js/embed/v1.js"></script>
<script type="text/javascript">
  new Twitch.Player("twitch-embed", {
    video: "1241089585"
  });
</script>

Here's hoping this helps someone else out there looking for this solution.

Thanks for playing.

~ DW
