
# Website (davidwesst.com)

This is the source code used to generated [www.davidwesst.com](https://www.davidwesst.com), powered by [11ty](https://11ty.dev).

## Architecture Decisions & Documentation

Architecture decisions (ADs) and other documentation can be found in the `/docs` directory. 

## Getting Started with Development

The project requires that Node v16+ be installed on the development machine in order to build and run the project. Personally, I use [nvs](https://github.com/jasongin/nvs), but it can be installed in many other ways.

Once the requirements are setup:

1. Clone the repository
2. From the project root run `npm install`
3. (_Optional_) Create an `.env` file in the project root with the appropriate values, based on `.env.example`.
	- The project with run without this, but will throw errors when initializing Application Insights.
4. Run `npm run dev` to build the site AND host it at [http://localhost:8080/](http://localhost:8080/).

...and you should be up and running!
