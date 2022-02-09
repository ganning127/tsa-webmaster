import Head from 'next/head'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { SwiperLanding } from '../components/Landing/SwiperLanding'
import { LeftTextWithButton } from '../components/TwoCol/LeftTextWithButton'
import { Container, Box } from '@chakra-ui/react'
import { MedSep } from '../components/Separators/MedSep'
import benefits from '../data/benefits.json'
import { CardDisplay } from '../components/ThreeCol/CardDisplay'
import { TwoColTextWithPic } from '../components/TwoCol/TwoColTextWithPic'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { Testimonials } from '../components/Testimonials'
import Sponsors from '../data/sponsors.json'
import { TwoColPics } from '../components/TwoCol/TwoColPics'
import { Contact } from '../components/TwoCol/Contact'
import { MedSepNoLine } from '../components/Separators/MedSepNoLine'
import Fade from 'react-reveal/Fade';
import { HowItWorks } from '../components/HowItWorks'

export default function Home() {

  return (
    <Box>
      <Head>
        <title>RoboReach</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <NavBar active="home" />
      <SwiperLanding
        title="RoboReach"
        desc="Using robotics to build the leaders of tomorrow"
        button="Sign Up"
        buttonLink="/apply"
      />
      <Container maxW="container.xl">
        <MedSepNoLine />

        <Fade>
          <LeftTextWithButton
            title="The Future of Education"
            desc="RoboReach is a non-profit organization that uses robotics to build the leaders of tomorrow. We are building a community of young people who are passionate about building a better future for themselves and their communities."
            button="Learn More"
            buttonLink="/about"
            image='/temp_first.jpeg'
            color="green.dark"
            radius='md'
            hoverColor="green.dark.hover"
          />


          <MedSep />

          <HowItWorks />

          <MedSepNoLine />

          <HeadingWithDesc desc="All of our programs are free and virtual!">Benefits</HeadingWithDesc>
          <CardDisplay
            data={benefits}
          />

          <MedSep />

          <TwoColTextWithPic
            pic='/common_build.png'
            title="Common Build"
            desc="Students are led step-by-step through the process of building a basic LEGO® MINDSTORMS® robot  to introduce fundamental principles and concepts. Instructors will guide groups of students through live-sessions in order to ensure full participation and mastery of the concepts.  "
            align="left"
            keyword="Grades"
            value="K-3"
            buttonText="Read More"
            buttonLink="/builds"
            color="green.dark"
            hoverColor="green.dark.hover"
          />

          <MedSepNoLine />
          <TwoColTextWithPic
            pic='/challenge_build.png'
            title="Challenge Build"
            desc="Students are given tasks that the robot should be able to complete, designing and building the robot from a variety of available parts. Instructors will guide students through each step of the process through live chat and video. "
            align="right"
            buttonText="Read More"
            buttonLink="/builds"
            keyword="Grades"
            value="4-7"
            color="blue.light"
            hoverColor="blue.dark"
          />

          <MedSepNoLine />

          <TwoColTextWithPic
            pic='/creative_build.png'
            title="Creative Build"
            desc="Each student will design and create a unique build that addresses a problem they decide on. Students will be matched with a mentor who will guide them through the entire process, helping them decide on materials, a design, and the building process"
            align="left"
            keyword="Grades"
            value="8-12"
            buttonText="Read More"
            buttonLink="/builds"
            color="blue.dark"
            hoverColor="blue.dark.hover"
          />
          <MedSep />

          <HeadingWithDesc
            desc="Hear what our students have to say."
          >Testimonials</HeadingWithDesc>
          <Testimonials />

          <MedSep />
          <HeadingWithDesc>Sponsors</HeadingWithDesc>
          <TwoColPics
            data={Sponsors}
          />

          <MedSep />
          <Contact />

          <MedSepNoLine />
          <Footer />
        </Fade>
      </Container>


    </Box>
  )
}
