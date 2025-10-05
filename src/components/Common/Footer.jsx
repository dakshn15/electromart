import React from "react";
import imageMap from "../../utils/imageMap";
import { Link } from "react-router-dom";
import { footerLinks, footerCategories, companyInfo } from "../../data/siteData";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/' },
  { name: 'X', icon: FaXTwitter , url: 'https://x.com/' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/' },
];


const Footer = () => {
  return (
    <footer className="site-footer bg-gray-900 text-white lg:pt-20 pt-10 pb-5">
      <div className="md:container w-full mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 gap-5 md:text-base text-sm">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="footer-logo mb-3">
              <Link to="/">
                    <img src={imageMap.footerLogo} alt="Footer Logo" />
              </Link>
            </div>
            <p className="text-gray-400 mb-4">Your one-stop shop for all electronic needs. Quality products, competitive prices, and excellent service.</p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.url} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  {<item.icon className="md:text-xl text-lg" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/products?category=${cat.name}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {companyInfo.address}
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="squer" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {companyInfo.email}
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyInfo.phone}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-2 border-t !border-gray-700 lg:mt-8 mt-5 pt-5 text-gray-400">
          <p>{companyInfo.copyright}</p>
          <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-all duration-300">Privacy Policy</Link>
              <Link to="/terms-condition" className="hover:text-white transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
