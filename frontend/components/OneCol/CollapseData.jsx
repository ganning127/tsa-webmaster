import {
    Accordion,
    AccordionItem,
    Heading,
    Text,
    Box,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export const CollapseData = ({ data }) => {
    return (
        <Accordion allowMultiple maxW='700px' mx='auto'>

            {data.map((item, index) => (
                <AccordionItem key={index}>
                    <Heading>
                        <AccordionButton _expanded={{ bg: 'gray.200' }} rounded='md'>
                            <Box flex='1' textAlign='left' fontSize='2xl' fontWeight='bold' color='blue.dark'>
                                {item.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>

                    <AccordionPanel pb={4}>
                        <Text
                            color='text.dark'
                            fontSize='xl'
                        >
                            {item.answer}
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>



    )
}