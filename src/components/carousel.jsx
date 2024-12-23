// Import React
import React from 'react';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Carousel = () => {
    const slides = [
        {
            image: "/img/slider1.avif", // Replace with actual image URL
            title: "HARCOURT EVE FLUTES",
            price: "€ 470",
        },
        {
            image: "/img/slider2.avif",
            title: "ANOTHER FLUTE STYLE",
            price: "€ 350",
        },
        {
            image: "/img/slider3.avif",
            title: "ANOTHER FLUTE STYLE",
            price: "€ 350",
        },
        {
            image: "/img/slider4.avif",
            title: "ANOTHER FLUTE STYLE",
            price: "€ 350",
        },
        // Add more slides here
    ];

    return (
        <section className="bg-gray-100 py-10">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                className="w-3/4 mx-auto"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="mb-6 rounded-lg shadow-md max-h-[400px]"
                            />
                            <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                            <p className="text-gray-600 font-medium mb-4">{slide.price}</p>
                            <a
                                href="#"
                                className="text-gray-800 font-semibold hover:underline flex items-center justify-center"
                            >
                                DISCOVER <span className="ml-2">&rarr;</span>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;
