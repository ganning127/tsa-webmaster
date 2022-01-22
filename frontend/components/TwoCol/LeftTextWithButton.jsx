import {
    Heading,
    Text,
    Button,
    Box,
    Img,
    SimpleGrid
} from '@chakra-ui/react';

export const LeftTextWithButton = ({ title, desc, button, buttonLink, radius, image }) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} alignItems="center">
                <Box>
                    <Heading as="h1" fontSize="3xl" fontWeight="bold" color="blue.dark">
                        {title}
                    </Heading>
                    <Text as="p" fontSize="2xl" my="6">
                        {desc}
                    </Text>
                    <Button
                        as="a"
                        href={buttonLink}
                        bg="blue.light"
                        color="white"
                        fontSize="xl"
                        fontWeight="bold"
                        _hover={{ bg: 'blue.dark' }}
                        shadow="lg"
                        px="5"
                        py="6"
                    >
                        {button}
                    </Button>
                </Box>
                <Box>
                    <Img src={image} mx="auto" borderRadius={radius} />
                </Box>
            </SimpleGrid>

        </>
    )
}