import Head from 'next/head'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { LeftTextWithButton } from '../components/TwoCol/LeftTextWithButton'
import { Container, Box, Select, VStack, Text, Button, SimpleGrid, Img, Input, FormControl, Link } from '@chakra-ui/react'
import { countryList } from '../data/countries'
import { Spinner } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
export default function Home() {
    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('spinner').style.display = 'block';
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        setTimeout(() => {
            let valid = Math.random() > 0.5 ? true : false;
            if (valid) {
                window.location.href = '/';
            } else {
                document.getElementById('wrong-msg').style.display = 'block';
                document.getElementById('spinner').style.display = 'none';
            }
        }, 2000);

    }
    return (
        <Box>
            <Head>
                <title>Login - RoboReach</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>




            <Box bg='url("/login_bkg.png")' h="100vh" bgRepeat="no-repeat" bgSize="cover" bgPos="center">
                <Container maxW="container.xl" mt="8">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" h="100vh" justifyContent="center">
                        <Box d={{ base: 'none', md: 'block' }}>
                            <Img src='/logo_no_small.png' />
                        </Box>
                        <Box>

                            <Formik
                                initialValues={{ name: 'Sasuke' }}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2))
                                        actions.setSubmitting(false)
                                    }, 1000)
                                }}
                            >
                                <Form onSubmit={handleSubmit} >
                                    <VStack
                                        spacing={4}
                                        align='stretch'
                                        maxW="600px"
                                        mx="auto"
                                    >
                                        <Box>
                                            <Text fontSize='md' mb="0">Welcome back</Text>
                                            <Text fontWeight="bold" fontSize='3xl' mb="3" color='blue.dark'>Student Sign Up</Text>
                                        </Box>


                                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                            <FormControl isRequired borderRadius="20" color="gray.900">
                                                <Input id='firstname' type="text" placeholder='Name' color="gray.900" />
                                            </FormControl>

                                            <FormControl isRequired borderRadius="20" color="gray.900">
                                                <Input id='lastname' type="text" placeholder='Last Name' color="gray.900" />
                                            </FormControl>
                                        </SimpleGrid>


                                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                            <FormControl isRequired borderRadius="20" color="gray.900">
                                                <Input id='email' type="email" placeholder='Email' color="gray.900" />
                                            </FormControl>

                                            <FormControl isRequired borderRadius="20" color="gray.900">
                                                <Select id='gender' placeholder='Gender' color="gray.900">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Nonbinary</option>
                                                    <option>Prefer not to say</option>
                                                </Select>
                                            </FormControl>
                                        </SimpleGrid>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <Select id='country' color="gray.900" placeholder='Country'>
                                                {countryList.map((country, index) => {
                                                    return (
                                                        <option key={index} value={country}>{country}</option>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>

                                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                            <FormControl isRequired borderRadius="20" color="gray.900">
                                                <Input id='password' type="password" placeholder='Password' color="gray.900" />
                                            </FormControl>

                                            <FormControl isRequired borderRadius="20" color="gray.900">
                                                <Input id='confirmPassword' type="password" placeholder='Confirm password' color="gray.900" />
                                            </FormControl>
                                        </SimpleGrid>








                                        <Button color="white" bg="blue.light" _hover={{ bg: "blue.dark" }} type="submit" id='submit'>

                                            <Spinner style={{ display: 'none' }} id='spinner' />
                                            <Text ml="2">Sign Up</Text>

                                        </Button>

                                        <Text>Already have an account? <Link href='/login' bg='gray.100' p={1} rounded='lg'>Log in here!</Link></Text>
                                    </VStack>
                                </Form>
                            </Formik>

                        </Box>

                    </SimpleGrid>
                </Container>
            </Box>





        </Box>
    )
}
