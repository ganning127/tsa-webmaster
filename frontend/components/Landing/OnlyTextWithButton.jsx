import { Box, Heading, Text, Button } from '@chakra-ui/react'

export const OnlyTextWithButton = ({ title, desc, buttonText, buttonLink }) => {
    return (
        <>
            <Box textAlign="center" maxW="700px" mx="auto">
                <Heading as="h1" size="2xl" color="blue.dark" mb="4" fontWeight="bold">{title}</Heading>
                {desc && <Text fontWeight="normal" color="text.dark" fontSize="xl" my="3" >{desc}</Text>}


                {buttonText && <Button as="a" href={buttonLink} bg="blue.dark" color="white" _hover={{ bg: 'blue.dark.hover' }} size="lg" mb="4">{buttonText}</Button>}
            </Box >
        </>
    )
}