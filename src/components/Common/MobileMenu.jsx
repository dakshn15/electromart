
import React, {useState} from "react";
import { Link } from "react-router-dom";
import LanguageDropdown from "../ui/LanguageDropdown.jsx";
import { FaChevronDown, FaHome, FaShoppingBag, FaNewspaper, FaInfoCircle, FaEnvelope, FaTimes } from "react-icons/fa";
import imageMap from "../../utils/imageMap";


function MobileMenu({ isOpen, onClose }) {
  const [selectedLang, setSelectedLang] = useState("en");
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu fixed inset-y-0 right-0 z-50 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ minWidth: 320, maxWidth: 400 }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="logo-col">
            <Link to="/">
              <img src={imageMap.logo} alt="logo" loading="lazy" />
            </Link>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-primary transition-colors">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Language Dropdown */}
        <div className="p-4 border-b">
          <LanguageDropdown className="w-full" selected={selectedLang} onChange={setSelectedLang} />
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/products" className="flex items-center text-gray-700 text-base font-medium hover:text-primary transition-all duration-300">
                <FaHome className="mr-3" />Home
              </Link>
            </li>
            <li>
              <div
                className="mobile-dropdown-toggle text-gray-700 text-base font-medium hover:text-primary cursor-pointer flex justify-between items-center transition-all duration-300"
                onClick={() => setShopDropdownOpen((open) => !open)}
                aria-expanded={shopDropdownOpen}
              >
                <span className="flex items-center">
                  <FaShoppingBag className="mr-3" />Shop
                </span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${shopDropdownOpen ? "rotate-180" : ""}`} />
              </div>
              {shopDropdownOpen && (
                <div className="mobile-dropdown-content pl-4 mt-3 ms-2">
                  <Link to="/products" className="mb-3 rounded-lg text-gray-600 font-medium hover:text-primary flex items-center text-sm transition-all duration-300">
                    Mobile
                  </Link>
                  <Link to="/products" className="mb-3 rounded-lg text-gray-600 font-medium hover:text-primary flex items-center text-sm transition-all duration-300">
                    Laptops
                  </Link>
                  <Link to="/products" className="mb-3 rounded-lg text-gray-600 font-medium hover:text-primary flex items-center text-sm transition-all duration-300">
                    Headphones
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/blog" className="flex items-center text-gray-700 text-base font-medium hover:text-primary transition-all duration-300">
                <FaNewspaper className="mr-3" />Blog
              </Link> 
            </li>
            <li>
              <Link to="/about" className="flex items-center text-gray-700 text-base font-medium hover:text-primary transition-all duration-300">
                <FaInfoCircle className="mr-3" />About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center text-gray-700 text-base font-medium hover:text-primary transition-all duration-300">
                <FaEnvelope className="mr-3" />Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
