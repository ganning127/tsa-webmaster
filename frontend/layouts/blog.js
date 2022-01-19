import Head from 'next/head'
import React from 'react'
import { Heading } from '../components/Text/Heading'

export default function BlogLayout({ children, frontMatter }) {
    return (
        <>
            <Head>
                <title>{`${frontMatter.title} – RoboReach`}</title>
            </Head>

            <div className="container mx-auto p-4">

                <div className="mt-4 max-w-4xl mx-auto">
                    <Heading>
                        {frontMatter.title}
                    </Heading>
                    <img src={frontMatter.image} className='mx-auto  rounded-md' />

                    <p className="font-semibold italic text-xl mt-4 text-center">{frontMatter.readingTime.text}</p>


                    <hr className="my-4 max-w-4xl" />
                    {children}

                </div>
            </div>
        </>
    )
}