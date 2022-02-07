import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Box, Text, Heading, Button } from '@chakra-ui/react'


export const SwiperLanding = ({ title, desc, button, buttonLink, images }) => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide>
                    <Box
                        bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing4.jpeg') "
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing5.jpeg') "
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing6.jpeg') "
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box
                        bgImage="url('/temp_lego.png')"
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing1.jpeg')"
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box
                        bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing2.jpeg') "
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box
                        bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landing3.jpeg') "
                        bgRepeat="no-repeat"
                        bgPos="top"
                        h="70vh"
                        w="100vw"
                        bgSize="cover"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', lg: '8xl' }}
                                fontWeight="bold"
                                color="white"
                                textAlign="center"
                            >
                                {title}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: 'xl', lg: '2xl' }}
                                fontStyle="italic"
                                color="white"
                                textAlign="center"
                            >
                                {desc}
                            </Text>

                            <Button
                                as="a"
                                href={buttonLink}
                                bg="blue.light"
                                color="white"
                                _hover={{
                                    bg: 'blue.dark',
                                }}
                                fontSize="xl"
                                mt="10px"
                                px="10"
                                shadow="lg"
                            >
                                {button}
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>



            </Swiper>
        </>
    )
}