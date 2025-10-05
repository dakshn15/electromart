import React from "react";
import { partners } from "../../data/partnerData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import partner1 from "../../assets/images/partner-logo-1.png";
import imageMap from "../../utils/imageMap";


const PartnerSection = () => {
  return (
    <section className="lg:py-20 py-10 bg-gray-50">
      <div className="md:container w-full mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 lg:mb-8 mb-4 md:text-start text-center">
          Trusted By Leading Brands
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          spaceBetween={20}
          className="logo-swiper"
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <a
                href={partner.link}
                className="bg-white rounded-lg sm:p-6 p-4 sm:h-24 h-[60px] flex items-center justify-center border hover:!border-primary transition-all duration-300"
                aria-label={`Visit ${partner.name} website`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-full relative">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection; 