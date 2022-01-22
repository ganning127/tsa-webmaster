import { CounterCard } from "../Cards/CounterCard"
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
export const TriColCounter = ({ data }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {data.map((item, index) => {
                return (
                    <Box key={index}>
                        <CounterCard {...item} />
                    </Box>
                )
            })}
        </SimpleGrid>
    )
}