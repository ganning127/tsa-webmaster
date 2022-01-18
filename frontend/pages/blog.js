import Head from 'next/head'
import React, { useState } from 'react'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogLayout from '../layouts/blog'

export default function Workshops({ posts }) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
        )
    console.log(filteredBlogPosts)

    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Like reading? Feel free to explore all of our awesome tech blogs!" />
                <meta property="og:title" content="Blog - Bit Project" />
                <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
                <meta property="og:description" content="Like reading? Feel free to explore all of our awesome tech blogs!" />
                <meta property="og:url" content="https://www.bitproject.org/blog" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



        </div>
    )
}


export function Blog({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
}

export async function getStaticProps() {

    const categories = ['blog'];
    const finalPosts = [];

    for (var i = 0; i < categories.length; i++) {
        const retrievedPosts = await getAllFilesFrontMatter(categories[i])
        finalPosts.push(...retrievedPosts)
    }

    return { props: { posts: finalPosts } }
}