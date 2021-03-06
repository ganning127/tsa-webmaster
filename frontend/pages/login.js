import Head from 'next/head'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { LeftTextWithButton } from '../components/TwoCol/LeftTextWithButton'
import {
    Container, Box, Heading, VStack, Text, Button, SimpleGrid, Img, Input, FormControl, Link, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react'
export default function Home() {

    const [msg, setMsg] = useState('')

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const message = urlParams.get('msg');
        setMsg(message)
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        document.getElementById('spinner').style.display = 'block';
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }

        const resp = await fetch('/api/login', options);
        const data = await resp.json();
        console.log(data);

        if (data.error) {
            document.getElementById('spinner').style.display = 'none';
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = data.error;
        }
        else {
            document.getElementById('spinner').style.display = 'none';
            localStorage.setItem('token', data.token);
            window.location.href = '/';

        }
        // let valid = Math.random() > 0.5 ? true : false;
        // if (valid) {
        //     window.location.href = '/';
        // } else {
        //     document.getElementById('wrong-msg').style.display = 'block';
        //     document.getElementById('spinner').style.display = 'none';
        // }

    }
    return (
        <>
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
                                        maxW="400px"
                                        mx="auto"
                                    >
                                        {msg && <Alert status='warning' rounded='md'>
                                            <AlertIcon />
                                            <AlertTitle>{msg}</AlertTitle>
                                        </Alert>}
                                        <Box>
                                            <Text fontSize='md' mb="0">Welcome back</Text>
                                            <Text fontWeight="bold" fontSize='3xl' color='blue.dark'>Student Login</Text>
                                            <Text bg="red.100" p={2} rounded="lg" style={{ display: 'none' }} id='error'>Wrong username or password</Text>
                                        </Box>

                                        <Box bg='blue.100' rounded='md' p={1}>
                                            TSA Sample Login
                                            <Box>
                                                <Text fontWeight="bold" d='inline'>Email:</Text> john@doe.com
                                            </Box>
                                            <Box>
                                                <Text fontWeight="bold" d='inline'>Password:</Text> password
                                            </Box>
                                        </Box>


                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <Input id='email' type="email" placeholder='Email' color="gray.900" />
                                        </FormControl>
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <Input id='password' type="password" placeholder='password' color="gray.900" />
                                        </FormControl>


                                        <Button color="white" bg="blue.light" _hover={{ bg: "blue.dark" }} type="submit" id='submit'>

                                            <Spinner style={{ display: 'none' }} id='spinner' />
                                            <Text ml="2">Login</Text>

                                        </Button>

                                        <Text>Don&apos;t have an account? <Link href='/signup' bg='gray.100' p={1} rounded='lg'>Sign up here!</Link></Text>
                                    </VStack>
                                </Form>
                            </Formik>

                        </Box>

                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}
