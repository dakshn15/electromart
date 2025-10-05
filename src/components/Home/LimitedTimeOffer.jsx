import React from "react";
import { useCart } from "../../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/productData";

// Filter for the two offer products by slug
const offerSlugs = ["samsung-galaxy-24-ultra", "audio-technica-headphones"];
const defaultColors = [
  { name: "Rose", color: "#9B6842", soldOut: false },
  { name: "Black", color: "#000", soldOut: false },
  { name: "Green", color: "#00694B", soldOut: false },
];
const defaultCountdown = { days: 41, hours: 20, minutes: 4, seconds: 40 };
const offers = products
  .filter(p => offerSlugs.includes(p.link.split("/products/")[1]))
  .map(p => ({
    ...p,
    colors: p.colors || defaultColors,
    countdown: p.countdown || defaultCountdown,
  }));

const LimitedTimeOffer = () => {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  // Set default checked color for each offer (first color)
  const initialColors = React.useMemo(() => {
    const obj = {};
    offers.forEach(offer => {
      obj[offer.id] = 0;
    });
    return obj;
  }, []);
  const [selectedColors, setSelectedColors] = React.useState(initialColors);

  // Countdown timer state (each offer has its own timer)
  const [timers, setTimers] = React.useState(() => offers.map(o => ({ ...o.countdown })));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers => prevTimers.map((t, idx) => {
        // If timer already reached zero, keep it at zero
        if (t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0) {
          return t;
        }
        let { days, hours, minutes, seconds } = t;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        else { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, [offers.length]);

  const handleColorChange = (offerId, colorIdx) => {
    setSelectedColors((prev) => ({ ...prev, [offerId]: colorIdx }));
  };

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 lg:mb-8 mb-4 md:text-start text-center">
          Limited Time Offer
        </h2>
         <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".offer-arrow-arrow.swiper-button-next",
            prevEl: ".offer-arrow-arrow.swiper-button-prev",
          }}
          className="product-swiper !pb-8 !-mb-8"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
        >
          {offers.map((offer, idx) => (
            <SwiperSlide key={offer.id}>
              <div className="h-full card">
                  <div className="product-content h-full flex flex-col lg:flex-row items-center">
                    <div className="h-full lg:w-auto w-full flex items-center justify-center bg-gray-100 p-3">
                      <button
                        className="max-w-[250px] w-full block bg-transparent border-0 p-0 cursor-pointer"
                        onClick={() => {
                          const slug = offer.link.split("/products/")[1];
                          navigate(`/products/${slug}`);
                        }}
                        style={{ outline: "none" }}
                        aria-label={offer.name}
                      >
                        <img src={offer.image} className="object-contain h-full w-full" alt="offer-image" />
                      </button>
                    </div>
                    <div className="flex-1 w-full lg:p-6 p-4">
                      <h3 className="text-lg font-medium mb-3">
                        <button
                          className="bg-transparent border-0 p-0 text-inherit font-inherit cursor-pointer"
                          onClick={() => {
                            const slug = offer.link.split("/products/")[1];
                            navigate(`/products/${slug}`);
                          }}
                          style={{ outline: "none" }}
                          aria-label={offer.name}
                        >
                          {offer.name}
                        </button>
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({offer.rating})</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-lg font-semibold">${offer.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${offer.oldPrice}</span>
                      </div>
                      <div className="color-variant-swatch mb-3">
                        <div className="radio-buttons flex flex-wrap items-center gap-1">
                          {offer.colors.map((color, idx) => (
                            <div className="button p-0.5" key={color.name}>
                              <input
                                type="radio"
                                id={`color-${offer.id}-${idx}`}
                                name={`Color${offer.id}`}
                                className="hidden peer"
                                checked={selectedColors[offer.id] === idx}
                                onChange={() => handleColorChange(offer.id, idx)}
                                disabled={color.soldOut}
                              />
                              <label
                                htmlFor={`color-${offer.id}-${idx}`}
                                data-val={color.name}
                                className={`color-var h-5 w-5 relative border border-transparent rounded-full block cursor-pointer peer-checked:border-black${color.soldOut ? ' var-soldout' : ''}`}
                                style={{ backgroundColor: color.color }}
                              ></label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="time-counter flex align-center text-center mb-4">
                        <div className="deal-timeline inline-flex items-center py-2 px-3 gap-3 rounded bg-primary/10 text-primary">
                          <div className="counter flex flex-wrap items-center justify-center text-center relative gap-1">
                            <span className="count count-days font-medium leading-none pe-4">{timers[idx]?.days ?? 0}</span>
                          </div>
                          <div className="counter flex flex-wrap items-center justify-center text-center relative gap-1">
                            <span className="count count-hours font-medium leading-none pe-4">{timers[idx]?.hours ?? 0}</span>
                          </div>
                          <div className="counter flex flex-wrap items-center justify-center text-center relative gap-1">
                            <span className="count count-minites font-medium leading-none pe-4">{timers[idx]?.minutes ?? 0}</span>
                          </div>
                          <div className="counter flex flex-wrap items-center justify-center text-center relative gap-1">
                            <span className="count count-seconds font-medium leading-none">{timers[idx]?.seconds ?? 0}</span>
                          </div>
                        </div>
                      </div>
                      <div className="offer-btn-wrapper">
                        <button
                          className="sm:inline-flex flex btn-primary"
                          onClick={() => {
                            const selectedColorIdx = selectedColors[offer.id];
                            const selectedColor = offer.colors[selectedColorIdx];
                            // Use a unique id for each color variant
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: {
                                id: `${offer.id}-${selectedColor?.name}`,
                                productId: offer.id,
                                name: offer.name,
                                image: offer.image,
                                price: offer.price,
                                quantity: 1,
                                total: offer.price * 1,
                                color: selectedColor?.name,
                                colorCode: selectedColor?.color,
                                link: offer.link,
                              }
                            });
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
          <div className="arrow-wrapper">
            <div className="swiper-button-next offer-arrow-arrow"></div>
            <div className="swiper-button-prev offer-arrow-arrow"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
