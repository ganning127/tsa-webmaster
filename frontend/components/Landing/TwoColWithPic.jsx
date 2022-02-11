import { SimpleGrid, Heading, Img, Text, Button, Box, HStack } from "@chakra-ui/react"

export const TwoColWithPic = ({ title, desc, button1, link1, button2, link2, pic, align, radius }) => {
    if (align == "right") {
        return (
            <>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={40} alignItems="center">
                    <Box d={{ base: 'none', lg: 'block' }}>
                        <Img src={pic} mx="auto" rounded={radius} />
                    </Box>
                    <Box textAlign="center">
                        <Heading size="4xl" as="h1" color="blue.dark" >{title}</Heading>
                        <Text color="text.dark" fontSize="xl" my="3">{desc}</Text>

                        <HStack justifyContent="center">
                            <Button as="a" bg="blue.dark" color="white" fontWeight="bold" px="10" shadow="lg" fontSize="xl" _hover={{ bg: "blue.dark.hover" }} href={link1}>{button1}</Button>

                            {button2 && <Button as="a" color="blue.dark" fontSize="xl" fontWeight="bold" px="10" bg="transparent" _hover={{ color: "blue.dark.hover" }} href={link2}>{button2}</Button>}
                        </HStack>
                    </Box>

                    <Box d={{ base: 'block', lg: 'none' }}>
                        <Img src={pic} mx="auto" rounded={radius} objectFit='cover' maxH='md' />
                    </Box>

                </SimpleGrid>

            </>
        )
    }
    else {
        return (
            <>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={40} alignItems="center">

                    <Box textAlign="center">
                        <Heading size="4xl" as="h1" color="blue.dark" >{title}</Heading>
                        <Text color="text.dark" fontSize="xl" my="3">{desc}</Text>

                        <HStack justifyContent="center">
                            <Button as="a" bg="blue.dark" color="white" fontWeight="bold" px="10" shadow="lg" fontSize="xl" _hover={{ bg: "blue.dark.hover" }} href={link1}>{button1}</Button>

                            {button2 && <Button as="a" color="blue.dark" fontSize="xl" fontWeight="bold" px="10" bg="transparent" _hover={{ color: "blue.dark.hover" }} href={link2}>{button2}</Button>}
                        </HStack>
                    </Box>
                    <Box d={{ base: 'none', lg: 'block' }}>
                        <Img src={pic} mx="auto" rounded={radius} objectFit='cover' maxH='md' />
                    </Box>

                    <Box d={{ base: 'block', lg: 'none' }}>
                        <Img src={pic} mx="auto" rounded={radius} objectFit='cover' maxH='md' />
                    </Box>

                </SimpleGrid>

            </>
        )
    }
}