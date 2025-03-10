import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
    return (
        <div className="carousel-container">
            <h1 className="carousel-title text-center text-4xl font-bold">Your Currencies</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                loop={true}
                style={{ padding: "50px 0 " ,
                        width: "95%",
                        height: "auto",
                }}

            >
                <div className="swiper-button-prev custom-prev"></div>
                <div className="swiper-button-next custom-next"></div>

                <SwiperSlide className="bg-[#1A2E40]">
                    <h1 className="legend">USD</h1>
                </SwiperSlide>
                <SwiperSlide className="bg-[#1A2E40]">
                    <h1 className="legend">EUR</h1>
                </SwiperSlide>
                <SwiperSlide className="bg-[#1A2E40]">
                    <h1 className="legend">GBP</h1>
                </SwiperSlide>
                <SwiperSlide className="bg-[#1A2E40]">
                    <h1 className="legend">JPY</h1>
                </SwiperSlide>
                <SwiperSlide className="bg-[#1A2E40]">
                    <h1 className="legend">CHF</h1>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};
