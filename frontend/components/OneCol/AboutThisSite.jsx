import { Text, Heading, Box, SimpleGrid, Link } from "@chakra-ui/react";
import { HeadingWithDesc } from "../Headings/HeadingWithDesc";
import { MedSep } from "../Separators/MedSep";
import Langs from '../../data/code.json'

export const AboutThisSite = () => {
    return (
        <Box maxW='800px' mx='auto'>
            <HeadingWithDesc>Overview</HeadingWithDesc>
            <Text fontSize='xl'>RoboReach's website was created by Ganning Xu, Jacob Van Meter, Daniel Zhang, and Allison Zhang for the 2022 TSA conference</Text>

            <Box mt="4">
                <Text fontSize='lg'>Plan of work: <Link href='/todo' color='blue.light'>Log</Link></Text>
                <Text fontSize='lg'>Copyright release form: <Link href='/todo' color='blue.light'>Log</Link></Text>
                <Text fontSize='lg'>GitHub Repository: <Link href='https://github.com/ganning127/tsa-webmaster' color='blue.light' isExternal>Repo</Link></Text>
            </Box>

            <MedSep />

            <HeadingWithDesc>Langauges</HeadingWithDesc>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mt="4">
                {Langs.languages.map((lang, index) => (
                    <Box key={index} shadow='lg' rounded='md' p={4}>
                        <Heading fontSize='3xl' color='green.dark'><Link href={lang.url} isExternal _hover={{}}>{lang.name}</Link></Heading>

                        <Text fontSize='xl' my="2">{lang.desc}</Text>

                    </Box>
                ))}
            </SimpleGrid>

            <MedSep />

            <HeadingWithDesc>Site description</HeadingWithDesc>
            <Text fontSize='xl' my="2">Roboreach is a non-profit organization that strives to do TODo.</Text>
        </Box>
    )
}