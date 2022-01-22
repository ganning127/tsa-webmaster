import { Heading, Text, Box, Link, SimpleGrid, Img } from "@chakra-ui/react";

export const SubSectionList = ({ title, steps }) => {
    return (
        <Box
            textAlign="center"
            p="4"
        >
            <Heading
                as="h1"
                fontSize="5xl"
                fontWeight="bold"
                color="blue.dark"
            >
                {title}
            </Heading>
            <Text fontSize="xl" my="2">If you are under 7th grade, have a parent send an email to <Link href="mailto:apply@roboreach.org" color="blue.light">roboreach@roboreach.org</Link> to apply!</Text>


            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt="4">
                {steps.map((step, index) => (
                    <Box shadow="lg" p={4} key={index}>
                        <Heading fontSize="2xl" color="green.dark">Step {index + 1}</Heading>
                        <Text fontSize="xl" my="1">{step.name}</Text>
                        <Img src={step.img} mx="auto" h="200px" objectFit="contain" maxH="100px" />
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    )
}