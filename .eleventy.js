const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(directoryOutputPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Collections
    eleventyConfig.addCollection("blog", (collectionApi)=> {
        return collectionApi.getFilteredByTag("dw-blog");
    });

    // Filters
    eleventyConfig.addFilter("cssmin", (code)=> {
        return new CleanCSS({}).minify(code).styles;
    });
    eleventyConfig.addFilter("debugger", (...args) => {
        console.dir(...args)
        debugger;
    });

    // Shortcodes
    eleventyConfig.addShortcode("asset_img", (imgFile)=> {
        return `<span>image goes here</span>`
    });
    eleventyConfig.addShortcode("img", (imgFile)=> {
        return `<span>image goes here</span>`
    });
    eleventyConfig.addShortcode("youtube", (ytCode)=> {
        return `<span>youtube video goes here</span>`
    });
    eleventyConfig.addShortcode("codeblock", (ytCode)=> {
        return `<span>codeblock video goes here</span>`
    });
    eleventyConfig.addShortcode("endcodeblock", (ytCode)=> {
        return `<span>endcodeblock video goes here</span>`
    });
    eleventyConfig.addShortcode("post_link", (ytCode)=> {
        return `<span>post_link goes here</span>`
    });

    // Alias
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
    eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
    
    return {
        dir: {
            input: "src/",
            output: "public/",
            includes: "_includes"
        }
    }
}