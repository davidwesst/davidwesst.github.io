#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { cleanFrontMatterTags } = require("./lib/tags");

/**
 * Recursively collects all the paths for markdown files.
 * @param {String} targetDir A directory path containing markdown files.
 * @returns {Array<string>} An array of paths to markdown files.
 */
function getMarkdownFilePaths(targetDir, files = []) {
    const directoryContent = fs.readdirSync(targetDir);
    for(item of directoryContent) {
        const extension = path.extname(item);
        if(extension === '') {
            // this is another directory
            files.join(getMarkdownFilePaths(path.join(targetDir, item), files));
        }
        else if(extension === ".md") {
            files.push(path.join(targetDir, item));
        }
    };

    return files;
}

// process arguments
const [,, targetDir, ...args] = process.argv;
if(targetDir && fs.existsSync(targetDir)) {
    // collect all markdown files
    const files = getMarkdownFilePaths(targetDir);
    // update tags
    files.map((file) => {
        cleanFrontMatterTags(file);
    });
}
else {
    console.error(`The target directory ${targetDir} either does not exist.`);
}