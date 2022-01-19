import Head from 'next/head'
import { Landing } from '../components/Landing'
import { MedSep } from '../components/Separators/MedSep'
import { SmallSep } from '../components/Separators/SmallSep'
import { LeftTextWithButton } from '../components/TwoCol/LeftTextWithButton'
import { RightTextWithButton } from '../components/TwoCol/RightTextWithButton'
import { SmallSection } from '../components/Landing/SmallSection'
import { Heading } from '../components/Text/Heading'
import { Footer } from '../components/Footer'
import { TriColCards } from '../components/Displays/TriColCards'
import Serve from '../data/whoWeServe.json'
import { TeamGrid } from '../components/Displays/TeamGrid'
import Team from '../data/team.json'
import ByNumbers from '../data/byNumbers.json'
import { TriColCounter } from '../components/Displays/TriColCounter'
import { ChartDualCol } from '../components/Displays/ChartDualCol'
import { getAllFilesFrontMatter } from '../lib/mdx'
import { BlogCard } from '../components/Cards/BlogCard'
export default function Impact({ posts }) {

    return (
        <>
            <Head>
                <title>Impact - RoboReach</title>
            </Head>

            <Landing
                title="Our Impact"
                desc="Changing the world one student at a time"
            />
            <MedSep />
            <div className="container mx-auto px-4">
                <Heading>By the numbers</Heading>
                <TriColCounter data={ByNumbers} />
                <MedSep />

                <ChartDualCol />


                <MedSep />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                    {
                        posts.map((post, index) => {
                            return (
                                <BlogCard
                                    key={index}
                                    title={post.title}
                                    image={post.image}
                                    description={post.summary}
                                    publishedAt={post.publishedAt}
                                    link={"/blog/" + post.slug}
                                />
                            )
                        })
                    }
                </div>

                <Footer />
            </div>

        </>
    )
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