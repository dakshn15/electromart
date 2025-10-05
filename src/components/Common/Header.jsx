import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { navigationLinks } from "../../data/siteData";
import { categories } from "../../data/categoryData";
import { FaSearch } from "react-icons/fa";
import CartDrawer from "./CartDrawer";
import SearchPopup from "./SearchPopup";
import MobileMenu from "./MobileMenu";
import imageMap from "../../utils/imageMap";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  return (
    <>
      {/* Main Header */}
      <header className="site-header bg-white shadow sticky top-0 z-10 py-3">
        <div className="md:container w-full mx-auto px-4">
          <div className="flex items-center justify-between gap-5">
            {/* Logo */}
            <div className="logo-col">
              <h1>
                <Link to="/">
                  <img src={imageMap.logo} alt="logo" loading="lazy" />
                </Link>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="main-nav hidden lg:flex xl:space-x-8 space-x-5">
              {/* Home link */}
              <li>
                <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-all duration-300">
                  Home
                </Link>
              </li>
              {/* Shop menu with dynamic categories */}
              <li className="has-item relative group hover:bg-transparent">
                <Link to="/products" className="relative text-gray-700 hover:text-primary font-medium transition-all duration-300 pe-4">
                  Shop
                </Link>
                <ul className="menu-dropdown absolute top-full min-w-[200px] mt-2 py-2 border border-gray-200 rounded-lg shadow-lg bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto hover:visible hover:opacity-100 hover:pointer-events-auto transition-all duration-200 z-20">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <Link to={`/products?category=${encodeURIComponent(cat.name)}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* Other navigation links */}
              {navigationLinks.filter(l => l.name !== 'Home' && l.name !== 'Shop').map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-700 hover:text-primary font-medium transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 xl:max-w-sm max-w-[250px]">
              <div className="group relative w-full">
                <input type="text" placeholder="Search products..." className="form-input !pe-10" />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch className="group-focus-within:text-primary" />
                </button>
              </div>
            </div>

            {/* Cart and Mobile Menu Button */}
            <ul className="flex items-center sm:gap-3 gap-2">
              <li className="lg:hidden flex">
                <button type="button" id="search-toggle" onClick={() => setSearchOpen(true)}>
                  {/* Search SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58366 17.5003C13.9559 17.5003 17.5003 13.9559 17.5003 9.58366C17.5003 5.21141 13.9559 1.66699 9.58366 1.66699C5.21141 1.66699 1.66699 5.21141 1.66699 9.58366C1.66699 13.9559 5.21141 17.5003 9.58366 17.5003Z" stroke="#111827" strokeWidth="1.23" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3337 18.3337L16.667 16.667" stroke="#111827" strokeWidth="1.23" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              <li className="flex">
                <button
                  type="button"
                  aria-label="Account"
                  onClick={() => navigate(isLoggedIn ? "/account" : "/login")}
                  className="bg-transparent border-none p-0 m-0 flex items-center"
                >
                  {/* User SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.068 10.8998C12.3847 10.8998 14.2629 9.02167 14.2629 6.70488C14.2629 4.38809 12.3847 2.50996 10.068 2.50996C7.75117 2.50996 5.87305 4.38809 5.87305 6.70488C5.87305 9.02167 7.75117 10.8998 10.068 10.8998Z" stroke="#1A1616" strokeWidth="1.23051" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2746 19.2896C17.2746 16.0428 14.0445 13.4167 10.0677 13.4167C6.09092 13.4167 2.86084 16.0428 2.86084 19.2896" stroke="#1A1616" strokeWidth="1.23051" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              <li className="flex relative">
                <Link to="/wishlist">
                  {/* Wishlist SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7235 18.291C10.4382 18.3917 9.96839 18.3917 9.68314 18.291C7.25009 17.4604 1.81348 13.9954 1.81348 8.12256C1.81348 5.53011 3.90254 3.43265 6.47822 3.43265C8.00517 3.43265 9.35593 4.17095 10.2033 5.31197C11.0507 4.17095 12.4098 3.43265 13.9284 3.43265C16.5041 3.43265 18.5931 5.53011 18.5931 8.12256C18.5931 13.9954 13.1565 17.4604 10.7235 18.291Z" stroke="#1A1616" strokeWidth="1.23051" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">{wishlist.length}</span>
                </Link>
              </li>
              <li className="flex">
                <button type="button" id="cart-toggle" className="relative" onClick={() => setCartOpen(true)}>
                  {/* Cart SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.03809 7.26663V6.45282C7.03809 4.56511 8.55665 2.71095 10.4444 2.53477C12.6928 2.31663 14.5889 4.08689 14.5889 6.29341V7.45121" stroke="#1A1616" strokeWidth="1.2305" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.29748 19.2897H13.3314C16.7041 19.2897 17.3082 17.9389 17.4844 16.2945L18.1136 11.2606C18.3401 9.21348 17.7528 7.5439 14.1704 7.5439H7.4585C3.87604 7.5439 3.28875 9.21348 3.51528 11.2606L4.14452 16.2945C4.3207 17.9389 4.92477 19.2897 8.29748 19.2897Z" stroke="#1A1616" strokeWidth="1.2305" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7459 10.8998H13.7535" stroke="#1A1616" strokeWidth="1.78982" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.87289 10.8998H7.88043" stroke="#1A1616" strokeWidth="1.78982" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">{cart.length}</span>
                </button>
              </li>
              <li className="lg:hidden ms-1 flex">
                <button type="button" id="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
                  {/* Hamburger SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4H18" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" />
                    <path d="M2 10H18" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" />
                    <path d="M2 16H18" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchPopup isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
