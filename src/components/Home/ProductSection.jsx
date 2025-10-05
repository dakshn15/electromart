import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { products } from "../../data/productData";
import ProductCard from "../Common/ProductCard";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={"full-" + i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stopColor="#facc15" /><stop offset="50%" stopColor="#d1d5db" /></linearGradient></defs><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half)" /></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={"empty-" + i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      ))}
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:mb-8 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">New Arrivals</h2>
          <Link to="/products" className="text-primary font-medium hover:underline">View All Product</Link>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-arrow.swiper-button-next",
            prevEl: ".product-arrow.swiper-button-prev",
          }}
          className="product-swiper !pb-8 !-mb-8"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          loop
        >
          {products.map((product, idx) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          <div className="arrow-wrapper">
            <div className="swiper-button-next product-arrow"></div>
            <div className="swiper-button-prev product-arrow"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection; 