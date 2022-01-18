import React, { useEffect, useState } from 'react'
import { Heading } from '../components/Text/Heading'

export default function BlogLayout({ children, frontMatter }) {
    return (
        <>
            <Heading>
                {frontMatter.title}
            </Heading>

            <div className="container mx-auto p-4">
                {children}
            </div>
        </>
    )
}