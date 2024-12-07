import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
    
    eleventyConfig.setInputDirectory("content");
    eleventyConfig.setOutputDirectory("_site");
    eleventyConfig.setDataDirectory("../data");
    eleventyConfig.setLayoutsDirectory("../layouts");

    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            "./components/**/*.webc"
        ]
    });
    
}