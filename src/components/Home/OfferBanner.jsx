import React from "react";
import { Link } from "react-router-dom";
import { offerBannerData } from "../../data/bannerData";

const OfferBanner = () => {
  return (
    <section className="lg:py-20 py-10 bg-gray-50">
      <div className="md:container w-full mx-auto px-4">
        <div
          className="bg-cover lg:py-20 lg:px-10 sm:p-6 p-4 rounded-2xl sm:bg-center bg-left"
          style={{ backgroundImage: `url(${offerBannerData.image})` }}
        >
          <div className="lg:max-w-lg max-w-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold md:mb-4 mb-2">
              {offerBannerData.headline}
            </h2>
            <p className="lg:text-lg xl:text-xl md:mb-6 mb-3">
              {offerBannerData.description}
            </p>
            <Link to={offerBannerData.buttonLink} className="btn-primary">
              {offerBannerData.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner; 