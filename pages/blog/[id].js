import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'

export default function BlogPost({ postData }) {
  return (
    <>
        <h1>{postData.title}</h1>
        <article>
            <div>{postData.id}</div>
            <div>{postData.date}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
        </article>
        <footer>
            <Link href="/blog">
                <a>Back to Post Listing</a>
            </Link>
        </footer>
    </>
  )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
  
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}