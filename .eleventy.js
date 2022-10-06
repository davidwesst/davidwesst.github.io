const pluginRss = require("@11ty/eleventy-plugin-rss");

const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("./src/assets");

  // configure markdown templates
  const mdOptions = {
    html: true
  };
  let mdLibrary = markdownIt(mdOptions)
                  .use(markdownItEmoji);
  eleventyConfig.setLibrary("md", mdLibrary);

  return {
    dir: {
        input: "src",
        output: "dist",
        layouts: "_layouts"
    },
    passthroughFileCopy: true
  }
}