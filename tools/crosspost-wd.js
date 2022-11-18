#!/usr/bin/env node

const fs = require("fs");
const { simpleGit, CleanOptions } = require("simple-git");
const path = require("path");
const matter = require("gray-matter");
const os = require("os");
const { format } = require("date-fns");
const { stringify } = require("yaml");


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

    const wd_post_slug = `${format(new Date(), "yyyy-MM-dd")}-${slug}`;

    // setup temp working directory
    const working_dir = fs.mkdtempSync(
        path.join(os.tmpdir(),"crosspost-wd_")
    );

    // clone westerndevs repo
    const dest_repo = path.join(working_dir, "western-devs-website");
    simpleGit().clone("https://www.github.com/westerndevs/western-devs-website", dest_repo, ()=> {
        // copy images
        const post_files = fs.readdirSync(source_path);
        if(post_files && post_files.length > 0) {
            // create image directory
            const img_dir = path.join(dest_repo, "source/images" ,wd_post_slug);
            fs.mkdirSync(img_dir, { recursive: true });
            
            // create post file in memory
            const original_file_name = path.join(source_path, "index.md");
            const { data: frontMatter, content } = matter(fs.readFileSync(original_file_name));

            // TODO: edit front matter
            frontMatter["originalUrl"] = `https://www.davidwesst.com/blog/${slug}`;
            frontMatter["authorId"] = "david_wesst";
            frontMatter["excerpt"] = frontMatter["description"];
            delete frontMatter["description"];
            
            // copy images
            const acceptedImageExtensions = [".webp", ".png", ".jpeg", ".jpg"];
            post_files.forEach((file)=> {
                if(acceptedImageExtensions.indexOf(path.extname(file)) > 0) {
                    console.log(`Copying image...${file}`);
                    fs.copyFileSync(path.join(source_path, file), path.join(img_dir, file));
                    // TODO: edit image links in post file
                }
            });

            // write file
            const wd_file_name = path.join(dest_repo, "source/_posts", `${wd_post_slug}.md`);
            const wd_file_content = `---\n${stringify(frontMatter)}---\n${content}`;
            fs.writeFileSync(wd_file_name, wd_file_content);

            //fs.copyFileSync(path.join(source_path, "index.md"), wd_file_name);
            
            // add and commit change

            // push change
            
            // clean-up temp directory
            // fs.rmdirSync(working_dir);
        }
    });

}
else {
    console.error(`${source_dir} was not found.`);
}