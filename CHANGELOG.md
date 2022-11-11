# Changelog
This a log of all the notable changes for [davidwesst.com](https://www.davidwesst.com/). You can find the source code on [GitHub](https://github.com/davidwesst/website).

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

