---

title: "How much is enough documentation?"
date: "2022-11-16T12:00:00-05:00"
tags:
- madr
- c4-model
- decision
- diagram
- documentation
- README.md
- markdown
description: ""
thumbnail: ""

---

[1]: https://github.com/davidwesst/website/blob/main/CHANGELOG.md
[2]: https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/

Documentation takes a lot of different forms. Decision requests, digrams, and just plain ol' word filled documents. Historically speaking, I have been guilty of being that developer that loathed documentation, waited until the last minute, and usually producted something that won't provide much help when it is actually needed.

Since [working on v10 of my website][1] I wanted to explore this problem I have around documentation. Ultimately, documentation is _necessary_. If I think back to my own experience with my own projects, they can end up sitting on the shelve for a long time. When go back to revisit it, other than analyzing my own code (on prototype stuff) can be a serious time sink to even get things in a running state without decent documentation.

But how much too much? How detailed is too detailed, or not detailed enough? With the recent work I have putting into [v10 of my website][1], I wanted to explore this problem and figure out the "right amount" of documentation for my projects and kinds of documents are needed.

## What do you _need_?

And I do mean _needed_ not _wanted_. Everyone _wants_ documentation of all kinds, but what does an audience of one (i.e., your future self) _need_ to get the project back off the shelve and into working order?

This is how I approach documentation. **NEED MORE STUFF HERE**

### README.md

It might seem obvious but, I have read enough of my own empty or default README.md files to know that this is easily the most important piece of documentation you write. Without it, the project will require code analysis to figure out what it _actually_ is, and that is never good.

There are a lot of great examples `README.md` files on GitHub to look at, but I would suggest you start simple if you're just getting off the ground. My take was to include system requirements and the steps to setup, build, and start the project for the developer.

When searching for info on this, I really like [this article from Hillary Nyakundi][2] provided a great "how-to" on making a good README.md.

### Decisions (also known as ADs or Architecture Decisions)

- MADR
- adr.github.io
- Reference docs

### Diagrams

- c4-model
- example diagram

### Notable Mention: CHANGELOG

Not required, but can help you reflect and appreciate the work you've done. 

## Conclusion / TL;DR;

In short, the documentation I _need_ (not _want_) consists of the following, with the following priority:

1. README.md
2. Decisions
3. Diagrams
4. (Nice, but not required) CHANGELOG.md

Thanks for playing.

~ DW



