#!/usr/bin/env node

const fs = require("fs");
const git = require("simple-git");
const path = require("path");
const os = require("os");

// pull arguments
const [,,...args] = process.argv;

// setup temp working directory
const working_dir_path = path.join(os.tmpdir(), "crosspost-wd", "_");
const working_dir = fs.mkdtempSync(
    path.join(os.tmpdir(),"crosspost-wd_") 
);

// clean-up temp directory
fs.rmdirSync(working_dir);


