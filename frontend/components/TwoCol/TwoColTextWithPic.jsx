import { SimpleGrid, Heading, Text, Box, Img, Button, chakra } from '@chakra-ui/react'

export const TwoColTextWithPic = ({ pic, title, desc, align, buttonText, buttonLink, color, hoverColor, keyword, value }) => {
    if (align === "right") {
        return (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign={{ base: "center", md: "right" }} justifyContent="center" alignItems="center">
                <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                    <Img src={pic} alt="pic" maxH="400px" />
                </Box>
                <Box mx="auto" maxW="500px">
                    {title && <Heading color={color} fontWeight="bold">{title}</Heading>}
                    <Text my="3" fontSize="2xl" color="text.dark">{desc}</Text>

                    <Box mb="3">
                        <Text d="inline" color={color} fontWeight="bold" fontSize="xl">
                            {keyword}: <chakra.span color="text.dark">{value}</chakra.span>
                        </Text>
                    </Box>


                    <Button as="a" href={buttonLink} bg={color} color="white" fontSize="xl" fontWeight="bold" shadow="lg" _hover={{ bg: hoverColor }}>{buttonText}</Button>
                </Box>

            </SimpleGrid >
        )
    }
    else {
        return (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign={{ base: "center", md: "left" }} justifyContent="center" alignItems="center">
                <Box mx="auto" maxW="500px">
                    {title && <Heading color={color} fontWeight="bold">{title}</Heading>}
                    <Text my="3" fontSize="2xl" color="text.dark">{desc}</Text>

                    <Box mb="3">
                        <Text d="inline" color={color} fontWeight="bold" fontSize="xl">
                            {keyword}: <chakra.span color="text.dark">{value}</chakra.span>
                        </Text>
                    </Box>

                    <Button as="a" href={buttonLink} bg={color} color="white" fontSize="xl" fontWeight="bold" shadow="lg" _hover={{ bg: hoverColor }}>{buttonText}</Button>
                </Box>
                <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                    <Img src={pic} alt="pic" maxH="400px" />
                </Box>
            </SimpleGrid >
        )
    }

}