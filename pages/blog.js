import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'

export default function Blog({ allPostsData }) {
    return (
        <>
            <h1>Blog</h1>
            <Link href="/">
                <a>Go Back Home</a>
            </Link>
            <h2>Blog Posts</h2>
            <ul>
                {allPostsData.map(({ id, date, title, excerpt }) => (
                    <li key={id}>
                        <Link href="/blog/[id]" as={`/blog/${id}`} >
                            <a>{title}</a>
                        </Link>
                        <br />
                        {date}
                    </li>
                ))}
            </ul>

        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}