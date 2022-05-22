module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/style/*.css");
    
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src/",
            output: "public/",
            includes: "includes",
            layouts: "layouts"
        }
    }
}