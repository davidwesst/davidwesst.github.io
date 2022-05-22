const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");

const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(directoryOutputPlugin);

    // Filters
    eleventyConfig.addFilter("cssmin", (code)=> {
        return new CleanCSS({}).minify(code).styles;
    });

    // Alias
    eleventyConfig.addLayoutAlias("base", "base.njk");
    
    return {
        dir: {
            input: "src/",
            output: "public/",
            includes: "_includes",
            layouts: "_layouts"
        }
    }
}