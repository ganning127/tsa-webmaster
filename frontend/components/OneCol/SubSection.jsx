import { Box, Heading, Text } from '@chakra-ui/react';
export const SubSection = ({ title, desc }) => {
    return (
        <Box
            textAlign="center"
            p="4"
            id='subsection'
        >
            <Heading

                as="h1"
                fontSize="3xl"
                fontWeight="bold"
                color="blue.dark"
            >
                {title}
            </Heading>
            <Text
                as="p"
                fontSize="2xl"
                mt="3"
            >
                {desc}
            </Text>

        </Box >
    )
}