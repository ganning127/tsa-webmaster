import { Text, Box, Avatar, WrapItem, Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import People from "../../data/testimonials.json"
import { StarIcon } from '@chakra-ui/icons'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
    return (
        <>
            <Box textAlign="center">
                <Swiper
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {
                        People.map((person, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Box shadow="md" p={4} my="10" rounded='md'>
                                        <WrapItem>
                                            <Avatar src={person.img} mr="4" size='lg' />
                                            <Box alignSelf="center" mt='3'>
                                                <Text
                                                    fontSize="xl"
                                                    fontWeight="bold"
                                                    color="text.dark"
                                                    textAlign="left"
                                                >{person.name}</Text>

                                                <Text
                                                    fontSize="md"
                                                    fontStyle="italic"
                                                    color="text.dark"
                                                    align="left"
                                                >{person.title}</Text>
                                                <Flex>
                                                    {
                                                        [...Array(person.rating)].map((_, index) => {
                                                            return (
                                                                <StarIcon w={4} color="#f5db16" key={index} />
                                                            )
                                                        }
                                                        )
                                                    }
                                                </Flex>
                                            </Box>
                                        </WrapItem>

                                        <Text
                                            fontSize="xl"
                                            textAlign='left'
                                            mt='2'
                                        >
                                            {person.review}
                                        </Text>

                                    </Box>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Box>
        </>
    )
}