module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/blog/**/*.{jpg,jpeg,png,gif}");

  return {
    dir: {
        input: "src",
        output: "dist",
        layouts: "_layouts"
    },
    passthroughFileCopy: true
  }
}