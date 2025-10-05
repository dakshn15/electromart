import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/productData";
import QuantityInput from "../ui/QuantityInput";
import { useCart } from "../../context/CartContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductDetails = () => {
  const { slug } = useParams();
  // Find product by matching the last part of the link (slug)
  const product = products.find(p => {
    const productSlug = p.link.split("/product/")[1] || p.link.split("/products/")[1];
    return productSlug === slug;
  });
  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  // Tabs state
  const [activeTab, setActiveTab] = useState("description");
  // Quantity state
  const [quantity, setQuantity] = useState(1);
  // Cart context
  const { dispatch, cart } = useCart();

  const handleDecrement = () => {
    setQuantity(q => Math.max(1, q - 1));
  };
  const handleIncrement = () => {
    setQuantity(q => Math.min(10, q + 1));
  };

  // Check if product is already in cart
  const cartItem = cart.find(item => item.id === product.id);
  const inCart = !!cartItem;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    if (inCart) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...product,
          quantity,
        },
      });
    }
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Dynamic images, features, description, box contents, and specifications
  return (
    <section className="lg:py-20 py-10 bg-gray-50">
      <div className="md:container w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8">
            <div>
              {/* Main Image Slider */}
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={15}
                navigation={{
                  nextEl: ".swiper-button-next.pdp-arrow",
                  prevEl: ".swiper-button-prev.pdp-arrow",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                className="main-image-slider mb-4"
              >
                {product.images && product.images.map((productImage, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative pt-[80%] border bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={productImage}
                        alt={product.name}
                        className="w-full h-full absolute top-0 left-0 object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="arrow-wrapper">
                  <div className="swiper-button-next pdp-arrow"></div>
                  <div className="swiper-button-prev pdp-arrow"></div>
                </div>
              </Swiper>
              {/* Thumbnail Slider */}
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                spaceBetween={15}
                slidesPerView={3}
                breakpoints={{
                  576: { slidesPerView: 4 },
                }}
                className="thumbnail-slider"
              >
                {product.images && product.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative pt-[90%] thumb-image rounded-lg overflow-hidden border bg-gray-100 cursor-pointer">
                      <img
                        src={src}
                        alt={`Thumbnail ${idx + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                {product.category && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md mr-2">{product.category}</span>
                )}
                {product.badge && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md">{product.badge.text}</span>
                )}
              </div>
              <h1 className="font-bold text-2xl md:text-3xl mb-2">{product.name}</h1>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {/* Render stars dynamically if you want */}
                  {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {product.rating % 1 >= 0.5 && <i className="fas fa-star-half-alt"></i>}
                </div>
                <span className="text-gray-600 text-sm">{product.ratingCount} Reviews</span>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline mb-4">
                  <span className="font-bold sm:text-3xl text-xl text-primary-dark mr-3">
                    ${((cartItem ? cartItem.price : product.price) * (cartItem ? cartItem.quantity : quantity)).toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-500 text-lg line-through">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                <p className="text-green-600 flex items-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                  <span>{product.inStock ? "In Stock - Ships within 1 day" : "Out of Stock"}</span>
                </p>
              </div>
              <div className="border-t border-b py-6 mb-6">
                <p className="text-gray-700 mb-4">{product.desc || "No description available."}</p>
                {product.features && (
                  <ul className="space-y-2 list-disc ps-5">
                    {product.features.map((feature, idx) => (
                      <li key={idx}><span>{feature}</span></li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mb-6">
                <div className="mb-5 quantity-wrp">
                  <h3 className="font-semibold mb-2">Quantity</h3>
                  <QuantityInput
                    value={quantity}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                    min={1}
                  />
                </div>
                <button
                  className={`btn-primary max-w-sm w-full flex items-center justify-center gap-2 ${!product.inStock ? "opacity-60 cursor-not-allowed" : ""}`}
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                  title={product.inStock ? (inCart ? "Already in Cart" : "Add to Cart") : "Out of Stock"}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  {product.inStock ? (inCart ? "Added to Cart" : "Add to Cart") : "Out of Stock"}
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5 mr-2"><circle cx="17" cy="4" r="2" /><path d="M15.59 5.41 5.41 15.59" /><circle cx="4" cy="17" r="2" /><path d="M12 8v4" /><path d="M8 12h4" /><path d="M19 12c0-3.87-3.13-7-7-7" /><path d="M19 12h-3" /><path d="M12 19c3.87 0 7-3.13 7-7" /><path d="M12 19v-3" /><path d="M5 12c0 3.87 3.13 7 7 7" /><path d="M5 12h3" /><path d="M12 5c-3.87 0-7 3.13-7 7" /></svg>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5 mr-2"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5 11.9 5.5l2.334 3.158c.306.413.806.66 1.332.655l4.045-.037a1.83 1.83 0 0 1 1.57.881c.324.565.304 1.22-.004 1.784L17.196 19H15" /><path d="m12 5-1.5-3 3-1.5L15 3l-3 2ZM11 19h2" /><path d="M14 16h2" /><path d="M8 19h2" /></svg>
                  <span>Eco-friendly recyclable packaging</span>
                </div>
              </div>
            </div>
          </div>
          {/* Product Tabs */}
          <div className="border-t">
            <div className="flex border-b overflow-x-auto">
              <button
                className={`tab-button sm:border-b-2 border-transparent font-semibold sm:px-6 sm:py-4 p-3 text-gray-500 hover:text-gray-700 focus:outline-none transition-all duration-300 min-w-fit ${activeTab === "description" ? "!border-primary !text-primary" : ""}`}
                data-tab="description"
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`tab-button sm:border-b-2 border-transparent font-semibold sm:px-6 sm:py-4 p-3 text-gray-500 hover:text-gray-700 focus:outline-none transition-all duration-300 min-w-fit ${activeTab === "specs" ? "!border-primary !text-primary" : ""}`}
                data-tab="specs"
                onClick={() => setActiveTab("specs")}
              >
                Specifications
              </button>
            </div>
            <div className="md:p-6 p-4">
              {/* Description */}
              {activeTab === "description" && (
                <div id="description" className="tab-content">
                  <h3 className="font-semibold text-lg mb-4">About {product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.desc || "No description available."}</p>
                  {product.boxContents && (
                    <>
                      <h4 className="font-semibold text-md mb-2 mt-6">In the Box</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc ps-5">
                        {product.boxContents.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
              {/* Specifications */}
              {activeTab === "specs" && (
                <div id="specs" className="tab-content">
                  <h3 className="font-semibold text-lg mb-4">Technical Specifications</h3>
                  <div className="space-y-3">
                    {product.specs && product.specs.map((spec, idx) => (
                      <div className="flex justify-between gap-3 border-b pb-3" key={idx}>
                        <span className="font-medium">{spec.label}</span>
                        <span className="text-end">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
