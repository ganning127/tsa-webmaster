import 'swiper/css';
import 'swiper/css/pagination';
import People from "../../data/testimonials.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { AiFillStar } from "react-icons/ai";
export const Testimonials = () => {
    return (
        <div className="text-center">
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
            // autoplay={{ delay: 3000 }}
            >
                {
                    People.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="mb-10 shadow-md p-4 rounded-md">
                                    <div className="flex items-center">
                                        <img src={person.img} alt={person.name} className="max-h-24 mr-2" />
                                        <div>
                                            <p className="text-2xl font-bold">{person.name}</p>
                                            <p className="text-md font-thin text-left">{person.title}</p>
                                            <div className="flex">
                                                {
                                                    [...Array(person.rating)].map((_, index) => {
                                                        return (
                                                            <AiFillStar w={4} className="text-yellow-300" key={index} />
                                                        )
                                                    }
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xl">
                                        {person.review}
                                    </p>
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
        </div >
    )
}