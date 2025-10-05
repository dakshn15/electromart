
import React from "react";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import testimonialsData from "../../data/testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 lg:mb-8 mb-4 md:text-start text-center">
          What Our Clients Say
        </h2>
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              nextEl: ".swiper-button-next.testimonial-arrow",
              prevEl: ".swiper-button-prev.testimonial-arrow",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !pb-8 !-mb-8"
          >
            {testimonialsData.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="card lg:p-6 p-4 relative bg-gray-50 h-full">
                  <FaQuoteRight className="text-primary/10 quote-icon mb-2 h-16 w-16 absolute right-4 top-4" />
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/10"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800 mb-1">{testimonial.name}</h4>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="arrow-wrapper">
              <div className="swiper-button-next testimonial-arrow"></div>
              <div className="swiper-button-prev testimonial-arrow"></div>
            </div>
          </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
