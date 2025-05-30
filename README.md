# Website (davidwesst.com)

This is the source code used to generated [www.davidwesst.com](https://www.davidwesst.com), powered by [11ty](https://11ty.dev).

## Architecture Decisions & Documentation

Architecture decisions (ADs) and other documentation can be found in the `/docs/decisions` directory. 

1. MADR for Decision Tracking
2. 11ty for Static Site Generation

## Getting Started with Development

The project requires that Node v16+ be installed on the development machine in order to build and run the project. Personally, I use [nvs](https://github.com/jasongin/nvs), but it can be installed in many other ways.

Once the requirements are setup:

1. Clone the repository
2. From the project root run `npm install`
3. (_Optional_) Create an `.env` file in the project root with the appropriate values, based on `.env.example`.
	- The project with run without this, but will throw errors when initializing Application Insights.
4. Run `npm run dev` to build the site AND host it at [http://localhost:8080/](http://localhost:8080/).

...and you should be up and running!

## Content Guidelines

### Blog Posts

The featured image should always be _1600x630px_. Alt text should also be specified in the header.

```yaml
featured_image: defining-problems_thumbnail.png
featured_image_alt: "A sketch of a man with a fuchsia tie and women dressed in fuchsia blouse looking at a black question mark made up of small cubes"
```
