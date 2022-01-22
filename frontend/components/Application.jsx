import {
    FormControl,
    Text,
    SimpleGrid,
    Input,
    Img,
    Link,
    FormLabel,
    VStack,
    StackDivider,
    Textarea,
    Button,
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import { HeadingWithDesc } from './Headings/HeadingWithDesc';
import { MedHeading } from './Headings/MedHeading';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

export const Application = ({ }) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();


    };

    return (
        <>
            <Box mx="auto" w="100%">
                {!isSubmitted && <Formik
                    initialValues={{ name: 'Sasuke' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    <Form onSubmit={handleSubmit}>

                        <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={10}
                            align='stretch'
                        >

                            <Fade>
                                <Box>
                                    <MedHeading desc="We'll never share your peresonal info with anyone.">Basic Information</MedHeading>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="4">
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='firstname' color="blue.dark">First Name</FormLabel>
                                            <Input id='firstname' name='firstname' placeholder='e.g. John' color="gray.900" />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='lastname' color="blue.dark">Last Name</FormLabel>
                                            <Input id='lastname' type="text" placeholder='e.g. Doe' color="gray.900" />
                                        </FormControl>



                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='age' color="blue.dark">Age</FormLabel>
                                            <NumberInput defaultValue={12} min={2} max={100}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='email' color="blue.dark">Last Name</FormLabel>
                                            <Input id='email' type="text" placeholder='e.g. example@gmail.com' color="gray.900" />
                                        </FormControl>

                                    </SimpleGrid>
                                </Box>
                            </Fade>

                            <Fade>
                                <Box>
                                    <MedHeading desc="We'll never share your peresonal info with anyone.">Academic Information</MedHeading>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="4">
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='school' color="blue.dark">School</FormLabel>
                                            <Input id='school' type="text" placeholder='e.g. Hogwarts' color="gray.900" />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='gpa' color="blue.dark">GPA (Unweighted)</FormLabel>
                                            <Input id='gpa' type="text" placeholder='e.g. 3.8' color="gray.900" />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='grade' color="blue.dark">Grade</FormLabel>
                                            <NumberInput defaultValue={5} min={2} max={100}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900" w="">
                                            <FormLabel htmlFor='major' color="blue.dark">List majors that you are interested in</FormLabel>
                                            <Input placeholder='e.g. Computer Science' id="major" />
                                        </FormControl>

                                        <FormControl borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='transcript' color="blue.dark">Transcript (optional)</FormLabel>
                                            <Input id='transcript' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" />
                                        </FormControl>


                                        <FormControl borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='resume' color="blue.dark">Resume (optional)</FormLabel>
                                            <Input id='resume' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" />
                                        </FormControl>
                                    </SimpleGrid>
                                </Box>
                            </Fade>

                            <Fade>
                                <Box>
                                    <MedHeading desc="We are looking for content, not grammar.">Essays</MedHeading>
                                    <SimpleGrid columns={1} spacing={5} mt="4">
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='whyJoinEssay' color="blue.dark">Why do you want to join RoboReach&apos;s program? (300 words max)</FormLabel>
                                            <Textarea id='whyJoinEssay' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='interestsEssay' color="blue.dark">Describe your interests in STEM (300 words max)</FormLabel>
                                            <Textarea id='interestsEssay' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='failureEssay' color="blue.dark">Describe how you respond to failure (300 words max)</FormLabel>
                                            <Textarea id='failureEssay' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                        </FormControl>

                                    </SimpleGrid>

                                </Box>
                            </Fade>

                            <Fade>
                                <Box textAlign="center">
                                    <MedHeading>Teacher Recommendations</MedHeading>
                                    <Text fontSize="xl">Please have your teacher email one (1) recommendation letter on your behalf to <Link href="mailto:apply@roboreach.org" color="blue.light">roboreach@roboreach.org</Link></Text>
                                </Box>
                            </Fade>

                            <Fade>
                                <Box textAlign="center">
                                    <MedHeading desc="Let us know anything else you want here!">Additional Information</MedHeading>
                                    <FormControl isRequired borderRadius="20" color="gray.900">
                                        <FormLabel htmlFor='extraInfo' color="blue.dark">A chance to talk about anything that you haven&apos;t already!</FormLabel>
                                        <Textarea id='extraInfo' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                    </FormControl>
                                </Box>
                            </Fade>

                            <Fade>
                                <SimpleGrid columns={2} spacing={5} mt="4">
                                    <Button borderColor="blue.light" color="blue.light" fontWeight="bold" fontSize="xl" variant="outline" mr={3}>
                                        Save Progress
                                    </Button>
                                    <Button color="white" bg="blue.light" _hover={{ bg: "blue.dark" }} fontWeight="bold" fontSize="xl" type="submit">Submit</Button>
                                </SimpleGrid>
                            </Fade>


                        </VStack>

                        <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>There was an error, please refresh the page and try again!</Text>
                    </Form>
                </Formik>}

                {isSubmitted && <Text bg='blue.light' color='white' p='1' rounded='lg' fontSize="xl">We have received for your message! We will get back to you as soon as possible!</Text>}
            </Box>

        </>

    )
}