import {
    Box, Text, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, Heading, Img, Button, Link
} from '@chakra-ui/react'

export const HowItWorks = () => {
    return (
        <>

            <Heading as="h1" fontSize="3xl" fontWeight="bold" color="blue.dark">
                How does RoboReach work?
            </Heading>
            <Text as="p" fontSize="2xl" mt="4">
                RoboReach is a free and virtual mentorship program in which students learn to build both robots and their leadership skills. We offer three programs: common build, challenge build, and creative build. Each build is targeted towards a different age group and skill level. Here's how the process works:
            </Text>

            <OrderedList fontSize='2xl' my={4}>
                <ListItem><Link href='/apply' color='blue.light' _hover={{ color: 'blue.dark' }} isExternal>Apply</Link> for RoboReach</ListItem>
                <ListItem>Once you get accepted, you'll be matched with a mentor specific to that build.</ListItem>
                <ListItem>We'll ship you the materials needed for you to get building!</ListItem>
                <ListItem>You'll build your robot with the help of your mentor!</ListItem>
            </OrderedList>
        </>
    )
}