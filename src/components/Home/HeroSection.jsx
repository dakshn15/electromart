import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imageMap from "../../utils/imageMap";
import { heroSlides } from "../../data/heroData";


const HeroSection = () => {
  return (
    <section className="home-banner-sec py-10 lg:py-24 bg-cover bg-primary/10 relative z-[1] overflow-hidden">
      {/* Decorative BG Images */}
      <img src={imageMap.bannerBg1} className="absolute left-0 top-10 hidden lg:block select-none pointer-events-none" alt="bg1" />
      <img src={imageMap.bannerBg2} className="absolute right-0 bottom-10 hidden lg:block select-none pointer-events-none" alt="bg2" />
      <img src={imageMap.bannerBg3} className="absolute right-1/2 -bottom-10 hidden lg:block select-none pointer-events-none" alt="bg3" />
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".home-arrow.swiper-button-next",
          prevEl: ".home-arrow.swiper-button-prev",
        }}
        className="home-swiper"
        loop
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="md:container w-full mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 w-full xl:pr-12 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-start lg:pb-18">
                  <h2 className="max-w-lg lg:mx-0 mx-auto text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-4 text-gray-900">
                    {slide.title}
                  </h2>
                  <p className="xl:text-xl lg:text-lg text-gray-600 mb-6">{slide.desc}</p>
                  <div className="flex justify-center lg:justify-start gap-4">
                    <Link to="/shop" className="btn-primary">Shop Now</Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full lg:pb-0 pb-16">
                  <div className="lg:max-w-[70%] sm:max-w-[60%] max-w-[90%] w-full mx-auto relative z-[1] p-8">
                    <img src={imageMap.bannerBeforeImg} className="absolute -z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full select-none pointer-events-none" alt="banner before" />
                    <div className="relative pt-[100%]">
                      <img src={slide.img} className="h-full w-full object-contain absolute top-0 left-0" alt="main-banner-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom navigation arrows */}
        <div className="md:container w-full px-4 arrow-wrapper flex lg:justify-start justify-center gap-3 absolute z-[1] left-1/2 bottom-0 -translate-x-1/2">
          <div className="swiper-button-prev home-arrow !shadow-none" />
          <div className="swiper-button-next home-arrow !shadow-none" />
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSection; 