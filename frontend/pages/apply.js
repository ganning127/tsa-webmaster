import Head from 'next/head'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { LeftTextWithButton } from '../components/TwoCol/LeftTextWithButton'
import { Container, Box, Heading, VStack, Text, Button, SimpleGrid, Img, Input, FormControl, Link } from '@chakra-ui/react'
import { TwoColWithPic } from '../components/Landing/TwoColWithPic'
import { Spinner } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { SubSectionList } from '../components/Landing/SubSectionList'
import { MedSep } from '../components/Separators/MedSep'
import { Application } from '../components/Application'
import Steps from '../data/applicationSteps.json'
import { MedSepNoLine } from '../components/Separators/MedSepNoLine'
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react'
export default function Apply() {
    const [email, setEmail] = useState('')
    useEffect(() => {
        let tokens = localStorage.getItem('token')
        if (tokens) {
            tokens = tokens.split('.')
            setEmail(JSON.parse(atob(tokens[1])).username)
        }
        else {
            setEmail('')
            window.location.href = '/login?msg=Please login to apply for our programs!'
        }
        // console.log();

    }, []);

    return (
        <>
            <Head>
                <title>Apply - RoboReach</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="application" />


            <Container maxW="container.xl" mt="8">
                <Fade>
                    <TwoColWithPic
                        pic='/temp_app.jpeg'
                        title="Apply Now"
                        desc="RoboReach is a non-profit organization that uses robotics to build the leaders of tomorrow. We are building a community of young people who are passionate about building a better future for themselves and their communities."
                        button1="Learn More"
                        link1="/about"
                        radius="md"
                    />

                    <MedSep />
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 30, lg: 80 }}>
                        <Box>
                            <Heading as="h2" size="lg" mb="4" color='green.dark'>
                                If you are in 7th grade or under...
                            </Heading>
                            <Text fontSize='xl'>
                                Great news! You don't need to fill out this application! Have a parent or guardian send an email to <Link href='mailto:teamroboreach@gmail.com' color='blue.light'>teamroboreach@gmail.com</Link> to apply!
                            </Text>

                        </Box>
                        <Box>
                            <Heading as="h2" size="lg" mb="4" color='blue.dark'>
                                If you are in 8th grade or above...
                            </Heading>

                            <Text fontSize='xl'>
                                Please read the application instructions below, and fill out the application form to apply to RoboReach!
                            </Text>
                        </Box>
                    </SimpleGrid>

                    <MedSep />

                    <SubSectionList
                        title="Application Process"
                        steps={Steps}
                    />

                    <MedSep />
                </Fade>
                <Application />

                <MedSepNoLine />




            </Container>


            <Footer />



        </>
    )
}
