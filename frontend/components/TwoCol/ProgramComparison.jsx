import Data from '../../data/programComp.json'

import { Box, SimpleGrid, Text, Heading, Link, Img, WrapItem, chakra } from "@chakra-ui/react";
export const ProgramComparison = () => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20} mt={8}>

                {Data.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Heading as="h1" fontSize="2xl" fontWeight="bold" color="green.dark">
                                {item.title} {item.year}
                            </Heading>

                            <Text as="p" fontSize="xl">
                                {item.desc}
                            </Text>
                            <Text fontSize="xl" mt="4">
                                <chakra.span fontWeight="bold" color='blue.dark'>Months</chakra.span>: {item.dates}
                            </Text>

                            <Text fontSize="xl" my={2}>
                                <chakra.span fontWeight="bold" color='blue.dark'>Days of the Week</chakra.span>: {item.daysOfWeek}
                            </Text>
                            <Text fontSize="xl">
                                <chakra.span fontWeight="bold" color='blue.dark'>Builds Offered</chakra.span>: {item.buildsOffered}
                            </Text>


                        </Box>
                    )
                })}



            </SimpleGrid>
        </>

    )
}