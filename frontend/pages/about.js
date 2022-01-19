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
export default function About() {
    return (
        <>
            <Head>
                <title>About - RoboReach</title>
            </Head>

            <Landing
                title="About Us"
                desc="Our Story, Our Mission, Our Vision"
            />
            <MedSep />
            <div className="container mx-auto px-4">
                <LeftTextWithButton
                    title="Our Mission"
                    desc="For no cost, underprivileged students around the nation are provided with remote STEM opportunities focused in robotics. In these programs, students not only gain a foundation in key STEM principles but also advanced skills that give them an academic and professional edge. 
                    "
                    buttonText="Learn More"
                    buttonLink="/about"
                    pic="/mission.png"
                    picRadius="md"
                />

                <MedSep />

                <SmallSection
                    title="Our Story"
                    desc="While thinking about how to win TSA, we came up with a grand idea of RoboReach. I really like making up things to type instead of using lorem ipsum haha. While thinking about how to win TSA, we came up with a grand idea of RoboReach. I really like making up things to type instead of using lorem ipsum haha."
                />



                <MedSep />

                <RightTextWithButton
                    title="Our Vision"
                    desc="Within the next 10 years, we hope to exapnd into a global market, providing students in not only the United States with a fun, quality education. We hope to do this by sucking dick and making sure that we have a brain instead of being brain dead. If your interests align with ours, please don’t hesitate to sign to be a mentor!"
                    buttonText="Learn More"
                    buttonLink="/about"
                    pic="/vision.png"
                    picRadius="md"

                />

                <MedSep />

                <Heading desc="All of our programs are free and virtual!">Who We Serve</Heading>
                <TriColCards
                    data={Serve}
                />
                <MedSep />

                <Heading desc="Meet the team that makes our program possible!">Our Team</Heading>
                <TeamGrid
                    data={Team}
                />

                <MedSep />
                <Footer />
            </div>

        </>
    )
}