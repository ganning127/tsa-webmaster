import { Box, Heading, Text } from '@chakra-ui/react';
export const SubSection = ({ title, desc }) => {
    return (
        <Box
            textAlign="center"
            p="4"
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
                fontSize="xl"
                mt="3"
            >
                {desc}
            </Text>

        </Box >
    )
}