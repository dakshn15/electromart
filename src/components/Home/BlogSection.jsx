import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import blogData from "../../data/blogData";
import { Link } from "react-router-dom";
import BlogCard from "../Common/BlogCard";

const BlogSection = () => {
  return (
    <section className="lg:py-20 py-10 bg-gray-50">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:mb-8 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Latest Blog Posts</h2>
          <Link to={'/blogs'} className="text-primary font-medium hover:underline">View All Blogs</Link>
        </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next.blog-arrow",
              prevEl: ".swiper-button-prev.blog-arrow",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className="blog-swiper !pb-8 !-mb-8"
          >
            {blogData.map((blog, idx) => (
              <SwiperSlide key={idx}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
            <div className="arrow-wrapper">
              <div className="swiper-button-next blog-arrow"></div>
              <div className="swiper-button-prev blog-arrow"></div>
            </div>
          </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
