module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("./src/assets")

  return {
    dir: {
        input: "src",
        output: "dist"
    },
    passthroughFileCopy: true
  }
}