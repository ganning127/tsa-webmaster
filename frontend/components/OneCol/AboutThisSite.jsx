import { Text, Heading, Box, SimpleGrid, Link, chakra } from "@chakra-ui/react";
import { HeadingWithDesc } from "../Headings/HeadingWithDesc";
import { MedSep } from "../Separators/MedSep";
import Langs from '../../data/code.json'
import Fade from 'react-reveal/Fade';
import Sources from '../../data/sources.json'

export const AboutThisSite = () => {
    const colors = ['green.dark', 'blue.dark', 'blue.light']
    return (
        <Box maxW='800px' mx='auto'>
            <Fade>
                <HeadingWithDesc>Overview</HeadingWithDesc>
                <Text fontSize='xl'>RoboReach's website was created by Ganning Xu, Jacob Van Meter, Daniel Zhang, Allison Zhang, and Max Caza for the 2022 TSA conference</Text>

                <Box mt="4">
                    <Text fontSize='lg'><chakra.span fontWeight='bold'>Plan of work</chakra.span>: <Link href='/plan-of-work.pdf' color='blue.light' isExternal>PDF Log</Link></Text>
                    <Text fontSize='lg'><chakra.span fontWeight='bold'>Copyright Release Form</chakra.span>: <Link href='/copyright-checklist.pdf' color='blue.light' isExternal>PDF Form</Link></Text>
                    <Text fontSize='lg'><chakra.span fontWeight='bold'>GitHub Repository</chakra.span>: <Link href='https://github.com/ganning127/tsa-webmaster' color='blue.light' isExternal>Code Repo</Link></Text>

                </Box>

                <MedSep />

                <HeadingWithDesc>Utilized Tools</HeadingWithDesc>
                <Text fontSize='xl' my="2">Roboreach is a non-profit organization that strives to bring technical education about robotics to everyone, regardless of previous experience and financial status. This website was built using React.js, Next.js, Next.js, ChakraUI, MongoDB, and Fastify.</Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt="8">
                    {Langs.languages.map((lang, index) => (
                        <Box key={index} shadow='lg' p={4} _hover={{ bg: 'gray.100' }} rounded='md' transition='all 0.2s' as='a' href={lang.url} target="_blank">
                            <Heading fontSize='3xl' color="text.dark" textAlign="center">{lang.name}</Heading>
                        </Box>
                    ))}
                </SimpleGrid>


                <MedSep />

                <HeadingWithDesc>Image Sources</HeadingWithDesc>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacingY={3} mt="8">
                    {
                        Sources.map((source, index) => (
                            <Box key={index} mx='auto' _hover={{ bg: 'gray.100' }} p={1} rounded='md' transition='all 0.2s'>
                                <Link href={source} isExternal _hover={{ color: 'blue.dark' }} textAlign='center' >Image {index + 1} (hyperlink)</Link>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Fade>
        </Box>
    )
}