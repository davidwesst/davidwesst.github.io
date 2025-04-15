import { execSync } from 'child_process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

function GetVersion() {
    /*
    Source from https://raw.githubusercontent.com/fullstackmb/fullstackmb.github.io/refs/heads/main/src/_data/build.js from Full Stack Manitoba
    */
    
    // Get shortened git hash
    const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
    
    // Get package.json json object
    let pkg = { version: 'unknown' };
    try {
        pkg = require('../package.json');
    } catch (e) {
        console.warn('Could not load package.json, using fallback version');
    }

    return `${pkg.version}+${gitHash}`;
}

export default {
    url: "https://davidwesst.com",
    title: "David Wesst",
    description: "Tech, games, and creative experiments from the mind of David Wesst. Come for the code, stay for the side quests.",
    version: GetVersion(),
    language: "en"
}