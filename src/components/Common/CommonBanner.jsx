import React from "react";
import bannerImg from "../../assets/images/common-banner.png";
import { Link, useLocation } from "react-router-dom";

const CommonBanner = ({ title, breadcrumb }) => {
  // If not provided, try to infer from location
  const location = useLocation();
  // Get last segment of path for page name
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const pageName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].replace(/-/g, " ") : "Home";
  // If title is provided and matches 'cart', use 'Cart' for breadcrumb
  const crumbName = title && title.toLowerCase().includes("cart") ? "Cart" : (breadcrumb || pageName);

  return (
    <section
      className="banner-section relative lg:py-16 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:container w-full mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold mb-4 capitalize">
            {title}
          </h2>
          <nav className="text-sm">
            <ol className="flex flex-wrap items-center justify-center capitalize gap-2 gap-y-1">
              <li className="flex gap-2 items-center">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <svg
                  className="text-xs inline-block"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
                <li className="font-medium">{crumbName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
