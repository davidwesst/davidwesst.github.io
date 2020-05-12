import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getSortedPostsData() {
  // Get file names under /posts
  const dirNames = fs.readdirSync(blogDirectory, { withFileTypes: true })
  const allPostsData = dirNames.filter(entry => entry.isDirectory() === true).map(postDir => {
    // Remove ".md" from file name to get id
    const id = postDir.name

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, path.join(postDir.name, 'index.md'))
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // cast dates as strings (see for more info https://github.com/zeit/next.js/discussions/11498)
    if(matterResult.data.updated) {
      matterResult.data.updated = String(matterResult.data.updated)
    }
    matterResult.data.date = String(matterResult.data.date)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const dirNames = fs.readdirSync(blogDirectory, { withFileTypes: true })

  return dirNames.filter(entry => entry.isDirectory() === true).map(dirName => {
    return {
      params: {
        id: dirName.name.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(blogDirectory, `${id}`, `index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // process the post content
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const htmlContent = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    htmlContent,
    ...matterResult.data
  }
}