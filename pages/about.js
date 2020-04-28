import Link from 'next/link'

import { getSortedPostsData } from '../lib/blog'

export default function About({ allPostsData }) {
    return (
        <>
            <h1>About DW!</h1>
            <Link href="/">
                <a>Go Back Home</a>
            </Link>
            <h2>Blog Posts</h2>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                    {title}
                    <br />
                    {id}
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