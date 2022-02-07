import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading, Img, Button, Box, SimpleGrid, HStack } from '@chakra-ui/react'
import copy from 'clipboard-copy'
import { useState } from 'react'

export const FullTabs = ({ data }) => {
    const [clicked, setClicked] = useState(false);

    const copyRefer = () => {
        setClicked(true);
        copy(window.location.href)
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    }

    return (
        <>
            <Tabs variant="unstyled" textAlign="center">
                <TabList justifyContent="center">
                    {
                        data.map((item, index) => {
                            return (
                                <Tab key={index}
                                    rounded="lg"
                                    fontWeight="bold"
                                    fontSize='lg'
                                    bg='transparent'
                                    _selected={{ color: item.color, bg: 'gray.100' }}
                                    _focus={{}}
                                >
                                    {item.tabTitle}
                                </Tab>
                            )
                        })
                    }
                </TabList>
                <TabPanels>
                    {
                        data.map((item, index) => {
                            return (
                                <TabPanel key={index} bg="gray.50" mt="1" p={8} rounded="lg" maxW='1000px' mx='auto'>
                                    <Heading color={item.color} fontSize="5xl">
                                        {item.tabTitle}
                                    </Heading>
                                    <Img src={item.pic} maxH='400px' mx='auto' />

                                    <Box maxW="700px" mx="auto">
                                        <Box mt="10">
                                            <Heading color={item.color} fontSize="5xl" >
                                                {item.head1}
                                            </Heading>
                                            <Text color="text.dark" fontSize="xl" mt="2">
                                                {item.desc1}
                                            </Text>
                                            <Text color="text.dark" fontSize="xl" mt="2">
                                                {item.desc1_2}
                                            </Text>
                                        </Box>

                                        <Box mt="10">
                                            <Heading color={item.color} fontSize="5xl">
                                                {item.head2}
                                            </Heading>
                                            <Text fontWeight='semibold' fontSize='xl'>All times are in Eastern Standard Time (EST)</Text>
                                            <Text color="text.dark" fontSize="xl" mt="2">
                                                {item.desc2}
                                            </Text>

                                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0} mt={3}>
                                                <Box>
                                                    <Text color={item.color} fontSize="2xl" mt="2" fontWeight='bold'>
                                                        Academic Year Fall (2022)
                                                    </Text>
                                                    <Text color="text.dark" fontSize="xl" mt="">
                                                        {item.schoolSessionFall}
                                                    </Text>
                                                </Box>

                                                <Box>
                                                    <Text color={item.color} fontSize="2xl" mt="2" fontWeight='bold'>
                                                        Academic Year Spring (2023)
                                                    </Text>
                                                    <Text color="text.dark" fontSize="xl" mt="">
                                                        {item.schoolSessionSpring}
                                                    </Text>
                                                </Box>


                                                <Box>
                                                    <Text color={item.color} fontSize="2xl" mt="2" fontWeight='bold'>
                                                        Summer Session
                                                    </Text>
                                                    <Text color="text.dark" fontSize="xl" mt="">
                                                        {item.summerSession}
                                                    </Text>
                                                </Box>

                                            </SimpleGrid>


                                        </Box>
                                    </Box>

                                    <Box mt="10" maxW='800px' mx='auto'>
                                        <Heading color={item.color} fontSize="5xl" >
                                            {item.head3}
                                        </Heading>
                                        {
                                            item.weeks.map((week, index) => {
                                                return (
                                                    <SimpleGrid columns={{ base: 1, lg: 2 }} key={index} textAlign="left" alignItems="center">
                                                        <Box mx='auto'>
                                                            <Text color={item.color} fontSize="2xl" mt="2" fontWeight="bold">
                                                                {week.title}
                                                            </Text>

                                                            <Text color="text.dark" fontSize="xl" mt="1">
                                                                {week.desc}
                                                            </Text>
                                                        </Box>
                                                        <Box>
                                                            <Img src={week.pic} maxH="200px" mx='auto' />
                                                        </Box>
                                                    </SimpleGrid>
                                                )
                                            })
                                        }
                                    </Box>

                                    <Box mt="10" maxW="700px" mx="auto">
                                        <Heading color={item.color} fontSize="5xl" >
                                            {item.head4}
                                        </Heading>
                                        <Text color="text.dark" fontSize="xl" mt="2">
                                            {item.desc4}
                                        </Text>

                                        <Text color="text.dark" fontSize="2xl" mt="2" fontWeight='bold'>
                                            {item.desc4_1}
                                        </Text>
                                    </Box>

                                    <HStack direction='vertical' mt="10" justifyContent="center" spacing="40px" >
                                        <Button color={item.color} px={10} bg='transparent' _hover={{ color: item.color + '.hover' }} fontSize='xl' onClick={copyRefer} _focus={{}}>
                                            {!clicked && <Text color={item.color} fontSize="xl" >Refer a friend</Text>}
                                            {clicked && <Text color={item.color} fontSize="xl">Copied to clipboard!</Text>}
                                        </Button>
                                        <Button as='a' href={item.link2} bg={item.color} color='white' px={10} fontSize='xl' _hover={{ bg: item.color + '.hover' }}>
                                            Apply now
                                        </Button>


                                    </HStack>


                                </TabPanel>
                            )
                        })
                    }
                </TabPanels>
            </Tabs>
        </>
    )
}