#!/usr/bin/env node

const fs = require("fs");
const { simpleGit, CleanOptions } = require("simple-git");
const path = require("path");
const os = require("os");
const { format } = require("date-fns");


// pull arguments
// 0 = slug
// 1 = path (default cwd)
// 2 = 
const [,,...args] = process.argv;

// locate source post directory
const slug = args[0];
const source_path = path.resolve(args[1]);

if(fs.existsSync(path.resolve(source_path)) === true) {
    console.log(`${source_path} exists!`);

    // setup temp working directory
    const working_dir = fs.mkdtempSync(
        path.join(os.tmpdir(),"crosspost-wd_")
    );

    // clone westerndevs repo
    const dest_repo = path.join(working_dir, "western-devs-website");
    simpleGit().clone("https://www.github.com/westerndevs/western-devs-website", dest_repo, ()=> {
        // copy images

        // create post
        const file_name = `${format(new Date(), "yyyy-MM-dd")}-${slug}.md`;
        fs.copyFileSync(path.join(source_path, "index.md"), path.join(dest_repo, "source/_posts", file_name));
        // TODO: edit front matter
        // TODO: edit image links

        // commit change

        // clean-up temp directory
        // fs.rmdirSync(working_dir);

    });

}
else {
    console.error(`${source_dir} was not found.`);
}

console.log("\n---END---\n");