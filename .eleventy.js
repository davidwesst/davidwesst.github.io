const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginImage = require("@11ty/eleventy-img");

const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItImages = require("markdown-it-eleventy-img");

const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.setUseGitIgnore(false);

  // passthrough assets referenced through HTML (i.e. non-webpack assets)
  eleventyConfig.addPassthroughCopy({ "src/assets/static/" : "/static/" });

  // configure markdown templates
  const mdOptions = {
    html: true,
    break: true,
    linkify: true
  };
  const pathResolver = (filepath, env) => {
    let resolvedPath = filepath;
    
    // if path is remote, just return path
    const isRemoteRegExp = /^https?:\/\//i;
    if(typeof filepath === "string" && !isRemoteRegExp.test(filepath)) {
      resolvedPath = path.join(path.dirname(env.page.inputPath), filepath);
    }

    return resolvedPath;
  };

  let mdLibrary = markdownIt(mdOptions)
                  .use(markdownItEmoji)
                  .use(markdownItImages, {
                    imgOptions: {
                      widths: [300, 500, 800],
                      urlPath: "/img/",
                      outputDir: path.join("dist/img/"),
                      formats: ["avif", "webp", "jpeg"]
                    },
                    globalAttributes: {
                      sizes: "100vw"
                    },
                    resolvePath: pathResolver
                  });
  eleventyConfig.setLibrary("md", mdLibrary);

	// shortcode: frontmatter image
	async function frontMatterImageShortcode(src) {
		const imageSrc = path.join("src", this.page.url, src);
		let metadata = await pluginImage(imageSrc, {
			widths: [1200],
			formats: ["png", "webp"],
			outputDir: "dist/img/"
		});

		return metadata.png[0].url.trim();
	}
	eleventyConfig.addLiquidShortcode("image_uri", frontMatterImageShortcode);

  return {
    dir: {
        input: "src",
        output: "dist",
        layouts: "_layouts"
    },
    passthroughFileCopy: true
  }
}
