import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";

export const QandA = ({ data }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20}>
            {data.map((item, index) => {
                return (
                    <Box key={index}>
                        <Heading color='green.dark'>{item.question}</Heading>
                        <Text fontSize='xl' mt='4'>{item.answer}</Text>
                    </Box>

                )
            })}
        </SimpleGrid>
    )
}