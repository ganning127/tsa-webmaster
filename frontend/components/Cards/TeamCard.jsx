import { Box, Text, WrapItem, Avatar } from "@chakra-ui/react";

export const TeamCard = ({ name, title, about, pic }) => {
    return (
        <Box bg="#FDFDFD" shadow="md" borderRadius="10px" textAlign="center" p="4">
            <WrapItem >
                <Avatar size='2xl' name={name} src={pic} mx="auto" />
            </WrapItem>

            <Box mt={4}>
                <Text color="text.dark" fontWeight="bold">{name}</Text>
                <Text color="blue.light" fontWeight="bold" my="1" fontStyle="italic">{title}</Text>
                <Text color="text.dark" fontWeight="normal">{about}</Text>
            </Box>

        </Box >
    )
}