#!/usr/bin/env node

const fs = require("fs/promises");
const matter = require("gray-matter");
const path = require("path");

async function createTagDataFile() {
    // process arguments
    const [,,...args] = process.argv;
    const postDirPath = args[0] || "src/blog/";
    console.log(postDirPath);

    // read all index.md files in directory and subdirectories
    const posts = await fs.readdir(postDirPath);
    const tags = new Set();
    for(const p of posts) {
        const pStat = await fs.lstat(path.join(postDirPath, p));
        if(await pStat.isDirectory()) {
            // parse front matter to get tags
            const postFilePath = path.join(postDirPath, p, "index.md");
            const postFile = await fs.readFile(postFilePath);
            const { data: frontMatter, content } = await matter(postFile);
            if(frontMatter["tags"]) {
                // add tags for each post to a set 
                for(const tag of frontMatter["tags"]) {
                    // TODO: normalize the string before adding it
                    tags.add(tag.toLowerCase().replaceAll(" ", "-"));
                }
            }
        }
    }

    // output map contents to json file
    await fs.writeFile("./tags.json", JSON.stringify(Array.from(tags).sort()));
};

Promise.resolve(createTagDataFile());