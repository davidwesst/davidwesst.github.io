const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const { stringify } = require("yaml");

/**
 * Normalize string to following standardized tag name formatting
 * @param {string} tagName 
 */
function normalizeTagName(tagName) {
    return tagName.toLowerCase().replaceAll(" ","-");
}

/**
 * Update the 'tags' section in the front matter of the referenced 
 * @param {String} targetFilePath Path to the markdown file with tags to be cleaned.
 * @param {Function} normalizer OPTIONAL. A function that normalizes a tag string. Must return a string.
 */
function cleanFrontMatterTags(targetFilePath, normalizer = normalizeTagName) {
    if(fs.existsSync(targetFilePath)) {
        const targetFile = fs.readFileSync(targetFilePath);
        const { data: frontMatter, content, isEmpty } = matter(targetFile);

        if(!isEmpty && frontMatter["tags"]) {
            let updatedTags = [];
            frontMatter["tags"].map((tag)=> {
                updatedTags.push(normalizer(tag));
            });
            
            frontMatter["tags"] = updatedTags;
            fs.writeFileSync(`${targetFilePath}`,`---\n\n${stringify(frontMatter)}\n---\n${content}`);
        }
        else {
            console.error(`File ${targetFilePath} is either empty or has no tags in the front matter.`);
        }
    }
    else {
        console.error(`File ${targetFilePath} does not exist.`);
    }
}

module.exports = {
    cleanFrontMatterTags,
    normalizeTagName
}