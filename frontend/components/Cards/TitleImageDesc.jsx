import {
    Text,
    Box,
    Img
} from '@chakra-ui/react';

export const TitleImageDesc = ({ title, desc, image }) => {
    return (
        <Box
            shadow="md"
            textAlign="center"
            p="4"
        >
            <Text
                as="h1"
                fontSize="3xl"
                fontWeight="bold"
                color="blue.dark"
                mt="10px"
            >
                {title}
            </Text>
            <Img src={image} mx="auto" h="200px" objectFit="contain" />
            <Text
                as="p"
                fontSize="xl"
            >
                {desc}
            </Text>

        </Box >
    )
}