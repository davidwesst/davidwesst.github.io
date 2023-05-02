# Changelog
This a log of all the notable changes for [davidwesst.com](https://www.davidwesst.com/). You can find the source code on [GitHub](https://github.com/davidwesst/website).

## [10.4.3] - 2023-05-02
### Fixes
- Added `dependabot.yml` file to increase version in dependabot versioning strategy
- Updated webpack and simple-git packages to manually resolve two dependabot PRs

## [10.4.2] - 2023-05-01
### Fixes
- Fonts too large on laptop displays ([#210](https://github.com/davidwesst/website/issues/210))

## [10.4.1] - 2023-05-01
### Changes
- Collapsable site navigation on mobile ([#206](https://github.com/davidwesst/website/issues/206))
- Added hero element on home page ([#207](https://github.com/davidwesst/website/issues/207))
- Set max content width to 1280px ([#200](https://github.com/davidwesst/website/issues/200))

## [10.4.0] - 2023-04-27
### Changes
- Upgraded to Eleventy 2.0.1, Node 18

### Added
- DevContainer/Codespaces support for development
- Custom 404 page

## [10.3.1] - 2022-12-20
### Changes
- Tags are now rendered using a single component to ensure continuity
- Tags are now displayed alphabetically

## [10.3.0] - 2022-12-19
### Added
- Content tag pages to show all blog posts with the same tag ([#148](https://github.com/davidwesst/website/148))
- Tags to HTML head using `og:article:tag` namespace from Open Graph protocol ([#169](https://github.com/davidwesst/169))

### Changes
- Normalized tags in all existing blog posts ([#172](https://github.com/davidwesst/website/172))

## [10.2.1] - 2022-12-07
### Changes
- Updated method which `crosspost-wd.js` adds files to git to provide more consistency.

## [10.2.0] - 2022-12-03
### Added
- Crosspost CLI utility to speed up crossposting to westerndevs.com ([[#36](https://github.com/davidwesst/website/issues/36)])

### Changes
- Added latest blog post to home page ([[#166](https://github.com/davidwesst/website/issues/166)])

## [10.1.2] - 2022-11-16
### Changes
- Using PNG over WEBP for post open graph images for compatibility with LinkedIn

## [10.1.1] - 2022-11-12
### Fixes
- Minor tweaks to meta tags for LinkedIn support ([#161](https://github.com/davidwesst/website/issues/161))

## [10.1.0] - 2022-11-11
### Added
- Open Graph and meta tag support for pages and (blog) articles ([#157](https://github.com/davidwesst/website/issues/157))
- Confirmed site works in Google Search Console (not using Google Analytics) ([#45](https://github.com/davidwesst/website/issues/45))
- Confirmed site works in Bing Webmaster Tools (not using Microsoft Clarity) ([#16](https://github.com/davidwesst/website/issues/16))

### Fixes
- How I use [Semantic Versioning](https://semver.org) as new, backwards compatible features should get a minor release, not a patch release.

## [10.0.2] - 2022-11-08
### Added
- Generator tag in `<head>` ([#149](https://github.com/davidwesst/website/issues/149))

### Changes
- Updated version of `markdown-it-eleventy-img` plugin ([#154](https://github.com/davidwesst/website/issues/154))

### Fixes
- Unintended links in blog post "How much is enough documentation"
- URLs in in `sitemap.xml` ([#154](https://github.com/davidwesst/website/issues/154))

## [10.0.1] - 2022-10-25
### Added
- Dates and tags on blog listing and blog page template ([#144](https://github.com/davidwesst/website/issues/144) [#138](https://github.com/davidwesst/website/issues/138))
- Application Insights for performance and usage monitoring ([#139](https://github.com/davidwesst/website/issues/139))
- Opt-In dialogue for cookie usage ([#141](https://github.com/davidwesst/website/issues/141) [#147](https://github.com/davidwesst/website/issues/147))
- Architecture Decision Records in documentation ([#115](https://github.com/davidwesst/website/issues/115))

### Changed
- About page content includes Privacy Statement ([#140](https://github.com/davidwesst/website/issues/140))

## [10.0.0] - 2022-10-10
### Added
- Moved to [11ty](https://11ty.dev) to generate site.
- This changelog file 😊

## Changed
- Re-aligned version number with v10.0.0, instead of v9.
- Refreshed style to accomodate not require ReactJS.
- Gamelog page content displays "work-in-progress" message.
- About page content is no longer generated from GitHub profile.
- Cocoboko Studios page listing of "dreams-in-progress" displays a coming soon message.

## Removed
- DevContainer support. This needs to be re-evaluated to determine what features a development environment actually needs.
- TODO.md as issues will be used to manage features
- GatsbyJS dependency

