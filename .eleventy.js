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
    eleventyConfig.addLayoutAlias("base", "base.njk");
    eleventyConfig.addLayoutAlias("post", "post.njk");
    
    return {
        dir: {
            input: "src/",
            output: "public/",
            includes: "_includes",
            layouts: "_layouts"
        }
    }
}