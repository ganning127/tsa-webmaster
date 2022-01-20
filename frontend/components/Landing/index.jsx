import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const Landing = ({ title, desc, button1, link1 }) => {
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
                    <div className={`h-[60vh] bg-[url('/home.png')] bg-cover bg-center bg-no-repeat flex`}>
                        <div className="m-auto text-white text-center">
                            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 text-7xl font-bold before:bg-dark-green relative inline-block">
                                <span class="relative text-white">{title}</span>
                            </span>
                            <h3 className="italic text-3xl font-normal my-4">{desc}</h3>
                            {button1 && <a href={link1}>
                                <button className="text-xl rounded-md bg-dark-sky px-8 py-2 shadow-xl hover:bg-dark-blue duration-300">{button1}</button>
                            </a>}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`h-[60vh] bg-[url('/team.png')] bg-cover bg-center bg-no-repeat flex`}>
                        <div className="m-auto text-white text-center">
                            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 text-7xl font-bold before:bg-dark-green relative inline-block">
                                <span class="relative text-white">{title}</span>
                            </span>
                            <h3 className="italic text-3xl font-normal my-4">{desc}</h3>
                            {button1 && <a href={link1}>
                                <button className="text-xl rounded-md bg-dark-sky px-8 py-2 shadow-xl hover:bg-dark-blue duration-300">{button1}</button>
                            </a>}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`h-[60vh] bg-[url('/impact.png')] bg-cover bg-center bg-no-repeat flex`}>
                        <div className="m-auto text-white text-center">
                            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 text-7xl font-bold before:bg-dark-green relative inline-block">
                                <span class="relative text-white">{title}</span>
                            </span>
                            <h3 className="italic text-3xl font-normal my-4">{desc}</h3>
                            {button1 && <a href={link1}>
                                <button className="text-xl rounded-md bg-dark-sky px-8 py-2 shadow-xl hover:bg-dark-blue duration-300">{button1}</button>
                            </a>}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}