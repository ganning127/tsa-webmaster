import Head from 'next/head'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { Container } from '@chakra-ui/react'
import { MedSep } from '../components/Separators/MedSep'
import Fade from 'react-reveal/Fade';
import Data from '../data/faq.json'
// import { CollapseData } from '../components/OneCol/CollapseData'
import { AboutThisSite } from '../components/OneCol/AboutThisSite'
import { OnlyTextWithButton } from '../components/Landing/OnlyTextWithButton'
import { MedSepNoLine } from '../components/Separators/MedSepNoLine'

export default function AboutRoboReachWebsites({ posts }) {
    return (
        <>
            <Head>
                <title>About Roboreach&apos;s Website - RoboReach</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <NavBar active="application" />

            <Container maxW="container.xl" mt="8">
                <Fade>
                    <OnlyTextWithButton
                        title="About Roboreach&apos;s Website"
                        desc="Learn about the languages and frameworks used to build our website."
                    />

                    <MedSep />

                    <AboutThisSite />
                    <MedSepNoLine />
                </Fade>
            </Container>

            <Footer />


        </>
    )
}